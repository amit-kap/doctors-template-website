# Doctor clinic website template

A white-label website for a doctor's private clinic in Israel. Hebrew first (RTL), English second, four layouts, built to Israeli accessibility law.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:4321. The bar at the top switches between the four layouts (showcase mode).

## The four layouts

| | Layout | Best for | Reference |
| --- | --- | --- | --- |
| A | **Landing** (`landing`) | Default. Booking first: book button, facts and trust bar up front | drgrubermaayan.co.il |
| B | **Profile** (`editorial`) | Senior or academic doctors whose CV sells: serif, timeline, index | royhod.com, remermd.com |
| C | **Family** (`warm`) | Paediatric and family practices: soft shapes, clinic access up front | katzclinic.co.il |
| D | **Journey** (`journey`) | Calm premium look, soft colour washes, scroll-driven first-visit path | reference video in `ref/` |

All four share the inner pages: about, services, appointment, accessibility statement, privacy policy. Journey has its own about and services pages (`src/templates/journey/`).

## Make a site for a clinic

1. **`src/site.config.ts`**: pick `template`, set `showcase: false`, fill phones, license numbers, hours, address, accessibility contact and physical access.
2. **`src/content/he.ts`** and **`src/content/en.ts`**: every text on the site. TypeScript flags anything missing.
3. **Photos**: put the clinic's own photos in `public/images/` and point `images` in the config at them (`src: '/images/portrait.jpg'`). The starter photos are hotlinked from Unsplash (free licence) and are placeholders only.
4. **Form**: set `contact.formEndpoint` (Formspree, Web3Forms or your own API), or `contact.bookingUrl` to link to the clinic's own booking system (Israeli options: Medform, Klinix, Tipulog; name it in `contact.bookingProvider`). Every book button then opens it in a new window; embeds are not recommended because their accessibility is unverified. With neither, book buttons go to our request form, which opens an email draft.
5. **Check**: `npm run check:launch`. It fails on leftover demo values or showcase mode, and warns on wording the advertising rules forbid.
6. **Build**: `npm run build` → static files in `dist/`, ready for any static host (Netlify, Vercel, Cloudflare Pages).

Optional: a brand colour in `site.brand.primary` (keep 4.5:1 contrast with white).

## Accessibility (IS 5568)

The law: Equal Rights for Persons with Disabilities (Accessibility Adjustments for Service) Regulations 2013, regulation 35. Websites must meet IS 5568 at level AA, which is based on WCAG 2.0 ([Commission guide](https://www.gov.il/he/pages/website_accessibility), [FAQ](https://www.gov.il/he/pages/website_accessibility_faq)). This template is built to WCAG 2.2 AA, a superset.

Built in:

- `lang` and `dir` on every page; logical CSS so one stylesheet serves RTL and LTR.
- Skip link, landmarks, one `h1` per page, visible focus, 44px targets.
- Text contrast 4.5:1 or more in all five palettes.
- Reflows at 320px and at 200% text with no horizontal scroll; respects reduced motion.
- Accessible form: labels, text errors tied to fields, error summary, no CAPTCHA.
- Accessibility statement page with the reg. 35ה contents, linked from the header, footer and panel.
- Clear "accessible site" indication: a footer badge and a header link to the accessibility statement, which also opens the display-settings panel.
- A native accessibility panel (text size, contrast, greyscale, links, readable font, spacing, stop motion, focus). No third-party overlay: the Commission says toolbars are optional and never replace real compliance.

Verified: axe-core finds 0 WCAG 2.0–2.2 A/AA violations on the home pages of all five layouts in both languages, plus the shared inner pages.

Still needed before launch (manual):

- Screen reader pass: NVDA or JAWS on Windows, VoiceOver on iOS, TalkBack on Android. The statement says these were used, so do them.
- Fill the real accessibility contact and the clinic's physical access details.
- Have an accessibility professional review the live site, and a lawyer confirm exemptions, privacy duties and the specialist title.

## Advertising rules for doctors

Physicians Regulations (Prohibited Advertising) 2008 ([Nevo](https://www.nevo.co.il/law_html/law00/73265.htm)). The template leaves out what they forbid:

- No testimonials or patient letters, no before/after photos, no patient images.
- No prices, discounts or success rates.
- No praise of the doctor's own skill and no comparisons.
- "מומחה/מומחית" only with an approved specialist title.

License numbers are shown with a link to the [Ministry of Health register](https://www.gov.il/he/service/licensed-medical-practitioners).

## Privacy (Amendment 13)

The form collects only name, phone, topic and preferred time, with a notice and consent at the point of collection. There is no health field. The site sets no cookies and loads no trackers; only the accessibility settings are stored in the browser.

## Files

```
src/site.config.ts      one file per clinic: data, template, images
src/content/he.ts, en.ts all text, one file per language
src/templates/          the four home layouts
src/views/              shared inner pages
src/components/         header, footer, accessibility panel, form, …
src/styles/base.css     reset, tokens, accessibility modes
src/styles/themes.css   the four palettes and type
src/pages/[...path].astro  one router: page × language × template
scripts/prelaunch-check.mjs
```

Add a language: add it to the `Lang` type and `languages` in the config, then create `src/content/<lang>.ts`. RTL languages (`he`, `ar`) are detected in `src/i18n.ts`.
