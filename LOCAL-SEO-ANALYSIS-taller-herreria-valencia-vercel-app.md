# Local SEO Analysis — taller-herreria-valencia.vercel.app

**Date:** 2026-09-03
**Business:** Flamingo Services (herrería / metalwork — techos, portones, pérgolas, puertas de seguridad)
**Analyzed URL:** https://taller-herreria-valencia.vercel.app/

## ⚠️ Blocking issue found before scoring

**The site's `astro.config.mjs` declares `site: 'https://tallerherreriavalencia.com'`, but that domain is currently live with a completely different, unrelated website** (served via Carrd — confirmed by `content-security-policy: frame-ancestors https://carrd.com` in its response headers). Right now:

- `robots.txt` on the Vercel deployment points `Sitemap:` to `https://tallerherreriavalencia.com/sitemap-index.xml`
- The generated `sitemap-index.xml` and `sitemap-0.xml` list `<loc>https://tallerherreriavalencia.com/</loc>` — a domain this Astro site does not control right now

Any crawler indexing the Vercel URL will be handed a sitemap pointing at someone else's (or the old) live site. This must be resolved before the rest of this audit is actionable — see Critical #1 below.

---

## 1. Local SEO Score: 22/100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 10/100 | 2.5 |
| Reviews & Reputation | 20% | 25/100 | 5.0 |
| Local On-Page SEO | 20% | 40/100 | 8.0 |
| NAP Consistency & Citations | 15% | 35/100 | 5.25 |
| Local Schema Markup | 10% | 0/100 | 0.0 |
| Local Link & Authority | 10% | 10/100 | 1.0 |
| **Total** | | | **21.75 ≈ 22/100** |

The site has strong on-page copy, clear CTAs, and consistent NAP (name + phone) across the page — but it has **zero structured data, zero GBP integration signals, and zero detectable citations**. This is a design/UX-mature site that hasn't had its local-SEO technical layer built yet.

---

## 2. Business Type: Service Area Business (SAB)

