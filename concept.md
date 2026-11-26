---
name: Doctors template website
status: develop
track: commercial
platform: web
interest:
next: "Amit: review the four layouts and answer the open questions in prd.md"
repo: https://github.com/amit-kap/doctors-template-website
source: Amit, 2026-11-24
updated: 2026-11-26
---

# Doctors template website

> A white-label website for doctors who own a private clinic: brings patients, takes appointment requests, and presents the doctor's bio and credentials.

## Goal
The site turns a new patient's search into a booked first visit, and gives any patient the fastest way to reach and find the clinic.

1. **Promote** (main job): does the doctor treat my problem, can I trust her, how do I book. Bio and credentials serve trust, not a CV.
2. **Book or contact:** one primary action, "book a first appointment", above the fold; call and WhatsApp one tap away.
3. **Address book:** address, hours, parking, accessibility, Waze/Maps, near the top.
4. **Landing page with extras:** the home page does 1–3 alone; inner pages are depth.

Success is measured in booking requests and calls. Returning patients need only "contact the clinic" (AMIT SAYS).

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

## Booking systems in Israel (checked 2026-11-24)
| System | Price | Hebrew | How the site connects | Reminders |
| --- | --- | --- | --- | --- |
| [Medform](https://www.medform.co.il/pricelist/) | 390 ₪/mo + 1,200 ₪ setup | Yes | Hosted booking page; embed not stated | WhatsApp, SMS, email |
| [Klinix](https://www.klinix.co.il) | 190–390 ₪/mo | Yes | Booking-page link | WhatsApp |
| [Tipulog](https://www.tipulog.co.il) | 75–395 ₪/mo ([third-party](https://www.greeninvoice.co.il/magazine/תוכנה-לניהול-מרפאה/)) | Yes | Not described | SMS |
| [SimplyBook.me](https://www.simplybook.me/en/pricing) | Free to €59.9/mo | Not listed | Link, iframe, widget | SMS/WhatsApp, paid credits |
| [Setmore](https://www.setmore.com/pricing) | Free; $5/user/mo | Not listed | Link, button, widget | SMS on Pro |

No vendor documents an accessible embed. Decision: the site links to the clinic's booking page (new window, labelled), and falls back to its own request form when there is none. Open: ask Medform and Klinix whether their booking page is accessible.

## Decisions
- 2026-11-24: Work requested directly by Amit, started at D1 (no research round). Original one-liner: "a template website for doctors owning their own personal clinic and want to maintain a website as a way to bring clients set appointments and provide information about their own bio and credentials".
- 2026-11-24: Stack: Astro static site, one config file and one text file per language. No CMS in v1. Drift: none.
- 2026-11-24: Three layouts built: A Clinic (booking first), B Profile (CV first), C Family (soft, access first). No testimonials section, by law.
- 2026-11-24: Design pass with taste-skill: A split stage, B printed annual, C colour chapters; accessibility-audit fixes applied. Drift: none.
- 2026-11-24: Taste-skill redesign rejected by Amit ("horrible"); reverted to the first layouts. Accessibility-audit fixes kept. Drift: none.
- 2026-11-24: Goal defined with Amit (see ## Goal). Booking: use an Israeli booking system if one fits, else the request form. Returning patients: contact only. Added a fourth layout, D Landing, in SaaS landing-page style. Drift: the one-liner now leads with booking a first visit.
- 2026-11-25: Added a fifth layout, E Journey, from a reference video Amit gave (ref/uuuu_qAJjlfKM.mp4, a fertility-clinic site): calm SaaS look, soft colour washes, a scroll-driven "first visit" path. Left out the reference's patient quotes, success rates, success stories and "free consultation" (advertising rules). Drift: none.
- 2026-11-26: Amit merged A Clinic into Landing: the two shared the same hero, sections and palette family. Landing is now layout A and the default; it took Clinic's highlights checklist. Clinic's top utility bar was dropped. Four layouts remain: Landing, Profile, Family, Journey. Drift: none.
- 2026-11-26: Journey home reworked at Amit's request: hero uses a clinic waiting-area photo; hero, FAQ and closing panels sit in the page column; the visit section has a numbered stepper with phase names that links to each step; blurred colour blobs and gradient glows removed; dark purple replaced with deep sage green. Drift: none.
- 2026-11-26: Journey hero changed again at Amit's request: full width, light pale-yellow band, teddy-bear ear-check photo, no dark panels anywhere (closing panel is pale yellow too). Supersedes the dark hero in the line above. Drift: none.
- 2026-11-26: Journey hero settled with Amit: the original centred format, full-width photo of a children's play corner under a light veil, text and facts card on the page column, no dark and no yellow. Supersedes the split yellow hero in the line above. Closing panel is sage. Drift: none.
- 2026-11-26: Journey got its own about page at Amit's request: heading-and-content sections with hairlines, and a dated timeline for training and positions. Also for Journey: template switcher bar pinned to the top (showcase only), hero WhatsApp button in brand green, hero photo slightly blurred. Drift: none.
- 2026-11-26: Journey got its own services page at Amit's request, with the home's treatment cards and line drawings; the Journey inner pages share one light closing panel. Drift: none.
- 2026-11-26: Journey got its own appointment page (Amit: "Yes, appointment"): contact pills in the head, the request form beside address and hours, then the questions. Same form and fields as the shared page. Drift: none.
