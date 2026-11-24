---
name: Doctors template website
status: develop
track: commercial
platform: web
interest:
next: "Amit: review the three layouts and answer the open questions in prd.md"
repo:
source: Amit, 2026-11-24
updated: 2026-11-24
---

# Doctors template website

> A white-label website for doctors who own a private clinic: brings patients, takes appointment requests, and presents the doctor's bio and credentials.

## About
AMIT SAYS: "a template website for doctors owning their own personal clinic and want to maintain a website as a way to bring clients set appointments and provide information about their own bio and credentials."

Primary language Hebrew, second language English. Must comply with Israeli accessibility regulations and show clearly that it is accessible.

## Vision
AMIT SAYS: three white-label layouts tailored from the reference sites, royalty-free starter images to replace later, a two-language setup with Hebrew first.

References: remermd.com, katzclinic.co.il, royhod.com, drgrubermaayan.co.il, danielyafit.co.il (all five are paediatric or adult ENT clinics, Hebrew only).

## What the research found
- All five reference sites are Hebrew only; none offers English. That is an easy edge for this template.
- None shows a license number or a medical disclaimer. One (katzclinic) shipped its accessibility statement with template leftovers ("[יש לעדכן]").
- Accessibility law: reg. 35 of the 2013 Service Regulations requires IS 5568 level AA (based on WCAG 2.0) and a prominent accessibility statement ([gov.il](https://www.gov.il/he/pages/website_accessibility)). Toolbars are optional and never a substitute ([FAQ](https://www.gov.il/he/pages/website_accessibility_faq)).
- Damages of up to NIS 50,000 without proof of harm (law section 19נא) ([law](https://www.gov.il/he/pages/equal_rights_persons_disabilities_law)).
- Doctors' advertising rules forbid testimonials, before/after photos, prices, discounts, success claims and "מומחה" without an approved title ([Nevo](https://www.nevo.co.il/law_html/law00/73265.htm)). Four of the five references use testimonials or "thank-you letters"; this template does not.
- Privacy Amendment 13 (in force 14.08.2025): collect the minimum, no health data in the form ([guide](https://www.gov.il/BlobFolder/reports/guide_tikon13_professional/he/tikun%2013%20_170825.pdf)).

## Decisions
- 2026-11-24: Work requested directly by Amit, started at D1 (no research round). Original one-liner: "a template website for doctors owning their own personal clinic and want to maintain a website as a way to bring clients set appointments and provide information about their own bio and credentials".
- 2026-11-24: Stack: Astro static site, one config file and one text file per language. No CMS in v1. Drift: none.
- 2026-11-24: Three layouts built: A Clinic (booking first), B Profile (CV first), C Family (soft, access first). No testimonials section, by law.
- 2026-11-24: Design pass with taste-skill: A split stage, B printed annual, C colour chapters; accessibility-audit fixes applied. Drift: none.
- 2026-11-24: Taste-skill redesign rejected by Amit ("horrible"); reverted to the first layouts. Accessibility-audit fixes kept. Drift: none.