No street address appears anywhere on the page. The site instead uses service-area language: "Valencia y todo Carabobo", "Maracay · Caracas", "Medimos en tu casa" (we measure at your place). This is correctly a SAB pattern — do not add a fabricated street address. Instead, lean fully into `areaServed` schema and location-specific content (see Critical #4 and #6).

## 3. Industry Vertical: Home Services (metalwork/ironwork)

Signals: service area coverage, "Presupuesto sin costo" (free estimate) matches the Home Services "free estimate" pattern, no licensing/bonding claims currently made (worth adding if applicable — trust signal). Recommended schema base: `LocalBusiness` (no more specific Schema.org subtype exists for ironwork/herrería; `HomeAndConstructionBusiness` is the closest umbrella type and is acceptable).

---

## 4. GBP Optimization Checklist

| Signal | Status |
|---|---|
| GBP embed / Maps iframe on page | ❌ Not present |
| Reviews widget pulling live GBP reviews | ❌ Not present (static testimonials only, see §5) |
| Business hours visible on page | ✅ "Lunes a sábado · 8:00 a 5:00" in footer |
| Photos evidence | ✅ Real project photos throughout (galería, hero carousel) — good raw material for GBP photo uploads |
| Primary category signal (inferable from copy) | Herrería / metalwork — reasonably clear from content |

**Action:** none of this is fixable in the codebase alone — it requires actually claiming/optimizing the Google Business Profile and, ideally, embedding the Maps widget or a "Ver en Google Maps" link + review count on the page once GBP exists.

---

## 5. Review Health Snapshot

The site shows 3 static testimonial quotes (`Resenas.astro`) with client name, service, and city — good content, but:

- No visible review **count** or **star rating**
- No `aggregateRating` schema
- No link out to the actual Google/Facebook review profile
- No response/recency signals (expected, since these aren't live reviews)

**Recommendation:** once GBP has real reviews, add `aggregateRating` schema (see §7) and consider a small "4.9★ en Google (32 reseñas)" line near the testimonials — review count/rating visibility is a stronger trust signal than quotes alone, and Sterling Sky's "18-day rule" makes review *velocity* worth monitoring going forward.

---

## 6. NAP Consistency Audit

| Source | Name | Phone | Address |
|---|---|---|---|
| Page HTML (header/footer/CTA) | Flamingo Services | 0424 471 5866 (consistent everywhere, `tel:+584244715866`) | None (expected — SAB) |
| LocalBusiness schema | — | — | — *(schema doesn't exist yet)* |
| GBP | Unknown — not verified as part of this audit | | |

Name and phone are consistent across every instance on the page — good. The gap is that **nothing here is machine-readable** (no schema) and there's no cross-check against the actual GBP listing, which this audit can't access.

One secondary flag: the Facebook link (`facebook.com/profile.php?id=...`) is a personal-profile-style URL, not a Facebook **Page** vanity URL (e.g. `facebook.com/flamingoservicesve`). If this is genuinely a Business Page, get it a proper username; if it's a personal profile being used as the business presence, that's a citation-quality and trust issue worth fixing directly in Meta Business Suite.

---

## 7. Local Schema Status: Missing (Critical)

Zero `application/ld+json` blocks found anywhere on the page. Ready-to-use fix — add this to `src/layouts/Layout.astro` (adjust `areaServed` and socials as needed, and drop in real `telephone`/`sameAs` once confirmed):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Flamingo Services",
  "image": "https://tallerherreriavalencia.com/assets/images/image28.png",
  "telephone": "+584244715866",
  "priceRange": "$$",
  "areaServed": [
    { "@type": "City", "name": "Valencia" },
    { "@type": "AdministrativeArea", "name": "Carabobo" },
    { "@type": "City", "name": "Maracay" },
    { "@type": "City", "name": "Caracas" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.instagram.com/flamingoservices_/",
    "https://www.facebook.com/profile.php?id=61554200556790"
  ],
  "url": "https://tallerherreriavalencia.com/"
}
</script>
```

Notes:
- Deliberately **not** adding `address` (no street address exists — correct for a SAB; adding a fake one would hurt trust and could violate GBP guidelines if it doesn't match)
- Deliberately **not** adding `FAQPage` schema for the FAQ section — Google retired FAQ rich results for all sites in May 2026, so it's now presentational value only, not an indexing lever. `Faq.astro`'s existing `<details>` markup is enough
- Once you're deployed at the real domain, add `AggregateRating` when real review data exists, and consider per-service `Service` sub-entities (techos, portones, pérgolas, puertas) once those become dedicated pages (§8)

---

## 8. Location / Service Page Quality

This is a **single-page site**: Catálogo, Trabajos, Por qué, Taller, FAQ are all `<section>` anchors on `/`, not separate crawlable URLs. This is the single biggest structural gap for local SEO:

> Dedicated service pages are Whitespark's **#1 local organic ranking factor AND #2 AI-visibility factor** for 2026.

Right now, "techo estacionamiento en Valencia," "portones en Valencia," "pérgolas en Valencia," and "puertas de seguridad en Valencia" are all competing for relevance inside one page instead of each having a page that can rank on its own long-tail query.

**Recommendation:** convert each `productos` entry (already modeled cleanly in `src/data/site.ts`) into its own route (`/techos-estacionamiento/`, `/portones/`, `/pergolas/`, `/puertas-de-seguridad/`), each with:
- Its own title tag and H1 combining service + city ("Techos de estacionamiento en Valencia, Carabobo")
- 300–500 words of unique copy (not swappable between pages — see the "swap test" in the skill reference)
- The existing pricing table, photos, and WhatsApp CTA, reused as components
- A `Service` schema block nested under the `LocalBusiness`/`Organization`

This is a real scope increase, not a quick fix — flagging it as the top **medium-effort, high-impact** item rather than something to do reflexively.

---

## 9. Citation Presence Check

| Directory / Platform | Status |
|---|---|
| Google Business Profile | Not verifiable from the page (no embed/link) |
| Facebook Business Page | Present, but URL format suggests personal profile — verify |
| Instagram | Present (`@flamingoservices_`) |
| Yelp | Not detected |
| BBB | Not detected (BBB/Chamber presence is less relevant for Venezuela specifically, but any local equivalent trust body would help) |
| Apple Maps / Apple Business | Not verifiable from the page |
| Bing Places | Not verifiable from the page (matters because it powers ChatGPT, Copilot, Alexa) |

Given ChatGPT sources local recommendations from Yelp/TripAdvisor/BBB/Reddit/Bing — not GBP directly — and 45% of users now use AI for local recommendations (up from 6%), claiming Bing Places specifically is a disproportionately high-leverage quick win here.

---

## 10. Top 10 Prioritized Actions

**Critical**
1. **Fix the domain mismatch** — decide the real production domain before doing more SEO work. If `tallerherreriavalencia.com` will eventually be replaced by this Astro site, coordinate the cutover; if not, update `astro.config.mjs`'s `site` to the real domain (or a `noindex` policy on the Vercel preview) so `robots.txt`/sitemap stop pointing at someone else's live content.
2. **Add LocalBusiness JSON-LD** (§7) — zero structured data currently exists.
3. **Add a meta description** — none exists at all right now (checked directly in the served HTML), which hurts CTR from any SERP snippet.

**High**
4. Claim/verify Google Business Profile and embed a Maps/reviews reference on the page once it exists.
5. Claim Bing Places (ChatGPT/Copilot/Alexa source from it, not GBP).
6. Turn the four `productos` into dedicated service pages (§8) — the single highest-leverage on-page change available.
7. Add Open Graph tags (`og:title`, `og:description`, `og:image`) — none exist, so any WhatsApp/social share of this site renders with no preview card, which directly hurts click-through on the exact channel (WhatsApp) this business relies on for conversion.

**Medium**
8. Verify/fix the Facebook link to a proper Business Page URL.
9. Add a review-count/rating line near the testimonials once real GBP reviews exist, plus `AggregateRating` schema.
10. Add an explicit `<link rel="icon">` in `Layout.astro` (favicon currently only resolves by browser convention at `/favicon.ico`, not declared).

---

## Limitations Disclaimer

This analysis is based on static HTML inspection (fetched HTML, `robots.txt`, sitemap, response headers) and could **not** assess:
- Actual Google Business Profile status, categories, posts, or Q&A (no GBP access)
- Real local-pack ranking position or geo-grid visibility
- Domain Authority / comprehensive backlink profile
- Core Web Vitals / real performance data (no Lighthouse run) — recommend `/seo technical` or `/seo google` for that
- GBP Insights (calls, direction requests, photo views)

For deeper coverage, follow up with `/seo schema` (schema generation/validation), `/seo technical` (crawlability + CWV), and once a GBP exists, re-run `/seo local` for a fuller picture.

---
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
