// scripts/authGuard.js — FINAL WORKING VERSION

document.addEventListener("DOMContentLoaded", () => {
  const publicPages = [
    "index.html",
    "login.html",
    "signup.html",
    "verify.html",
    "forgot.html",
    "reset.html"
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Allow public pages without login
  if (publicPages.includes(currentPage)) return;

  const token = localStorage.getItem("token");

  if (!token) {
    redirectToLogin();
    return;
  }

  // Verify token
  verifyToken(token);

  // Inactivity logout after 10 minutes
  const INACTIVE_TIMEOUT = 10 * 60 * 1000; // 10 minutes

  const updateActivity = () => localStorage.setItem("lastActive", Date.now());

  ["mousedown", "mousemove", "keypress", "scroll", "touchstart"].forEach(event => {
    document.addEventListener(event, updateActivity, { passive: true });
  });

  setInterval(() => {
    const lastActive = localStorage.getItem("lastActive") || 0;
    if (Date.now() - Number(lastActive) > INACTIVE_TIMEOUT) {
      logout();
    }
  }, 30000);
});

async function verifyToken(token) {
  try {
    const res = await fetch("https://remj82.onrender.com/api/auth/user", {
      headers: { "Authorization": `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Invalid token");

    const data = await res.json();
    if (data.success && data.user) {
      localStorage.setItem("userProfile", JSON.stringify(data.user));
      localStorage.setItem("lastActive", Date.now());
    } else {
      logout();
    }
  } catch (err) {
    logout();
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userProfile");
  localStorage.removeItem("lastActive");
  redirectToLogin();
}

function redirectToLogin() {
  // THIS IS THE ONLY LINE THAT WORKS
  window.location.href = "login.html";
}