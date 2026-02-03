# GitHub Actions Setup for Cloudflare Pages

If you want to use the automated GitHub Actions workflow for deployment, you need to set up the following secrets in your GitHub repository:

## Required Secrets

Navigate to your repository → Settings → Secrets and variables → Actions → New repository secret

Add the following secrets:

1. **CLOUDFLARE_API_TOKEN**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use the "Edit Cloudflare Workers" template or create a custom token with:
     - Permissions: `Account.Cloudflare Pages` with `Edit` permission
   - Copy the token and add it as a GitHub secret

2. **CLOUDFLARE_ACCOUNT_ID**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select your account
   - Copy the Account ID from the right sidebar (or from the URL)
   - Add it as a GitHub secret

## Testing the Workflow

Once the secrets are configured:
1. Push changes to the `copilot/deploy-to-cloudflare-pages` branch
2. The workflow will automatically trigger
3. Check the Actions tab in GitHub to see the deployment progress

## Manual Deployment

If you prefer not to use GitHub Actions, you can deploy manually using:
- Cloudflare Dashboard (recommended for first deployment)
- Wrangler CLI (see CLOUDFLARE_DEPLOYMENT.md)

## Notes

- The workflow runs on pushes to `main`, `master`, and `copilot/deploy-to-cloudflare-pages` branches
- Pull requests to `main`/`master` will also trigger preview deployments
- The `GITHUB_TOKEN` is automatically provided by GitHub Actions (no setup needed)
