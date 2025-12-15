# NAVLE Dashboard

A calculator application for predicting NAVLE exam success probability based on GPA, ICVA score, and VetPrep percentage.

## Deployment to GitHub Pages

This app is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository

### Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

3. **Configure basePath (if needed):**
   - If your repository name is NOT `username.github.io`, you need to set the basePath
   - Open `next.config.mjs`
   - Uncomment and update the `basePath` and `assetPrefix` lines with your repository name:
     ```javascript
     basePath: '/YOUR_REPO_NAME',
     assetPrefix: '/YOUR_REPO_NAME',
     ```
   - Commit and push the changes

4. **Trigger the deployment:**
   - The workflow will automatically run when you push to the `main` branch
   - You can also manually trigger it from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

5. **Access your site:**
   - After deployment completes, your site will be available at:
     - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` (if using a subdirectory)
     - `https://YOUR_USERNAME.github.io/` (if repository is `username.github.io`)

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.
