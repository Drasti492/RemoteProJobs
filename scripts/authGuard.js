// scripts/token.js

document.addEventListener("DOMContentLoaded", () => {
  const publicPages = [
    "index.html",
    "login.html",
    "signup.html",
    "verify.html",
    "forgot.html",
    "reset.html"
  ];

  // Get current page name
  const currentPage = window.location.pathname.split("/").pop();

  // Skip check for public pages
  if (publicPages.includes(currentPage)) {
    return;
  }

  // Check token
  const token = localStorage.getItem("token");

  if (!token) {
    // No token — redirect to login
    console.warn("Unauthorized access. Redirecting to login...");
    window.location.href = "../pages/login.html";
    return;
  }

  // Optional: Verify token validity (if your backend has an endpoint for that)
  verifyToken(token);
});

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
      console.warn("Invalid or expired token. Redirecting to login...");
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userProfile");
      window.location.href = "../pages/login.html";
      return;
    }

    const data = await res.json();

    // Optionally save or refresh user data
    if (data.success && data.user) {
      localStorage.setItem("userProfile", JSON.stringify(data.user));
      console.log(`Authenticated as: ${data.user.name}`);
    }
  } catch (err) {
    console.error("Token verification failed:", err.message);
    localStorage.removeItem("token");
    window.location.href = "../pages/login.html";
  }
}
