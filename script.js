// 🌟 Typing animation (with reduced-motion support)
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  new Typed("#typing", {
    strings: [
      "👋Hi! I'm Neha (✿◠‿◠)",
      "Computational Materials Researcher"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
}

// 🌌 REAL LIVE WALLPAPER (guarded + responsive)
if (!prefersReducedMotion && typeof particlesJS === "function") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#8b5cf6" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8b5cf6",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  });
}

// Smooth anchor scroll (minimal, respects reduced motion)
document.addEventListener("click", (e) => {
  const a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
  if (!a) return;
  const id = a.getAttribute("href");
  if (!id || id.length < 2) return;

  const target = document.querySelector(id);
  if (!target) return;

  if (prefersReducedMotion) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});
