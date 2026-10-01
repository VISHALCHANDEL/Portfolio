# Deployment Guide for Vishal Chandel's Portfolio

Your portfolio website is built with clean HTML5, Tailwind CSS (via CDN), and Vanilla JS. It is 100% static, fast, and requires zero build steps or server runtime.

You can publish it **for free** on either **GitHub Pages** or **Render**.

---

## 🐙 Method 1: Host on GitHub Pages (Recommended - 2 Minutes)

GitHub Pages gives you a clean URL like `https://VISHALCHANDEL.github.io/portfolio` for free!

### Step-by-Step Instructions:

1. **Open Terminal or PowerShell** in your project folder:
   ```bash
   cd "C:\Users\visha\.gemini\antigravity\scratch\portfolio-website"
   ```

2. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit for Vishal Chandel"
   ```

3. **Create a Repository on GitHub**:
   - Go to [https://github.com/new](https://github.com/new)
   - Name your repository `portfolio` (or `VISHALCHANDEL.github.io` for a root user domain).
   - Set visibility to **Public**.
   - Click **Create repository**.

4. **Push your code to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/VISHALCHANDEL/portfolio.git
   git push -u origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your GitHub Repository -> **Settings** -> **Pages** (on the left sidebar).
   - Under **Build and deployment -> Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
   - Wait 30 seconds, and your website will be LIVE at `https://VISHALCHANDEL.github.io/portfolio/`! 🎉

---

## ⚡ Method 2: Host on Render.com (Static Site)

Render provides automatic deployments whenever you push updates to GitHub.

### Step-by-Step Instructions:

1. Push your portfolio repository to GitHub (follow steps 1-4 above).
2. Go to [https://dashboard.render.com/](https://dashboard.render.com/) and sign in with GitHub.
3. Click **New +** -> **Static Site**.
4. Connect your `portfolio` GitHub repository.
5. Set the following fields:
   - **Name**: `vishal-chandel-portfolio`
   - **Branch**: `main`
   - **Build Command**: *(leave blank or type `echo "No build needed"`)*
   - **Publish Directory**: `.` (or `./`)
6. Click **Create Static Site**.
7. Render will publish your site in ~20 seconds with a free `.onrender.com` custom link! 🚀
