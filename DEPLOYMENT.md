# Deployment Guide - GitHub & Vercel

## Step 1: Authenticate with GitHub

Open your terminal and run:
```bash
gh auth login
```

Follow the prompts:
- Choose "GitHub.com"
- Choose "HTTPS" 
- Choose "Login with a web browser"
- Press Enter to open the browser
- Authorize GitHub CLI

## Step 2: Create GitHub Repository

Once authenticated, run these commands in your terminal:

```bash
cd "/Users/amirhosseindavoodi/Desktop/Real estate"
gh repo create luxury-estates --public --source=. --remote=origin --push
```

This will:
- Create a new public repository called "luxury-estates"
- Add it as the remote origin
- Push your code to GitHub

## Step 3: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Follow the prompts - it will automatically detect Next.js and deploy!

### Option B: Using Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your "luxury-estates" repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your site will be live in minutes!

## Alternative: Manual GitHub Setup

If you prefer to create the repo manually:

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `luxury-estates`
3. Choose Public
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"

Then run:
```bash
cd "/Users/amirhosseindavoodi/Desktop/Real estate"
git remote add origin https://github.com/YOUR_USERNAME/luxury-estates.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

