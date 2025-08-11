// Login & Register button actions
document.getElementById("loginBtn").addEventListener("click", () => {});

document.getElementById("registerBtn").addEventListener("click", () => {});

// Search bar functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});

// Fade-in hero text on load
window.addEventListener("load", () => {
  const overlay = document.querySelector(".hero .overlay");
  overlay.style.opacity = 0;
  overlay.style.transition = "opacity 1.5s";
  setTimeout(() => {
    overlay.style.opacity = 1;
  }, 200);
});

// Highlight active nav link while scrolling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, .skill-card");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Back to Top Button functionality
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
