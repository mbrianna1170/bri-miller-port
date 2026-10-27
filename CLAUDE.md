# Bri Miller — portfolio site

Personal portfolio for Bri Miller, a UX/UI designer. React 19 + Vite, styled with CSS Modules, animated with framer-motion. Single page: Navbar → Hero → Featured Work → About → Contact → Footer.

## Working with Bri

- Bri is a designer, not a developer. Explain changes in plain language (what it looks like, not just what code changed), and give a recommendation when there's a choice to make.
- After every visual change: check it in the browser pane at a wide desktop size (Bri's screen is ~1550px wide) **and** at mobile (375px), confirm no horizontal overflow, then commit on the current branch.
- Commit after each change. Only push to GitHub when Bri asks.
- Bri sometimes iterates on a choice (e.g. tried a slimmer nav, then reverted). If a request is ambiguous, ask before building.

## Running it

- Node.js is installed at `C:\Program Files\nodejs`. The desktop app may not have it on PATH, so `.claude/launch.json` runs Vite directly via `node.exe node_modules/vite/bin/vite.js` (dev server on port 5173). In a shell, prepend `C:\Program Files\nodejs` to PATH before `npm` commands.
- The project lives in **OneDrive**, which can swallow file-change events. `vite.config.js` uses `watch.usePolling` to fix this. If the browser ever shows stale code, restart the dev server.
- `npm run lint` and `npm run build` should both pass before committing.

## Git

- Remote: https://github.com/mbrianna1170/bri-miller-port
- `main` = the **original** portfolio, kept untouched as a safe copy.
- `redesign` = all current work. Do new work here (or on a branch off it). Don't merge into `main` unless Bri asks.
- Commits are authored as Bri Miller <brianna.miller09@yahoo.com> (set in this repo's local git config).

## Design system

**Vibe:** airy, warm, editorial, minimal, softly playful. Lots of whitespace, centered single-column flow, typography does the heavy lifting. Avoid loud/graphic/high-contrast looks.

**Colors** (tokens in `src/index.css` `:root`):
- `--cream #FAF7F2`: page background
- `--warm-white #FFF9F4`: project block background
- `--terracotta #D4785A`: THE accent (logo, rotating word, all outlines and buttons, arrows, asterisks)
- `--deep #2C2420`: main text · `--mid #5C4A42`: body text · `--light-mid #9C8880`: muted text
- `--line #EDE4DC`: thin dividers · `--blush` / `#F7DCCD`: soft gradient backgrounds only (never outlines)

**Type:**
- **DM Sans** for almost everything. 300 for large text/headlines/body, 400–500 for nav/links, 600 for small uppercase labels.
- **Bricolage Grotesque** (500–700, no italics) only for accents: the "bri miller" logo (700) and coral highlight words in headlines (500).
- Voice is **lowercase** for big text and nav ("hi, i'm bri…", "work · about · contact · resume"). Small labels are **UPPERCASE with wide letter-spacing**.

**Shapes & patterns:**
- Buttons/clickables = **pills** (`border-radius: 100px`, 1px terracotta outline, fills terracotta on hover). Containers = **rounded rectangles** (`14px`).
- **Section banners:** each section opens with the shared global class `.section-banner` (2px terracotta outline, 14px corners, no fill, uppercase spaced title). Used for FEATURED WORK, (a little) ABOUT ME, CONTACT ME. Optional small `.kicker` span above the title.
- Sections share a max width of 1240px with `6vw` side padding so all banners line up exactly.
- `LoopyArrow` component: hand-drawn terracotta arrow that draws itself in. Used in the hero (big, bobbing, links to #work) and above SKILLS & TOOLS (small, draws on scroll).
- Motion is subtle: fades on load/scroll, the rotating hero word, arrows, the skills marquee. **No TV-static "jitter"**: it was removed on purpose.

## Sections (current state)

- **Navbar:** logo left, `work · about · contact · resume` right (resume is a pill). Fixed, but hides while scrolling down and slides back in on scroll up (Bri chose this over always-fixed or a back-to-top button); off the very top it gets a translucent cream background. Bri wants this height kept as-is.
- **Hero:** one-line headline "hi, i'm bri and i design experiences people [return to. / trust. / enjoy.]", capped ~46px. The rotating word has reserved width so the line doesn't shift. On < 760px it wraps. Tagline + LoopyArrow below.
- **Featured Work:** `src/data/projects.js` drives large alternating image/info blocks (`ProjectCard`). Wide screenshots use `imageFit: 'contain'`. Order (Bri's choice): 01 Elephaid (Bri's two-phone mockup (splash + about) on flat teal, `imageFit: 'fill'` + `imageBg: '#186F78'` so both phones show whole at any card shape), 02 Bowlsome Smoothie, 03 Camp Woofs & Wiggles. Case study "next" links follow this order.
- **About:** banner, then photo (coral ring) left + text right; stacks on mobile. Headline "curious about the why. creative with the how." Then the small arrow, SKILLS & TOOLS, and an infinite skills marquee (pauses on hover, respects reduced motion).
- **Contact:** banner, then three lines: say hello (click copies the email and shows "copied!" for 2s; no mailto), connect (LinkedIn), resume (download pdf ↓).
- **Footer:** logo left, © line center, LINKEDIN · RESUME · WORK right, all small uppercase.

## Decisions already made

- Images: keep files at roughly 2-3x the size they display at, saved as WebP at ~0.9 quality (bri.webp, bowlsome-mockup.webp, camp-woofs-mockup.webp were shrunk this way from 2-4MB originals; Bri wanted no visible quality loss).

- Resume: `public/resume.pdf` is a copy of `Desktop/Resume/Bri_Miller/Bri_Miller_UX_2026.pdf`. The nav, contact and footer links all download it as `Bri_Miller_Resume.pdf` (no new tab). Re-copy it when Bri updates the resume.

- No phone number on the site (spam). Email + LinkedIn + resume only. The downloadable resume PDF does include the phone number; Bri chose to keep it there.
- "Selected/Featured": Bri chose **FEATURED WORK**.

## Open to-dos

- **Case studies:** template in `src/pages/CaseStudy.jsx` + `src/components/caseStudy/`, content in `src/data/caseStudies/<slug>.js` (listed in `index.js`). Pages load at `/<slug>` via a plain pathname check in `App.jsx` (no router). Camp Woofs & Wiggles is built; screens and crops were captured from the live site (https://mbrianna1170.github.io/camp_woofs_and_wiggles/). Lines marked DRAFT (including all four reflection cards) need Bri's wording. Bowlsome Smoothie is built (stacked 3-screen hero, persona/brief note cards, step flow, testing findings with before/after, kiosk showcase); screens, wireframes and user flow are Bri's Adobe XD exports (.webp in `src/assets/bowlsome/`); logo, illustrations and UI pieces are cropped from them and the palette was sampled from their pixels (may be a shade off). No placeholders left. Finding 1 (had to unselect before choosing a new size → highlight now moves on one tap) shows the original bowl screen → LoopyArrow → revised screen with Medium selected (`arrow: true` on a finding). The revised screen's Large reads "12 oz" (likely a typo for 24 oz in Bri's file). The "unclear cart navigation" (expected Add to Cart) finding was removed on purpose: Bri never fixed it. Don't add it back unless Bri revises that flow. No hi-fi Smoothie Base or Add-Ins screens were supplied, yet the hi-fi steps still read "of 7". Its usability sheet has a participant's real name: never put names on the site. Elephaid (project 3) is built from Bri's Figma file "Elephaid 2" (fileKey `Qg3Vi4QmRwYsa2f1HAmN0s`); use its "Portfolio •" frames (e.g. Home 2047:649). Section 01 shows original home (Bri-supplied) + redesigned splash + home. All screens (incl. Volunteer and Donation Confirmation) are the current Portfolio versions with the new nav bar; the final showcase staggers all seven in rows of four. The Figma Starter plan caps MCP calls, so batch exports. Hosting is Netlify (connected to GitHub): `netlify.toml` sets the build, Node 22, and the SPA fallback that serves `index.html` for case study paths.
