// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (persisted in localStorage)
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    nav.classList.remove("open");
  });
});

// Header shadow on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 10 ? "0 2px 12px rgba(0,0,0,0.06)" : "none";
});

// Active nav link: bold the section currently in view (and instantly on click)
const navLinks = [...nav.querySelectorAll("a[href^='#']")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveLink(id) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveLink(link.getAttribute("href").slice(1));
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (visible.length > 0) {
      setActiveLink(visible[0].target.id);
    }
  },
  { rootMargin: `-${header.offsetHeight + 1}px 0px -60% 0px`, threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));
