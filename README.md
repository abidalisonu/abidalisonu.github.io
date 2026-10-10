# Abid Ali – Portfolio

Personal portfolio built with Vue 3 and Vite. One page: hero with an interactive failover diagram, case studies, experience, skills and contact.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Requires Node.js 18 or newer.

## Edit the content

Everything you'll want to change is in **`src/data.js`**: profile links, highlights, case studies, experience and skills. The components only handle layout.

To update the CV, replace `public/Abid_Ali_Resume.pdf` with a new file of the same name.

## Deploy to Vercel (recommended)

1. Create a new GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/abidalisonu/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub, choose **Add New → Project**, and import the repo.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`). Click **Deploy**.
4. Every push to `main` redeploys the site.

## Custom domain

1. Buy a domain such as `abidali.dev` (Cloudflare Registrar or Namecheap).
2. In Vercel: **Project → Settings → Domains → Add**, enter the domain, and follow the DNS records it shows.
3. HTTPS is set up automatically.

## Alternatives

- **Netlify:** import the repo; build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, build, and publish `dist` with a GitHub Actions workflow (or skip the base change if you use a custom domain).

## Before sharing

- Keep client names generic and never add internal code, documents or real customer data.
- Add screenshots to case studies only with mock data.
