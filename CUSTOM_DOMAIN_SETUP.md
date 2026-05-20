# Setting Up a Custom Domain (Optional)

If you want your website to have a custom domain like `ai-cpt-codes.com` instead of (or in addition to) the GitHub URL, follow this guide.

---

## Benefits of a Custom Domain

- **Professional**: `ai-cpt-codes.com` vs `poorvabedmutha31.github.io/ai-cpt-codes-website/`
- **Memorable**: Easier to share and remember
- **Branding**: Better for publications and presentations
- **Both Work**: You'll have both the GitHub URL and custom domain

---

## Step 1: Purchase a Domain

Buy a domain from any registrar:

**Recommended Registrars:**
- [Namecheap](https://www.namecheap.com) - ~$10-15/year
- [Google Domains](https://domains.google) - ~$12/year
- [Cloudflare](https://www.cloudflare.com/products/registrar/) - At-cost pricing
- [GoDaddy](https://www.godaddy.com) - Popular but more expensive

**Suggested Domain Names:**
- `ai-cpt-codes.com`
- `ucsd-ai-cpt.org`
- `healthcare-ai-codes.com`
- `cpt-ai-research.org`

---

## Step 2: Configure DNS Records

After purchasing, add these DNS records in your domain registrar:

### For Apex Domain (like `ai-cpt-codes.com`)

Add these **A records**:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

### For Subdomain (like `www.ai-cpt-codes.com`)

Add a **CNAME record**:
```
Type     Name    Value
CNAME    www     poorvabedmutha31.github.io
```

---

## Step 3: Add Custom Domain to GitHub

1. Go to your repository:
   https://github.com/poorvabedmutha31/ai-cpt-codes-website

2. Click **Settings** → **Pages**

3. Under "Custom domain", enter your domain:
   ```
   ai-cpt-codes.com
   ```
   (or whatever domain you bought)

4. Click **Save**

5. Wait for DNS check (can take a few minutes)

6. ✅ Check **"Enforce HTTPS"** once DNS is verified

---

## Step 4: Add CNAME File (Automated)

GitHub will automatically create a CNAME file, but you can also do it manually:

```bash
cd /Users/p1bedmutha/ai-cpt-codes-website
echo "ai-cpt-codes.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

---

## DNS Propagation

After configuring DNS:
- **Can take**: 5 minutes to 48 hours
- **Usually takes**: 15-30 minutes
- **Check status**: https://dnschecker.org

---

## Example Configurations

### Example 1: Using Namecheap

1. Login to Namecheap
2. Go to Domain List → Manage → Advanced DNS
3. Add these records:

```
Type          Host    Value                    TTL
A Record      @       185.199.108.153         Automatic
A Record      @       185.199.109.153         Automatic
A Record      @       185.199.110.153         Automatic
A Record      @       185.199.111.153         Automatic
CNAME Record  www     poorvabedmutha31.github.io    Automatic
```

### Example 2: Using Google Domains

1. Login to Google Domains
2. Select your domain → DNS
3. Under "Custom resource records":

```
Name    Type    TTL      Data
@       A       1h       185.199.108.153
@       A       1h       185.199.109.153
@       A       1h       185.199.110.153
@       A       1h       185.199.111.153
www     CNAME   1h       poorvabedmutha31.github.io.
```

---

## Verification

After setup, test your domain:

```bash
# Check DNS records
dig ai-cpt-codes.com +noall +answer

# Check CNAME
dig www.ai-cpt-codes.com +noall +answer

# Visit your site
open https://ai-cpt-codes.com
```

---

## Troubleshooting

### Domain not working after 24 hours?

1. **Check DNS records** are correct:
   - Use https://dnschecker.org
   - Make sure A records point to GitHub IPs
   
2. **Check CNAME file** exists in repo:
   ```bash
   cat CNAME
   ```
   
3. **Check GitHub Pages settings**:
   - Custom domain is saved
   - HTTPS is enforced
   
4. **Clear DNS cache**:
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```

### Certificate errors?

- Wait for GitHub to provision SSL certificate (can take 24 hours)
- Make sure "Enforce HTTPS" is checked
- DNS must be fully propagated first

---

## Cost Breakdown

**Total Annual Cost:**
- Domain registration: $10-15/year
- GitHub Pages: FREE
- SSL Certificate: FREE (automatically provided)
- Hosting: FREE

**One-time setup time:** 15-30 minutes

---

## Benefits Summary

### With Custom Domain:
✅ Professional URL: `https://ai-cpt-codes.com`  
✅ Easy to share and remember  
✅ Better for academic citations  
✅ Automatic HTTPS/SSL  
✅ Still keeps GitHub URL as backup  

### Both URLs Will Work:
- `https://ai-cpt-codes.com` (custom domain)
- `https://poorvabedmutha31.github.io/ai-cpt-codes-website/` (GitHub URL)

---

## Do I Need This?

**You DON'T need a custom domain if:**
- The GitHub URL works fine for your needs
- You're just sharing internally with the research team
- You want to save $10-15/year

**You SHOULD get a custom domain if:**
- Publishing in academic journals
- Presenting at major conferences
- Want a more professional/memorable URL
- Planning to reference it in grant applications
- Want to build a brand around the research

---

## Questions?

The GitHub URL works perfectly fine without a custom domain. This is completely optional and can be added anytime - even months or years after launch!

**Current working URL:**
```
https://poorvabedmutha31.github.io/ai-cpt-codes-website/
```

This is professional enough for most academic purposes.
