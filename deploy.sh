#!/bin/bash

# AI CPT Codes Website Deployment Script
# This script will deploy your website to GitHub Pages

set -e  # Exit on error

echo "🚀 AI CPT Codes Website Deployment"
echo "===================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI (gh) is not installed.${NC}"
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

echo -e "${GREEN}✓ GitHub CLI found${NC}"

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo -e "${YELLOW}⚠️  Not authenticated with GitHub${NC}"
    echo "Authenticating now..."
    gh auth login
fi

echo -e "${GREEN}✓ Authenticated with GitHub${NC}"
echo ""

# Get repository details
REPO_NAME="ai-cpt-codes-website"
GITHUB_USERNAME=$(gh api user -q .login)

echo "Repository: $REPO_NAME"
echo "Username: $GITHUB_USERNAME"
echo ""

# Check if repository exists
if gh repo view "$GITHUB_USERNAME/$REPO_NAME" &> /dev/null; then
    echo -e "${YELLOW}⚠️  Repository already exists${NC}"
    read -p "Do you want to push to the existing repository? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Deployment cancelled."
        exit 0
    fi
else
    echo "Creating new repository..."
    gh repo create "$REPO_NAME" \
        --public \
        --description "Interactive visualization of AI-related CPT codes and healthcare adoption trends" \
        --source=. \
        --remote=origin \
        --push

    echo -e "${GREEN}✓ Repository created and code pushed${NC}"
fi

# Check if remote exists
if ! git remote get-url origin &> /dev/null; then
    echo "Adding remote..."
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
fi

# Push to GitHub
echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo -e "${GREEN}✓ Code pushed to GitHub${NC}"
echo ""

# Enable GitHub Pages
echo "Enabling GitHub Pages..."
gh api \
    --method PUT \
    -H "Accept: application/vnd.github+json" \
    repos/"$GITHUB_USERNAME"/"$REPO_NAME"/pages \
    -f source='{"branch":"main","path":"/"}' \
    2>/dev/null || echo "GitHub Pages may already be enabled"

echo -e "${GREEN}✓ GitHub Pages enabled${NC}"
echo ""

# Display success message
echo "=========================================="
echo -e "${GREEN}🎉 Deployment Successful!${NC}"
echo "=========================================="
echo ""
echo "Your website will be available at:"
echo -e "${GREEN}https://$GITHUB_USERNAME.github.io/$REPO_NAME/${NC}"
echo ""
echo "Note: It may take 2-3 minutes for the site to become available."
echo ""
echo "To view your repository:"
echo "  gh browse"
echo ""
echo "To check Pages status:"
echo "  gh browse --settings"
echo ""
