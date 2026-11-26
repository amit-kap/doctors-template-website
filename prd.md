# Doctors template website: product brief

## User and problem
A doctor who owns a private clinic in Israel needs a site that brings patients, makes booking easy, presents bio and credentials, and complies with accessibility law. Agencies currently build these on WordPress or Wix, mostly Hebrew only, with third-party accessibility widgets.

## Goal
Turn a new patient's search into a booked first visit; give any patient the fastest way to reach and find the clinic. Success = booking requests and calls. Returning patients: "contact the clinic" is enough (AMIT SAYS).

## First-version outcome
A developer or agent can launch a compliant two-language clinic site in under a day by editing two files.

## Main flow
1. A new patient lands on the home page and sees, above the fold: specialty, one "book a first appointment" button, call/WhatsApp, address and today's hours.
2. Reads about the doctor and the services.
3. Books: phone, WhatsApp, request form or external booking link.
4. Anyone can open the accessibility panel or statement from every page.

## Included
- Four home layouts (Landing, Profile, Family, Journey) sharing inner pages. Landing is the booking-first default.
- Pages: home, about, services, appointment, accessibility statement, privacy policy, 404.
- Hebrew (RTL, default) and English (LTR), hreflang, language switch on every page.
- Native accessibility panel and statement generated from config.
- Pre-launch checker for demo leftovers and forbidden ad wording.

## Excluded
- CMS or admin screen.
- Built-in booking calendar; v1 links to an external system or sends a request.
- Blog or articles.

## Later
- CMS (e.g. Decap or TinaCMS on the same files).
- Service detail pages and a blog for SEO.
- Pre-op / "for parents" resource page (seen on royhod.com, drgrubermaayan.co.il).
- More languages (Arabic, Russian).

## Acceptance criteria
1. Every page has correct `lang` and `dir`; switching language keeps the same page.
2. axe-core reports 0 WCAG 2.0–2.2 A/AA violations on all pages, three layouts, two languages. **Met.**
3. Text resized to 200% and width 320px show no horizontal scroll. **Met.**
4. The accessibility statement includes level, adjustments, tested assistive tech, gaps, physical access, contact and update date.
5. The form shows text errors tied to each field and a summary, and collects no health data.
6. `npm run check:launch` fails while demo values or showcase mode remain.
7. Empty states: no WhatsApp number hides WhatsApp; no booking URL shows the form; no form endpoint opens an email draft.

## Budget and success test
Budget: default 4 weeks (none stated). Success: one real clinic site launched from the template and a screen-reader review passed.

## Open
- OPEN: Who edits content after launch: the doctor (needs a CMS) or you/an agent (files are enough)?
- OPEN: Business model: sell the template, or build sites as a service?
- OPEN: Default form backend and booking system to integrate (e.g. Doctoronline, Calendly)?
