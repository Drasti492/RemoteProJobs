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



  // Footer legal dropdowns – pure lightweight JS
  document.querySelectorAll('.legal-trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item = this.closest('.legal-item');
      const isOpen = item.classList.toggle('open');
      
      // Update aria for accessibility
      this.setAttribute('aria-expanded', isOpen);
      
      // Close others when one opens (optional – feels cleaner)
      document.querySelectorAll('.legal-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.legal-trigger').setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.footer-legal')) {
      document.querySelectorAll('.legal-item.open').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.legal-trigger').setAttribute('aria-expanded', 'false');
      });
    }
  });



  // scripts/notificationBell.js
// This file runs on EVERY page: profile.html, pricing.html, withraw.html, work.html, etc.

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const bell = document.getElementById("notificationBell");
  const countSpan = document.getElementById("notificationCount");

  if (!bell || !count) return;

  async function updateNotificationCount() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error();

      const notifications = await res.json();
      const unreadCount = notifications.filter(n => !n.read).length;

      count.textContent = unreadCount > 9 ? "9+" : unreadCount;
      count.style.display = unreadCount > 0 ? "flex" : "none";

    } catch (err) {
      console.warn("Notification count failed to load");
      count.style.display = "none";
    }
  }

  // Click bell → mark all as read + go to notifications
  bell.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` }
      });
      count.style.display = "none";
    } catch (err) {
      console.error("Failed to mark notifications as read");
    } finally {
      window.location.href = "./notifications.html";
    }
  });

  // Load now + every 15 seconds
  updateNotificationCount();
  setInterval(updateNotificationCount, 15000);
});