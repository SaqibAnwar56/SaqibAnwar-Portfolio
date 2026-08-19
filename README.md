# Saqib Anwar — Portfolio

## Structure
```
├── index.html          Main page (all sections: hero, about, skills, projects, experience, contact)
├── css/
│   └── style.css       All styling (colors, layout, animations)
├── js/
│   └── main.js         Scroll-reveal animation
├── assets/
│   ├── photo.jpg        Profile photo
│   └── resume.pdf       Downloadable resume
└── README.md
```

## Before you deploy — fix these placeholder links

Open `index.html` and search for `href="#"` — there are a few placeholders you need to replace with real URLs:

1. **Jacobabad City Guide** — "View live" link → your real Vercel/hosting URL
2. **Noor-ul-Quran** — "View live" link → your real Vercel/hosting URL
3. **SindhuGPT certificate** — "View Certificate" link → your real certificate URL
4. **4x Coursera certifications** — "View" links → your real Coursera certificate URLs

## How to deploy

**Option A — GitHub Pages (free)**
1. Create a new GitHub repo (e.g. `portfolio`)
2. Upload all files/folders keeping this exact structure
3. Go to Settings → Pages → set source to `main` branch, root folder
4. Your site goes live at `https://yourusername.github.io/portfolio`

**Option B — Vercel (free, same as your other projects)**
1. Push this folder to a GitHub repo
2. Import the repo at vercel.com
3. Deploy — no build settings needed, it's static HTML/CSS/JS

**Option C — Netlify (free)**
Drag and drop this whole folder onto netlify.com/drop — it deploys instantly.

## Notes
- Everything is plain HTML/CSS/JS — no build step, no dependencies to install.
- Fonts (Sora, IBM Plex Sans, IBM Plex Mono) load from Google Fonts via CDN — requires internet connection to render correctly.
- Fully responsive down to mobile.

## Deploying to Vercel (get yourname.vercel.app)

1. Push this folder to a GitHub repo (e.g. `portfolio`).
2. Go to vercel.com → **Add New Project** → import that repo.
3. On the "Configure Project" screen, set **Project Name** to `saqib-anwar` (or `saqibanwar` if available) — this becomes your subdomain: `saqib-anwar.vercel.app`.
4. No build settings needed — it's static HTML/CSS/JS. Click **Deploy**.
5. Once live, note your actual URL (Vercel may append characters if the exact name is taken).

### After deploying — finish the SEO setup
The SEO tags in `index.html`, `sitemap.xml`, and `robots.txt` currently point to a placeholder URL: `https://saqibanwar.vercel.app/`.

1. Find-and-replace `https://saqibanwar.vercel.app` with your **actual** deployed URL across `index.html`, `sitemap.xml`, and `robots.txt`.
2. Redeploy (push the change, Vercel auto-redeploys).
3. Go to [Google Search Console](https://search.google.com/search-console), add your domain, verify ownership, and submit `https://yourdomain/sitemap.xml`.
4. Use "Request Indexing" on your homepage URL inside Search Console to speed up first appearance in search.

**Being upfront:** ranking #1 for your name isn't guaranteed or instant — new sites typically take days to a few weeks to get indexed and start appearing, even with everything set up correctly. Submitting to Search Console and having no competing "Saqib Anwar" sites with strong SEO gives you a very good shot at ranking first, but it depends on Google's crawl schedule, not something anyone can force immediately.
