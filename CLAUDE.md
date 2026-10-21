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

- **Navbar:** logo left, `work · about · contact · resume` right (resume is a pill). Scrolls away (not fixed). Bri wants this height kept as-is.
- **Hero:** one-line headline "hi, i'm bri and i design experiences people [return to. / trust. / enjoy.]", capped ~46px. The rotating word has reserved width so the line doesn't shift. On < 760px it wraps. Tagline + LoopyArrow below.
- **Featured Work:** `src/data/projects.js` drives large alternating image/info blocks (`ProjectCard`). Wide screenshots use `imageFit: 'contain'`. Project 3 is a **placeholder** (`image: null` shows "image coming soon").
- **About:** banner, then photo (coral ring) left + text right; stacks on mobile. Headline "curious about the why. creative with the how." Then the small arrow, SKILLS & TOOLS, and an infinite skills marquee (pauses on hover, respects reduced motion).
- **Contact:** banner, then three lines: say hello (mailto), connect (LinkedIn), resume (view pdf ↗).
- **Footer:** logo left, © line center, LINKEDIN · RESUME · WORK right, all small uppercase.

## Decisions already made

- No phone number on the site (spam). Email + LinkedIn + resume only.
- Copy-email-on-click was offered for the mailto link; Bri said "not yet."
- "Selected/Featured": Bri chose **FEATURED WORK**.

## Open to-dos

- `public/resume.pdf` doesn't exist yet. The nav, contact and footer resume links all point to `/resume.pdf`.
- "read case study →" buttons link to `#slug` anchors that don't exist. **Next up: building case study pages** in this repo (same nav/footer/design), likely via a router so each lives at its own URL (e.g. `/bowlsome-smoothie`).
- Project 3 needs real details and an image.
- Large images (~3.7MB each) should be compressed before launch.
