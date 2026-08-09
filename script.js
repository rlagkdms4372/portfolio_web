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
