# Design QA - Rise, South African Woman 2026

source visual truth: `C:\Users\admin\Downloads\SAMP.pdf` (rendered to `tmp/pdfs/SAMP-1.png`), `C:\Users\admin\Downloads\Copilot_20260716_010406.png`, and `C:\Users\admin\AppData\Local\Temp\codex-clipboard-aa7ccbfb-7cd6-4955-ae3e-e013d5bb9626.png`
implementation screenshot: `tmp/design-qa/home-viewport.png`
focused implementation screenshot: `tmp/design-qa/featuring-viewport.png`
mobile implementation screenshot: `tmp/design-qa/mobile-home-390x844.png`
mobile menu screenshot: `tmp/design-qa/mobile-menu-390x844.png`
combined comparison: `tmp/design-qa/mobile-comparison.png`
supporting-page screenshots: `tmp/design-qa/programme-after.png`, `tmp/design-qa/attend-after.png`, `tmp/design-qa/about-after.png`
supporting-page mobile screenshots: `tmp/design-qa/programme-mobile.png`, `tmp/design-qa/attend-mobile.png`, `tmp/design-qa/about-mobile.png`
supporting-page combined comparison: `tmp/design-qa/support-pages-comparison.png`
viewport: desktop 1250 x 700 and 1440 x 900; mobile 390 x 844
state: home page at top, mobile navigation open, speaker roster, registration payment details, and top states for Programme, Attend and About

## Full-view comparison evidence

The PDF reference is a tall editorial landing page with a violet-tinted hotel hero, white event-information band, and a two-column featuring section. The implementation follows that hierarchy: the supplied `hero.png` is used as the hero, the supplied orange-and-purple logo icon is composed with live high-contrast typography in both the light header and black footer, and the featuring section uses the supplied speaker portraits beside black information panels.

## Focused-region comparison evidence

The hero and featuring regions were captured at the same desktop viewport and inspected visually. The first blue spacer now measures 82px high at the 1440px desktop viewport, while every later spacer measures 349px and remains square. This reproduces the PDF's deliberately short opening blue band followed by the larger color-block rhythm. Each black panel uses the PDF's oversized colored `SPEAKER` label, with `HOST` reserved for Prophetess Bess Rhiranda. The flip implementation remains present and keyboard-focusable. The duplicate speaker lineup remains removed from the home page.

The phone implementation was captured at 390 x 844 and compared in a combined image with the supplied previous-header reference. The compact logo lockup, black/white base, violet CTA, uppercase editorial typography and strong event-image treatment remain consistent with the source language. Mobile-specific behavior was checked separately: the full-height navigation opens above the page, the fixed reservation dock remains reachable, event metadata and editorial cards use horizontal snap scrolling, and speaker modules provide tap-specific guidance without horizontal page overflow.

Programme, Attend and About were captured before and after the supporting-page redesign. The original pages used serif display headings, cream backgrounds, rounded cards and soft gradients that visibly diverged from the homepage. The revised pages were placed in a four-up comparison with the homepage and now share its sans-serif editorial scale, black/white/blue palette, hard square borders, high-contrast split layouts and restrained violet/orange accents. Each page preserves its own purpose: numbered movement sequencing for Programme, venue-led participation choices for Attend, and brand/mission storytelling for About.

## Findings

- No actionable P0, P1, or P2 mismatches remain for the requested home-page or supporting-page redesign.
- P3 follow-up: source PDF does not include the full header/navigation treatment, so the implementation follows the supplied previous-version screenshot while keeping the navigation functional.
- P3 follow-up resolved: Joy Ogeh-Hutfield's supplied portrait is now used on both the home featuring stack and the speaker roster. Kagiso Malepe has been removed from roster content and metadata.

## Primary interactions tested

- Registration CTA navigated to `/register` successfully.
- Featured and host tiles reveal their flip-back state on hover, click, and keyboard focus.
- The existing navigation links remain available in the shared header.
- Mobile menu open/close state and event CTA were tested at 390 x 844.
- Registration copy was checked to confirm `MoMo coming soon` is absent.
- Speaker roster was checked to confirm Joy's image is present and Kagiso is absent.
- Browser console errors checked: none.
- Programme, Attend and About were each checked at 1440 x 900 and 390 x 844 with no horizontal page overflow.
- Supporting-page CTAs retain working links to registration and speaker routes.

## Comparison history

1. Initial comparison: hero and section headings inherited the old serif display style, which drifted from the PDF's sans-serif editorial treatment.
2. Fix: added a home-page typography override, rebuilt the featuring section with supplied local assets and PDF-style color blocks, and removed the duplicate home-page speaker grid.
3. Refinement: replaced the logo with the supplied glowing version, made the feature modules truly square, removed inter-card gaps, and matched the colored `SPEAKER` and `HOST` labels from the PDF.
4. Final refinement: isolated the supplied icon, rebuilt the logo lockup with live `GWFSN / Rise 2026` typography, matched the rounded purple CTA treatment, and shortened only the first blue spacer.
5. Post-fix comparison: the 1440px desktop header and featuring composition were re-captured; measured spacer heights confirmed the short-first/large-later pattern, and the black-footer lockup was checked at the responsive layout.
6. Mobile first pass: the full-screen menu content was present in the accessibility tree but visually clipped beneath the sticky header because its fixed panel inherited the header's containing context. This was a P1 navigation failure.
7. Mobile fix: changed the menu to an absolute full-viewport-height panel anchored beneath the sticky header, added bottom clearance for the persistent reservation dock, and re-captured the open state. The final screenshot shows all six navigation links and the event reservation card with no clipping.
8. Mobile final pass: verified 390px viewport width without horizontal overflow, mobile hero composition, CTA sizing, tap guidance, Joy's portrait, the revised speaker roster, payment-card copy, social icons, and an error-free console.
9. Supporting-page first pass: Programme, Attend and About retained the former serif/rounded-card language. This was a P1 cross-page consistency mismatch against the approved homepage.
10. Supporting-page fix: rebuilt all three around the homepage's typography, blue/black/white blocks, square geometry and uppercase editorial hierarchy while preserving page-specific content and CTAs.
11. Supporting-page post-fix comparison: desktop captures were compared together with the homepage visual system, and phone captures confirmed responsive wrapping, image crops, persistent mobile reservation access and zero horizontal overflow.

final result: passed
