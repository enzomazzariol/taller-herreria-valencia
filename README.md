# Handoff: Flamingo Services — Homepage Redesign

## Overview
Full homepage redesign for Flamingo Services, an ironwork/metalwork workshop (herrería) in Valencia, Carabobo. Covers Hero, Servicios, Proceso, Precios, an interactive quote builder (Cotización), Galería, a trust/stats section ("Por qué Flamingo"), Contacto, and Footer.

## About the Design Files
The bundled file (`Yunque Homepage.dc.html`) is a **design reference built in HTML** — a high-fidelity prototype of look, content, and interaction, not production code to paste in as-is. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, plain templating, etc.) using its established patterns, component library, and build tooling — or, if no frontend framework is set up yet, choose the most appropriate one for the project and implement the design there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and the interactive quote-builder behavior are final-intent — recreate pixel-close using the codebase's own component/styling system rather than copying the inline styles verbatim.

## Design System

### Colors (CSS custom properties recommended)
Currently tweakable via a "palette" control with 3 presets; the shipped default is:
- `--bg`: `#141414` (base/dark)
- `--text`: `#f2ede1` (primary text, cream)
- `--accent`: `#d97b3f` (copper/orange — primary CTA color)
- `--accent2`: `#8a8f87` (slate — secondary/kicker color)
- `--surface`: `#1d1d1d` (card/panel background, slightly lifted off bg)
- `--surface-border`: derived — text color at ~14% opacity (`rgba(242,237,225,.14)`)
- `--muted`: text color at ~68% opacity

Two alternate presets exist in the prototype (ember/charcoal warm palette, and a light cream/oxide palette) — implement as a theme if the brand wants to keep that flexibility, otherwise ship the default only.

