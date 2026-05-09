# Sacramento Tabernacle — Claude Code Context

## What this is

A pre-launch marketing landing page for **Sacramento Tabernacle**, a church plant launching January 2027. The site is intentionally minimal — it exists to build awareness and direct interested people to a Planning Center form to join the launch team.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — utility-first, no config file; all tokens defined in `globals.css`
- **shadcn/ui** (base-nova style) — available but mostly unused right now
- **Path alias**: `@/*` → `src/*`

## Dev commands

```bash
npm run dev    # start local dev server at localhost:3000
npm run build  # production build
npm run lint   # eslint
```

## Current page structure

The site is a single page (`src/app/page.tsx`). Only these three components are active:

```
Navbar   → src/components/Navbar.tsx
Hero     → src/components/sections/Hero.tsx
Footer   → src/components/Footer.tsx
```

The `src/components/sections/` folder contains several unused section components (About, Vision, Pastors, JoinTeam, CoreValues, FAQ, Marquee) that were built but removed to keep the launch page focused. Do not delete them — they may be re-enabled post-launch.

## Brand colors

All colors are defined as Tailwind tokens in `src/app/globals.css`. Use these class names — never hardcode hex values.

| Token | Hex | Usage |
|---|---|---|
| `sage-cream` | `#e2e4c3` | Primary background, light surfaces |
| `delta-stone` | `#2c2825` | Primary text, dark buttons |
| `sycamore` | `#374129` | Accent text (e.g. italic headline), hover states |
| `golden-valley` | `#c5b98d` | Warm accent, highlights |
| `ocean-mist` | `#adcbc3` | Soft teal, ambient color washes |
| `river-sage` | `#abd3e9` | Light blue, subtle accents |
| `sage-green` | `#92a575` | Secondary green |

The current design is **light mode**: `sage-cream` backgrounds with `delta-stone` text.

## Typography

- **Heading font**: `font-heading` — "Oook Medium" (loaded from `/public/fonts/oook-medium.otf`). Use for all display/headline text.
- **Body font**: `font-sans` — Inter (Google Fonts)
- The italic `<em>` in the headline uses `style={{ fontStyle: "italic" }}` inline — Tailwind's `italic` utility doesn't trigger the custom font's italic style correctly.

## Design decisions to preserve

- **Sage-cream background** throughout — warm, airy, editorial feel. Avoid going back to a dark `delta-stone` background.
- **Navbar** is `bg-sage-cream/90` with `backdrop-blur-sm` and a subtle bottom border.
- **Footer** is plain `bg-sage-cream` — no heavy treatment needed.
- The hero has two soft ambient color washes (absolutely positioned blurred circles) and a large faded fingerprint icon on the right. These are decorative and should stay unless the hero layout changes significantly.
- **No "About", "Give Online", or other nav links** — the navbar is intentionally logo-only right now.

## Outstanding TODOs

- **Planning Center form URL**: The "Join The Team" button in `Hero.tsx` currently links to `https://people.planningcenteronline.com/forms/YOUR_FORM_ID`. This needs to be replaced with the real Planning Center form URL once it's created.

## Assets

All public assets live in `public/`:

```
public/
├── logos/
│   ├── logo-black.png        # main wordmark (used in Navbar + Footer, no invert needed on light bg)
│   ├── icon-black.png        # fingerprint icon (used faded in Hero background)
│   ├── place-of-becoming-white.png
│   └── ...other logo variants
├── fonts/
│   └── oook-medium.otf       # custom heading font
└── place-of-becoming.mp4     # brand video (not currently used — available if needed)
```

A PDF branding guide is at `docs/brand-guide.pdf` — reference it for color, type, and logo usage rules.

## What to avoid

- Don't add pages or routes without discussing with the team — the site is intentionally one page.
- Don't introduce dark backgrounds (`bg-delta-stone`) on the main page — the light cream aesthetic is intentional.
- Don't add nav links until there's actual content to link to.
- Don't commit the Planning Center form URL until it's confirmed — use the placeholder.
