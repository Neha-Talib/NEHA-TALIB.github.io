// 🌟 Typing animation
new Typed("#typing", {
  strings: [
    "👋Hi! I'm Neha (✿◠‿◠)",
    "Computational Materials Researcher"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});


// 🌌 REAL LIVE WALLPAPER
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