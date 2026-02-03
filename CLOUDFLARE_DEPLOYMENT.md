# Deploying to Cloudflare Pages

This repository is configured for deployment to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works)
- GitHub account (for CI/CD integration)

## Important Notes

⚠️ **Git Submodules:** This project uses git submodules for dependencies (Spectre CSS, Marked.js, etc.). Cloudflare Pages automatically initializes submodules during deployment, so no special configuration is needed.

## Deployment Methods

### Method 1: Direct Deployment via Cloudflare Dashboard (Recommended)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Pages** in the left sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select the `akengin/mert` repository
7. Configure the build settings:
   - **Production branch**: `copilot/deploy-to-cloudflare-pages` (or `main`/`master` after merge)
   - **Build command**: Leave empty (no build needed)
   - **Build output directory**: `/` (root directory)
8. Click **Save and Deploy**

### Method 2: Using Wrangler CLI

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy to Pages:
   ```bash
   wrangler pages deploy . --project-name=mert
   ```

## Custom Domain Setup

The site is configured for the custom domain `mert.akeng.in` (as specified in the CNAME file).

To set up the custom domain in Cloudflare Pages:

1. Go to your Pages project in the Cloudflare dashboard
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Enter `mert.akeng.in`
5. Follow the instructions to update your DNS records

If your domain is already managed by Cloudflare DNS, the DNS records will be automatically configured.

## Configuration Files

This repository includes the following Cloudflare Pages configuration files:

- **`_headers`**: Defines HTTP headers for security and caching
  - Security headers (X-Frame-Options, CSP, etc.)
  - Cache-Control headers for static assets
  
- **`_redirects`**: Defines URL redirects and rewrites
  - SPA-style routing to preserve query parameters

- **`wrangler.toml`**: Wrangler configuration for CLI deployments (optional)

## Project Structure

This is a static website with:
- HTML/CSS/JavaScript (no build step required)
- Web Workers for markdown rendering and content fetching
- Client-side routing via query parameters
- Markdown content loaded dynamically

## Local Development

For local development, you can use:

```bash
# Using the provided Makefile (requires websocketd and fswatch on macOS)
make dev

# Or use any static file server
python3 -m http.server 8000
# or
npx serve .
```

## Environment Variables

No environment variables are required for this static site.

## Troubleshooting

### Issue: 404 errors for routes

Make sure the `_redirects` file is present and contains:
```
/* /index.html 200
```

This ensures all routes are handled by the SPA router.

### Issue: CNAME not working

Ensure the `CNAME` file contains your custom domain and is in the root directory.

### Issue: Missing assets

Verify that all referenced assets (CSS, JS, images) are committed to the repository and referenced with correct paths.

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Configuration](https://developers.cloudflare.com/pages/configuration/)
- [Custom Domains on Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/)
