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

## SEO

This is a discoverability-driven site. The whole point of the page is to show up when someone searches for things like "churches in Sacramento" or "new church Sacramento." **Keep SEO top of mind on every change** — don't strip metadata, structured data, or descriptive copy in the name of minimalism.

### Canonical domain

- **Primary / canonical**: `https://sactabernacle.com`
- **Secondary**: `sactab.com` — should be configured in Vercel to **301 redirect** to `sactabernacle.com` so SEO equity consolidates on one domain.
- The canonical URL is hardcoded in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts`. If the canonical ever changes, update all three.

### What's wired up

- **Metadata** (`src/app/layout.tsx`): title template, description, keywords, Open Graph, Twitter card, canonical, robots directives, `metadataBase`.
- **JSON-LD structured data** (`src/app/layout.tsx`): `Church` schema injected via a `<script type="application/ld+json">` tag in the body. Includes name, slogan, foundingDate, areaServed (Sacramento, California). Critical for local search and rich results.
- **Sitemap** (`src/app/sitemap.ts`): served at `/sitemap.xml` via Next.js convention.
- **Robots** (`src/app/robots.ts`): served at `/robots.txt` via Next.js convention.
- **Open Graph image** (`src/app/opengraph-image.tsx`): dynamically generated 1200×630 PNG using brand colors and the Oook headline font. Served at `/opengraph-image`.

### Rules to follow when editing

- **Never lower the page's text content without thinking about SEO.** Google needs words on the page to rank. The current Hero has very little body copy, which is already a known gap. Adding sections (About, Vision, etc.) helps SEO; removing them hurts it.
- **Headings matter.** There should be exactly one `<h1>` per page, and it should contain meaningful, keyword-relevant text. The current `<h1>` is "A place of becoming." — that's brand, not keywords. If you add sections, use `<h2>` / `<h3>` for their headings and include phrases like "church in Sacramento", neighborhood names, etc. naturally.
- **Image alt text**: decorative images get `alt=""` (correct for the fingerprint and ambient washes). Logos should have descriptive alt like `alt="Sacramento Tabernacle"`. Don't keyword-stuff alt text.
- **Internal links** use real `<a>` / `<Link>` elements with descriptive anchor text — not buttons or "click here."
- **External links** to social, Planning Center, etc. should keep `rel="noopener noreferrer"` for outbound `target="_blank"` links (already in place).
- **Don't accidentally `noindex` the site.** The robots metadata in `layout.tsx` is set to allow indexing. Don't flip it to `noindex` without a reason (e.g. a temporary staging deploy).
- **JSON-LD must stay valid.** If you change the schema, validate it at https://validator.schema.org or Google's Rich Results Test before merging.
- **When a meeting address is confirmed**, add a `PostalAddress` and `geo` to the JSON-LD in `layout.tsx`, and surface the address visibly in the footer (NAP — Name, Address, Phone — consistency is a local SEO signal).
- **When social profiles exist**, add their URLs to the `sameAs` array in the JSON-LD.

### Off-site SEO (must be done outside this repo)

These have more impact than anything in the code, especially for "churches in Sacramento":

1. **Google Business Profile** — create one at business.google.com. Set service area = Sacramento. Mark as "opening soon" with a January 2027 date. Add photos, link to sactabernacle.com.
2. **Google Search Console** — verify the domain, submit `https://sactabernacle.com/sitemap.xml`, monitor coverage and queries.
3. **Bing Webmaster Tools** — same idea; lower priority than Google but free and easy.
4. **Backlinks** — reach out to denominational/network sites, partner churches, local Christian directories, and local press to link to the site.

## Outstanding TODOs

- **Planning Center form URL**: The "Join The Team" button in `Hero.tsx` currently links to `https://people.planningcenteronline.com/forms/YOUR_FORM_ID`. This needs to be replaced with the real Planning Center form URL once it's created.
- **Meeting address**: Once a launch location is confirmed, (a) add a `PostalAddress` block to the `Church` JSON-LD in `src/app/layout.tsx`, (b) surface the address in the footer for NAP consistency, and (c) add it to the Google Business Profile.
- **Social profiles**: Once Instagram/Facebook/YouTube/etc. profiles exist, add them to the `sameAs` array in the JSON-LD and link them from the footer.
- **`sactab.com` redirect**: Configure `sactab.com` to 301-redirect to `sactabernacle.com` in Vercel's domain settings.
- **Content depth**: The page has very thin text content, which caps SEO ranking potential. Consider re-enabling at least one of the disabled sections (About, Vision) with copy that mentions Sacramento naturally.

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
