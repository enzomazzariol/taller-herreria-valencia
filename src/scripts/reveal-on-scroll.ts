const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
revealEls.forEach(el => {
  const delay = el.getAttribute("data-delay");
  if (delay) el.style.transitionDelay = delay + "ms";
});

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
  revealEls.forEach(el => io.observe(el));
  setTimeout(() => revealEls.forEach(el => el.classList.add("is-visible")), 3000);
} else {
  revealEls.forEach(el => el.classList.add("is-visible"));
}
