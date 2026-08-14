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

There are two routes:

```
/                    → src/app/page.tsx
/statement-of-faith  → src/app/statement-of-faith/page.tsx
```

The landing page (`/`) is composed of:

```
Navbar   → src/components/Navbar.tsx
Hero     → src/components/sections/Hero.tsx
Pastors  → src/components/sections/Pastors.tsx
Events   → src/components/sections/Events.tsx   (anchor: #events)
FAQ      → src/components/sections/FAQ.tsx      (anchor: #faq)
Connect  → src/components/sections/Connect.tsx  (anchor: #connect)
Footer   → src/components/Footer.tsx
```

The `src/components/sections/` folder contains several unused section components (About, Vision, JoinTeam, CoreValues, Marquee) that were built but removed to keep the launch page focused. Do not delete them — they may be re-enabled post-launch.

### Content lives in `src/lib/`, not in JSX

Two content files are the single source of truth, each consumed by more than one output. Edit the data file, never the rendered copy:

- **`src/lib/faq.ts`** — feeds the FAQ section, the `FAQPage` JSON-LD in `page.tsx`, and `/llms.txt`.
- **`src/lib/beliefs.ts`** — the 16 Assemblies of God fundamental truths; feeds `/statement-of-faith` (body + table of contents + JSON-LD) and `/llms.txt`.

Source PDFs for both are in `docs/`.

The FAQ uses native `<details>`/`<summary>` rather than the shadcn `Accordion` on purpose: answers stay in the DOM when collapsed and render without JS, so crawlers and AI scrapers always see the full text. Don't swap it for a JS accordion.

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
- The canonical URL is hardcoded in `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `statement-of-faith/page.tsx`, and `llms.txt/route.ts`. If the canonical ever changes, update all five.

### What's wired up

- **Metadata** (`src/app/layout.tsx`): title template, description, keywords, Open Graph, Twitter card, canonical, robots directives, `metadataBase`.
- **JSON-LD structured data** (`src/app/layout.tsx`): `Church` schema injected via a `<script type="application/ld+json">` tag in the body, on every page. Includes name, slogan, foundingDate, areaServed (Sacramento, California), founder, `memberOf` (Assemblies of God), and `publishingPrinciples` pointing at the Statement of Faith. Critical for local search and rich results.
- **FAQ structured data** (`src/app/page.tsx`): `FAQPage` schema generated from `src/lib/faq.ts`. Eligible for FAQ rich results and heavily used by AI search.
- **Statement of Faith structured data** (`src/app/statement-of-faith/page.tsx`): `WebPage` + `BreadcrumbList` in an `@graph`, with each of the 16 truths exposed as a `hasPart` anchor URL.
- **Sitemap** (`src/app/sitemap.ts`): served at `/sitemap.xml` via Next.js convention. Add an entry here for every new route.
- **Robots** (`src/app/robots.ts`): served at `/robots.txt` via Next.js convention.
- **Open Graph image** (`src/app/opengraph-image.tsx`): dynamically generated 1200×630 PNG using brand colors and the Oook headline font. Served at `/opengraph-image`.
- **`/llms.txt`** (`src/app/llms.txt/route.ts`): a plain-text summary of the church for AI crawlers, generated at build time from `src/lib/faq.ts` and `src/lib/beliefs.ts` so it can't drift from the site. This used to be a static `public/llms.txt` — that file was removed, because a file in `public/` shadows the route and would silently serve stale content.

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
- **Content depth**: Largely addressed by the Pastors narrative, the FAQ, and the Statement of Faith page. The remaining gap is the Hero itself, which is still nearly copy-free. Re-enabling About or Vision with copy that mentions Sacramento naturally is still the next best win.
- **Submit the new page**: Request indexing for `/statement-of-faith` in Google Search Console, and confirm the FAQ rich result validates in the Rich Results Test once deployed.

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

- Don't add pages or routes without discussing with the team — the site is intentionally small (currently `/` and `/statement-of-faith`).
- Don't introduce dark backgrounds (`bg-delta-stone`) on the main page — the light cream aesthetic is intentional.
- Don't add nav links — the navbar is intentionally logo-only. Secondary content (FAQ, Statement of Faith) is reached from the footer nav and from in-section links, deliberately. `/statement-of-faith` being low-profile in the UI is a choice, not an oversight; it stays fully discoverable to crawlers via the sitemap, JSON-LD, and `/llms.txt`.
- Don't commit the Planning Center form URL until it's confirmed — use the placeholder.
