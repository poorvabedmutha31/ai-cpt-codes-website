# Enable GitHub Pages - Quick Guide

Your code is already pushed to GitHub! Now you just need to enable GitHub Pages.

## Option 1: Using GitHub Website (Easiest - 30 seconds)

1. Go to: https://github.com/poorvabedmutha31/ai-cpt-codes-website

2. Click the **"Settings"** tab (top right)

3. In the left sidebar, click **"Pages"**

4. Under "Source":
   - Select branch: **main**
   - Keep folder: **/ (root)**
   
5. Click **"Save"**

6. Wait 2-3 minutes, then visit:
   **https://poorvabedmutha31.github.io/ai-cpt-codes-website/**

That's it! Your website will be live!

---

## Option 2: Using Command Line

```bash
# Open your repository settings in browser
gh browse --settings

# Then follow steps 3-6 from Option 1 above
```

---

## After GitHub Pages is Enabled

Your website will be live at:
```
https://poorvabedmutha31.github.io/ai-cpt-codes-website/
```

This is a **project site** - completely separate from your personal site at:
```
https://poorvabedmutha31.github.io/
```

They won't interfere with each other!

---

## Adding a Custom Domain (Optional)

If you want a custom domain like `ai-cpt-codes.com`, you can add it after:

1. Buy a domain from Namecheap, Google Domains, etc.

2. In GitHub Pages settings, add your custom domain

3. Configure DNS records (I can help with this)

4. Add CNAME file to your repository

Then your site will be available at both:
- `https://poorvabedmutha31.github.io/ai-cpt-codes-website/` (GitHub URL)
- `https://ai-cpt-codes.com` (Your custom domain)

---

## Verify It's Working

After enabling Pages, check the deployment:

```bash
# Check Pages status
gh api repos/poorvabedmutha31/ai-cpt-codes-website/pages

# Open your live website
open https://poorvabedmutha31.github.io/ai-cpt-codes-website/
```

---

## Troubleshooting

**If you see 404 error:**
- Wait 2-3 minutes for initial build
- Make sure "main" branch is selected in Pages settings
- Verify index.html is in the root folder (it is!)

**If images don't load:**
- Wait for full deployment (can take up to 5 minutes)
- Clear browser cache

**Still having issues?**
- Run: `gh repo view poorvabedmutha31/ai-cpt-codes-website --web`
- Check the "Actions" tab for build status

---

## Summary

✅ Code is pushed to GitHub  
⏳ Need to enable Pages (takes 30 seconds)  
🚀 Website will be live in 2-3 minutes  
🎉 Ready to share with Eileen Kim!
