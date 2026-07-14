
## Rise, South African Woman 2026 — Multi-page Website

An elegant, brand-aligned event site for the Global Women's Future Skills Network's Women's Day conference on 8 August 2026 in Rosebank, Johannesburg.

### Brand direction
- Logo: GWFSN mark (uploaded) used in header + footer
- Palette: violet purple (#7C3AED-ish, from logo), warm orange accent (#F97316-ish), deep ink, warm off-white — refined, editorial, celebratory (not "corporate empowerment stock")
- Typography: a distinctive serif for headlines (e.g. Fraunces or Playfair) + clean sans (Inter) for body — pulled in via `<link>` in `__root.tsx`

### Routes (TanStack Start, each with own head/meta)
```
/            Home — hero, intro, highlights, speaker preview, programme teaser, CTA
/programme   Full programme journey (Honour → Own → Renew → Lead → Shape → Rise)
/speakers    All 7 speakers with bios, session, themes
/attend      In-person (R499), hybrid/online, what's included, urgency
/about       About GWFSN
/faq         FAQs + contact
/register    Registration form (in-person / online) + confirmation state
```

Shared `Header` (logo + nav + Reserve CTA) and `Footer` (logo, contact, socials placeholder) rendered from `__root.tsx`.

### Key content pulled from the document
- Event: Sat 8 Aug 2026, 2–7 PM, Royal Majestic Hotel, Rosebank; hybrid; R499 in-person (covers food & refreshments)
- Speakers: Rev. Dr. Sam Oye, Yolanda Cuba, Veronica Motloutsi, Joy Ogeh-Hutfield, Bess Rhirando (host), Dr. Ntombi Mhangwani, Kagiso Malepe (moderator)
- Programme: 6 movements with descriptions
- Who should attend, hybrid, FAQ, About GWFSN — all mapped verbatim into their routes

### Register form
Client-side form with fields (name, email, phone, attendance format: In-Person/Online, org optional). Submit shows an on-page confirmation matching the doc's confirmation copy. No backend for this build — a note on the plan: if you want real registrations stored/emailed, we'd enable Lovable Cloud (Postgres + a server function) in a follow-up.

### Assets
- Upload the GWFSN logo via `lovable-assets` and reference from header/footer.
- Speaker portraits: generate tasteful abstract placeholder cards (initials + accent shapes) rather than fake photos, so we don't misrepresent real people. Real portraits can be swapped in later.
- Hero image: generate one on-brand editorial image (silhouettes/abstract, purple + orange palette).

### Tech notes
- File-based routes in `src/routes/`, each with `head()` (title, description, og:*, twitter:*)
- Replace placeholder `src/routes/index.tsx`
- Update `__root.tsx` default title/description to "Rise, South African Woman 2026 — GWFSN"
- Google Fonts loaded via `<link>` in root head (not `@import` in styles.css)
- Tailwind v4 theme tokens (purple, orange, ink, cream) added to `src/styles.css`
- All colors via semantic tokens — no hardcoded hex in components

### Out of scope (ask if wanted)
- Real registration backend (needs Lovable Cloud)
- Payment collection for R499 (Stripe/Paddle)
- CMS-editable speakers/programme
