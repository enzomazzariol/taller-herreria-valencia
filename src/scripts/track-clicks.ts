declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CTA_SELECTOR = [
  'a[href^="https://api.whatsapp.com"]',
  'a[href^="tel:"]',
  "a.btn-light",
  "a.btn-ghost",
  "a.btn-outline",
  "a.btn-solid",
  "a.wa-pill",
  "a.wa-chip",
  "a.wa-float",
  "a.mobile-menu-wa",
  "a.producto-cta",
].join(", ");

document.addEventListener("click", e => {
  const link = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(CTA_SELECTOR);
  if (!link || typeof window.gtag !== "function") return;

  const href = link.href || "";
  const type = href.startsWith("https://api.whatsapp.com") ? "whatsapp" : href.startsWith("tel:") ? "call" : "link";
  const section = link.closest<HTMLElement>("[id]")?.id ?? (link.closest("footer") ? "footer" : "unknown");
  const label = (link.textContent || link.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ");

  window.gtag("event", "cta_click", {
    button_type: type,
    button_label: label,
    button_location: section,
  });
});

export {};
