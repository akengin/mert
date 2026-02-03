# Quick Start: Deploy to Cloudflare Pages

This is a **static website** - no build step required! 🚀

## Option 1: Cloudflare Dashboard (Easiest)

1. Go to https://dash.cloudflare.com/
2. Click **Pages** → **Create a project** → **Connect to Git**
3. Select this repository: `akengin/mert`
4. Configure:
   - Branch: `copilot/deploy-to-cloudflare-pages` (or your preferred branch)
   - Build command: *(leave empty)*
   - Build output directory: `/`
5. Click **Save and Deploy**

That's it! Your site will be live in ~1 minute.

## Option 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=mert
```

## Custom Domain

The site is configured for `mert.akeng.in`:

1. In Cloudflare Pages → Your Project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `mert.akeng.in`
4. If your domain is on Cloudflare DNS, records will auto-configure ✨

## GitHub Actions (Optional)

For automatic deployments on git push, see `.github/GITHUB_ACTIONS_SETUP.md`

---

📖 **Full Documentation:** See `CLOUDFLARE_DEPLOYMENT.md` for detailed instructions.
