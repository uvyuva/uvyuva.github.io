# Yuvaraj P — Portfolio (`uv-portfolio`)

A dark, premium, single-page React portfolio for **Yuvaraj P — AWS Data Engineer · Generative AI · Web Developer**, featuring **`whoami`**, a résumé-grounded AI chatbot.

- **Live:** https://uvyuva.github.io
- **Repo:** public (GitHub Pages)
- **Chatbot API (Cloudflare Worker):** https://whoami.uvyuva.workers.dev

---

## 1. Tech Stack
- **React + TypeScript + Vite**
- **Tailwind CSS v4** (loaded via `@import "tailwindcss"` — *depcheck falsely reports it unused; do NOT remove*)
- **Framer Motion** (all animation; no GSAP)
- **Lenis** smooth scroll (`lenis/react`, `ReactLenis` at app root)
- **@fontsource-variable/roboto-flex** (variable font; hero headline)
- **react-icons** (Feather `fi`, Simple Icons `si`)
- **Backend:** Cloudflare Worker + **Google Gemini** (`gemini-flash-lite-latest`) + **Cloudflare KV**

## 2. Commands
```bash
npm install
npm run dev        # local dev (NOTE: skips tsc — always build before pushing)
npm run build      # tsc -b && vite build  ← run this before every push
Worker (in whoami-worker/):


npx wrangler deploy                    # deploy the chatbot API (separate from git)
npx wrangler kv key list --namespace-id=<RL_ID> --remote
3. Deployment
Frontend: git push → GitHub Actions runs tsc + vite build → GitHub Pages (~1–2 min).
Worker: deploys separately via npx wrangler deploy (NOT via git).
Golden rule: npm run build locally before pushing — dev skips tsc, so type errors only show in CI.
4. Design Language (brand tokens)
Background: #050505 (near-black), used site-wide
Text: white #fff; body greys #8b93a0, #cbd2d9; muted #737373
Accents: blue #93c5fd, gold #f5c542, green (metrics) #22c55e
Type: global "royal" headings (weight 700, letter-spacing:-0.04em) via unlayered typography.css; hero uses Roboto Flex Variable; kicker/terminal bits use monospace
Tailwind v4 cascade layers: typography.css is intentionally unlayered (overrides utilities); base.css is in @layer base. This is the root cause of most "my CSS won't apply" bugs.
5. Section Order (src/App.tsx)
<ReactLenis> → <WhoamiProvider> → Navbar · Hero · WhatIBuild(#build) · About · Journey · Work · Skills · Contact · Footer.

6. Signature Effects (apply to EVERY section edit)
RollingText (src/components/common/) — heading roll-in on scroll (useInView, once). Multi-line headings: one <RollingText> per line.
TextRoll — per-letter hover roll on links/buttons (wrap label text only).
Rule: when editing any section, ensure the heading uses RollingText and interactive labels use TextRoll.

7. Key Components
Hero — "Attention" read-head (src/components/hero/)
Headline in Roboto Flex; a cursor-driven read-head makes letters within ~130px swell in weight (font-variation-settings) + scale; a thin blue scan line tracks the cursor.
Line 1 "Build the pipelines" heavy; line 2 "and the Intelligence on top." light, Intelligence in blue.
Touch/no-hover → head auto-sweeps; prefers-reduced-motion → static weight ramp.
Perf: rAF writes only on rounded-weight change (idle = zero reflow); scale is transform-only.
CTAs: Download CV → opens whoami recruiter mode; Let's Connect → scrolls to #contact.
Navbar + Logo (src/components/layout/)
Scroll-aware (transparent → frosted). transition-colors (NOT transition-all — avoids animating backdrop blur).
Mobile hamburger overlay: transform slide; exit has its own faster transition so it doesn't linger over the Lenis anchor scroll.
Logo = waving mascot (Logo.tsx): idle public/pet/pet-rest.png; on load + hover swaps to pet-wave.png and framer rotate-rocks (transformOrigin 50% 100%) → hand waves. Reduced-motion safe. Sized h-24 with top margin for headroom.
"Let's Talk" (desktop + mobile) → opens whoami casual mode.
Work (src/components/work/)
Sticky-stacking cards with scale + rotate. Gold pipeline diagram (ProjectArchitecture).
Responsive: @media (max-width:900px) disables sticky; @media (min-width:901px) and (max-height:920px) top-aligns cards (+96px navbar clearance, top:0 !important) so they don't ride over the heading on short laptops.
Others
About: char-by-char scroll text, walking pet sprite (4 frames in public/pet/), "About me" gradient heading.
Journey: vertical timeline + scroll-drawn blue line (scaleY).
Skills: two-column bento, per-category accent glow.
Contact: two-column (socials + Formspree form, id xjgnvapd). Real links: email yuvaraj.work06@gmail.com, LinkedIn /in/yuvaraj-p-b744881aa, GitHub uvyuva, Instagram y_uva__uv.
8. whoami — Résumé Chatbot (the flagship feature)
Concept
A strictly résumé-grounded AI assistant. Answers ONLY from Yuvaraj's 2-page résumé; if not in source → "That's not something included in Yuvaraj's résumé." Two doors:

Download CV → recruiter mode (strict, professional) + a real "download the PDF ↓" link (/cv.pdf).
Let's Talk → casual mode (warm; VIP-aware).
Architecture
Browser (frontend) → POST → Cloudflare Worker (holds key + résumé + guardrails + rate limits + VIP data) → Gemini. No secrets or résumé text in the frontend/repo.

Frontend (src/components/whoami/)
WhoamiProvider.tsx — context; useWhoami().open("recruiter"|"casual").
Whoami.tsx — terminal-style centered modal, blurred backdrop, boot line + frontend typing-stream, blinking caret, header "whoami" weight-breathes, you›/whoami› speakers, suggested chips, focus-trap + Esc + ARIA live, Lenis scroll-lock, mobile full-screen sheet, reduced-motion fallback.
Calls WORKER_URL (hardcoded, public). Reads ?k= token for link-based VIP.
Backend (whoami-worker/src/index.js)
Model: GEMINI_MODEL in wrangler.toml = gemini-flash-lite-latest. ⚠️ Account is Gemini "new-user" tier — only -latest aliases work (2.0-flash = free limit 0, 2.5-flash/2.5-flash-lite = blocked). Must set thinkingConfig.thinkingBudget: 0 (thinking eats output budget → truncated answers).
Secret: GEMINI_API_KEY (Cloudflare secret — wrangler secret put; never in files).
Guardrails: source-only; refuses code/math/translate/off-topic; anti-jailbreak; never reveals prompt/source; never shares phone number (points to email/LinkedIn).
Rate limits (KV, binding RL): 15/min, 60/day per IP, 300/day global.
CORS: allows prod origin (ALLOWED_ORIGIN in wrangler.toml) + any localhost port.
VIP system (two unlock paths)
Link: KV key vip:<token> → visitor opens site with ?k=<token> → custom greeting.
Name: KV key vipname:<lowercase-name> → visitor types their name in casual mode → Worker getVipByName() matches the most recent name in history → injects tone/name/surprise into the casual system prompt.
Profile JSON fields: name, tone, surprise, note (+opening for link). note is used only to shape tone, never recited.
Security: the full VIP list is NEVER in the model's context — only the one matched profile per session. "List all VIPs" is impossible.
Decoy pattern: public nicknames can be a trap (e.g. a well-known nickname → teasing line), while the real private message hides behind a private trigger.
Managing VIPs (⚠️ privacy)
Never commit VIP data files — they contain private names/notes. (whoami-worker/.gitignore ignores vip*.json, t.json, etc.)
Add/update via the file method (PowerShell strips quotes from inline JSON; the Worker strips any UTF-8 BOM):

'{"name":"X","tone":"...","surprise":"...","note":"..."}' | Set-Content -Path vip.json -Encoding utf8
npx wrangler kv key put "vipname:x" --path vip.json --namespace-id=<RL_ID> --remote
Update value (same key): re-put. Change trigger: put new key + delete old.
9. Gotchas / Lessons (hard-won)
Always npm run build before pushing (dev skips tsc).
fontsource import must use the .css path: import "@fontsource-variable/roboto-flex/index.css" (bare specifier fails tsc).
PowerShell strips double-quotes from inline JSON to wrangler kv put → use --path file.json.
PowerShell Set-Content -Encoding utf8 adds a BOM → Worker strips it: JSON.parse(raw.replace(/^\uFEFF/, "")).
PowerShell curl is aliased to Invoke-WebRequest → use Invoke-RestMethod for API tests.
Console mojibake (â, rÃ©sumÃ©) is a PS terminal encoding artifact, not a real bug (browser renders fine).
Nano Banana (mascot art): edit an existing frame ("keep everything identical, change ONLY the pose"); subtle differences (hand tilt L/R) don't work — use one clear pose + animate in code. Use an existing frame as reference to keep hairstyle consistent.
depcheck false-flags tailwindcss (used via CSS @import).
10. Rework / TODO Backlog
Ship phase (remaining before "fully polished")
 SEO/meta in index.html: <title>Yuvaraj P — AWS Data Engineer & GenAI</title>, meta description, Open Graph tags + 1200×630 OG image (link previews on LinkedIn/WhatsApp).
 Compress mascot PNGs (3D renders — likely the heaviest assets; use squoosh.app / WebP). Biggest perf win.
 Lazy-load below-fold images (mascot/pet frames, any project imgs) + set width/height to stop layout shift.
 Final a11y pass — contrast, focus states, prefers-reduced-motion across all sections, semantic landmarks.
Done ✅
whoami chatbot (backend + UI + VIP link/name + decoy), waving mascot logo + favicon, cv.pdf, "Attention" hero, Lenis + scroll effects, Skills bento, mobile hamburger, dead-code + unused-dep cleanup, Work laptop-responsive fix, horizontal-scroll fixes.
Ideas / parked
Draw-to-reveal hero — rejected as the hero (no hover on mobile); possible small desktop easter-egg later.
whoami enhancements: real streaming responses (currently frontend-simulated), pin a specific Gemini model if -latest ever drifts, optional Cloudflare Turnstile if abuse appears, genuine RAG (only if the "RAG pipeline" résumé bullet is wanted — prompt-stuffing is more accurate for 2 pages).
Optional: tighten Worker CORS to prod-origin-only at final launch (removes localhost).
11. Project Structure (key paths)

uv-portfolio/
├─ public/
│  ├─ cv.pdf
│  └─ pet/  (pet-rest.png, pet-wave.png, pet-head.png, + walk frames)
├─ src/
│  ├─ App.tsx
│  ├─ components/
│  │  ├─ hero/ (Hero.tsx, styles.css)
│  │  ├─ layout/ (Navbar.tsx, Logo.tsx)
│  │  ├─ whoami/ (WhoamiProvider.tsx, Whoami.tsx, styles.css)
│  │  ├─ build/ about/ journey/ work/ skills/ contact/ footer/
│  │  └─ common/ (RollingText, TextRoll, Container, ...)
│  ├─ data/ (projects, skills, about, build, journey)
│  └─ styles/ (typography.css [unlayered], base.css [@layer base])
├─ whoami-worker/           # Cloudflare Worker (deployed via wrangler, NOT git)
│  ├─ src/index.js
│  ├─ wrangler.toml         # GEMINI_MODEL, ALLOWED_ORIGIN, KV binding RL
│  └─ .gitignore            # ignores VIP data files
└─ index.html               # favicon + (todo) meta