### Typography
- Display/headline font: **Righteous** (Google Fonts) — used for all large headlines, numerals, and prices. Alternate tested pairing: **Geomini** used as both display and body (a toggle existed in the prototype's tweak panel; the shipped default is Righteous for display).
- Body/UI font: **Geomini** (Google Fonts) — nav, paragraphs, labels, buttons.
- Headline sizes use fluid `clamp()` scaling (e.g. hero headline `clamp(2.6rem, 6.4vw, 5rem)`), not fixed px — recreate with equivalent responsive type scale.
- Overline/kicker labels: uppercase, `letter-spacing: 0.16–0.18em`, ~12px, in `--accent2`.

### Buttons
- Primary: filled `--accent` background, `--bg` text, no border radius (sharp rectangular), ~14–16px vertical padding.
- Secondary: 1px solid border in text color, transparent background, same padding, sharp corners.
- No pill/rounded buttons anywhere — square corners are a deliberate brand choice (industrial, not soft-SaaS).

### Cards / Panels
- Background `--surface`, 1px border `--surface-border`, no border-radius, generous padding (26–40px).
- Featured/highlighted variant (e.g. "Más popular" pricing tier): border color switches to `--accent`, plus a small filled accent ribbon/tag in the top-right corner.

## Screens / Sections

### 1. Hero
- Full-bleed real photograph background (placeholder via picsum.photos — replace with real workshop photography), duotone-toned via a `mix-blend-mode:multiply` accent wash + a top-to-bottom dark gradient overlay + a radial scrim anchored behind the text block for guaranteed legibility regardless of the photo's content.
- Fixed-position nav bar (wordmark left, links center-right, "Solicitar presupuesto" CTA button far right) sits over the photo with its own dedicated darkening scrim band at the top (independent of the frame-wide gradient) — do not rely on the photo being dark; always render a dedicated nav scrim.
- Kicker line, 3-line headline ("LA MEJOR HERRERÍA DE VALENCIA, CARABOBO", last line in accent color), subtext paragraph, primary CTA, and a row of 3 checkmark trust badges (24h quote, 1-year warranty, certified materials).
- Section is `min-height: 100vh` with content in normal flex flow (not absolutely positioned) so it can never overflow into the nav on short viewports — implement equivalently (flex column, `justify-content` at the end, content-driven height with a `min-height` floor, not a fixed `height`).
- A floating WhatsApp CTA button ("Solicitar presupuesto") is fixed bottom-right on the whole page, `wa.me` deep link.

### 2. Servicios (01)
- One large featured service card (Techos para Estacionamiento) — full-width photo banner with text overlay (kicker number, title, description, price, CTA).
- Below it, a 4-column grid of service cards (Pérgolas, Portones, Puertas de Seguridad — Techos already covered above) each with: photo thumbnail (150px), reference number, title, description, a checklist of 4 bullet features, price ("Desde $X"), and a "Pedir presupuesto" button.

### 3. Proceso (02)
- 4-step horizontal process row: Consulta → Diseño → Forja y Fabricación → Instalación. The "Forja y Fabricación" step (03) is visually emphasized — larger card, background surface fill, bigger photo, accent-colored step number — deliberately breaking the grid's symmetry (per the "process/journal" reference pattern: the craft step is the hero of the section).
- Closing CTA button + "Respuesta en menos de 24 horas" note.

### 4. Precios (03)
- 4 pricing cards, one per service (Techos $1,250 / Pérgolas $1,199 / Portones $1,350 — marked "Más popular" — / Puertas $699), each with an intro line, price, a bullet feature list, and a "Solicitar presupuesto" button (filled on the featured card, outlined on the rest).
- Closing note linking to Contacto for custom/large projects.

### 5. Cotización — interactive quote builder (04)
- Not a generic slider calculator: a chip-based "ficha de trabajo" (work-order ticket) builder. User clicks chips for Tipo (Techo/Pérgola/Portón/Puerta), Material (Aluminio/Hierro forjado/Acero inoxidable), Acabado (Pintura al horno/Galvanizado/Natural pulido).
- Right panel renders as a ticket/spec-sheet card, live-updating the selected values and a computed **estimate range** (`$low – $high`, base price × material multiplier × finish multiplier, ±35% spread), explicitly labeled "Estimado orientativo — no vinculante" (non-binding).
- **State needed**: `quoteType`, `quoteMaterial`, `quoteFinish` (strings); a pure function mapping the combination to a `[low, high]` price estimate; click handlers per chip that update state and re-render the ticket + estimate.

### 6. Galería (05)
- Filter chip row (Todos / Techos / Pérgolas / Portones / Puertas / Proceso) — "Todos" active by default. Implement as functioning filters (client-side) in the real build; static in the prototype.
- Asymmetric mixed-size grid (CSS grid with `grid-column`/`grid-row` spans) — NOT a symmetric bento grid. Mixes finished-project photos and in-progress/process photos, each with a bottom-left caption chip.
- Closing "Cotiza tu proyecto →" CTA.

### 7. Por qué Flamingo (06)
- Left: a short brand-commitment statement. Right: 3 stat columns (12+ años, 500+ proyectos, 1 año de garantía) separated by vertical rules, big numerals in the display font in accent color.
- Closing CTA button ("Empezar ahora — es gratis").

### 8. Contacto (07)
- Left: simple contact form (Nombre, Teléfono, mensaje textarea, submit button) — style-only in the prototype, needs real form wiring (validation, submit handler, backend/email integration).
- Right: a technical-drawing-style "map" card — SVG grid pattern background, centered pin icon + "Valencia, Carabobo" + coordinates, corner labels. This is a **stylized placeholder**, not a real map — recreate with an actual embedded map (Google Maps/Mapbox) if the real business wants live functionality, styled to match (desaturated/dark map style, or keep the illustrated placeholder as a deliberate brand choice — confirm with stakeholder).

### 9. Footer
- 4-column layout: brand block + description, Servicios links, Empresa links (Proceso/Precios/Galería/Por qué Flamingo/Contacto), Contacto details (address/phone/hours).
- Bottom bar: copyright line + decorative coordinate string (`39°28'N · 0°22'W`), separated by a hairline rule.
- A full-width CTA banner ("¿Listo para forjar tu proyecto?") sits between Contacto and the Footer, bordered in accent color.

## Interactions & Behavior Summary
- Nav links are in-page anchor scrolls (`#servicios`, `#proceso`, etc.) — implement as smooth-scroll or router-based scroll-to-section.
- Cotización chips: click-to-select (single-select per group), instant re-render of the ticket panel and price estimate — no submit step needed to preview, but "Confirmar con un asesor" should hand off to a real lead-capture flow (form, WhatsApp, or CRM webhook).
- Gallery filter chips: click-to-filter (only "Todos" is wired as active by default in the prototype; implement real filtering logic).
- WhatsApp button: `href="https://wa.me/584244715866"` — confirm/replace with the real business WhatsApp Business number and consider prefilling a message via `?text=`.
- Reduced motion: the hero's subtle fade-in respects `prefers-reduced-motion` — preserve this.

## Assets
- All photography in the prototype is **placeholder** (picsum.photos random images) — every image must be replaced with real workshop/product photography before shipping. Seeds used (for reference only, not to be kept): `flamingo-techo`, `svc-pergola`, `svc-porton`, `svc-puerta`, `yunque-consulta`, `yunque-diseno`, `yunque-forja-proceso`, `yunque-instalacion`, `g1`–`g8` (gallery).
- Icons are inline hand-drawn SVG (WhatsApp glyph, map pin, hamburger lines) — fine to keep as SVG or swap for an icon library consistent with the codebase.
- Fonts: Righteous + Geomini, both loaded from Google Fonts — self-host or use `next/font`/equivalent per the target stack's conventions.

## Files
- `Yunque Homepage.dc.html` — the full design reference (single file, all sections, inline styles + a small amount of interactive JS logic for the quote builder and color/typography tweaks). Open directly in a browser to view.

## Notes / Open Items
- Prices ($1,250 / $1,199 / $1,350 / $699, and the quote-builder base prices) are placeholder figures matching a reference site's structure — confirm real pricing with the business before shipping.
- Phone number used throughout: `0424 471 5866` / WhatsApp `+58 424 471 5866` — confirm this is correct and current.
- The brand name is **Flamingo Services** (renamed mid-project from an earlier "Yunque" placeholder) — the file name still says `Yunque Homepage.dc.html`; rename the file in the target repo to something like `homepage.html`/`Home.tsx` per convention.
