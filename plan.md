# Doctors template website: build plan

## Approach
- Astro 7, static output, no client framework. Self-hosted fonts (Fontsource): IBM Plex Sans Hebrew, Frank Ruhl Libre + Assistant, Rubik.
- One router (`src/pages/[...path].astro`) renders page × language × template.
- Data in `src/site.config.ts`; text in `src/content/<lang>.ts`, typed by `src/content/types.ts`.
- CSS with logical properties, OKLCH tokens per template, accessibility modes as attributes on `<html>`.

## Risks
1. Accessibility claim not true on a real site. Earliest test: axe on every page (done), then a screen-reader pass and a professional review.
2. Doctor edits break compliance (contrast, alt text, wording). Test: `check:launch`; a CMS would need the same guards.
3. Hotlinked stock images change or disappear. Test: replace with local files at launch (the checker warns).

## Milestones
1. Three layouts, two languages, inner pages, accessibility panel and statement. 1 day. Verified with axe (0 violations, 18 pages) and manual checks at 375px, 1024px, 200% text and high contrast. **Done 2026-11-24.**
2. Accessibility-audit fixes (kept). A taste-skill redesign was tried and reverted at Amit's request. **Done 2026-11-24.**
3. Amit's review. 1 day.
4. First real clinic: content, photos, form backend, deploy, screen-reader pass. 2–3 days.
5. Optional CMS. 2–3 days.

## Delivery
Static build to Netlify, Vercel or Cloudflare Pages. Running costs: hosting free tier plus a form service (free tier) and a domain.

## Status
Milestones 1–2 done. Waiting for Amit's review and the open questions in `prd.md`.

## Review
(filled in D7)
