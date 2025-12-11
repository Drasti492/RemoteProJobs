// scripts/nav.js — FINAL & BULLETPROOF
(() => {
  // Run only once
  if (window.navInitialized) return;
  window.navInitialized = true;

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Close when clicking a link
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "../index.html";
    });
  }
})();