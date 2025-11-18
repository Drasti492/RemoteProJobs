// scripts/authGuard.js

document.addEventListener("DOMContentLoaded", () => {
  const publicPages = [
    "index.html",
    "login.html",
    "signup.html",
    "verify.html",
    "forgot.html",
    "reset.html"
  ];

  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop();

  // Skip auth check for public pages
  if (publicPages.includes(currentPage)) return;

  const token = localStorage.getItem("token");

  if (!token) {
    console.warn("No token found. Redirecting to login...");
    redirectToLogin();
    return;
  }

  // Verify token and auto-logout if invalid
  verifyToken(token);

  // =========================
  // Inactivity-based logout
  // =========================
  const maxInactive = 10 * 60 * 1000; // 10 minutes
  const updateActivity = () => localStorage.setItem("lastActive", Date.now());

  ["click", "mousemove", "keydown", "scroll", "touchstart"].forEach(evt => {
    document.addEventListener(evt, updateActivity);
  });

  setInterval(() => {
    const lastActive = parseInt(localStorage.getItem("lastActive") || "0");
    if (Date.now() - lastActive > maxInactive) {
      console.warn("User inactive for 10 minutes. Logging out...");
      logout();
    }
  }, 30000);
});

// =========================
// Helper Functions
// =========================
async function verifyToken(token) {
  try {
    const res = await fetch("https://remj82.onrender.com/api/auth/user", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) {
      console.warn("Invalid or expired token. Logging out...");
      logout();
      return;
    }

    const data = await res.json();

    if (data.success && data.user) {
      localStorage.setItem("userProfile", JSON.stringify(data.user));
      console.log(`Authenticated as: ${data.user.name}`);
      // Update lastActive on verified token
      localStorage.setItem("lastActive", Date.now());
    } else {
      logout();
    }
  } catch (err) {
    console.error("Token verification failed:", err.message);
    logout();
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userProfile");
  localStorage.removeItem("lastActive");
  redirectToLogin();
}

function redirectToLogin() {
  window.location.href = "../pages/login.html";
}
