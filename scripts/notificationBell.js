// scripts/notificationBell.js
// Works on ALL pages: profile.html, pricing.html, withraw.html, work.html, etc.

(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const bell = document.getElementById("notificationBell");
  const countEl = document.getElementById("notificationCount");

  if (!bell || !countEl) return;

  async function updateCount() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error();

      const notifications = await res.json();
      const unread = notifications.filter(n => !n.read).length;

      countEl.textContent = unread > 9 ? "9+" : unread;
      countEl.style.display = unread > 0 ? "flex" : "none";

    } catch (err) {
      countEl.style.display = "none"; // hide on error
    }
  }

  // Click bell → mark all read + go to notifications page
  bell.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` }
      });
      countEl.style.display = "none";
    } catch (err) {
      console.warn("Failed to mark as read");
    } finally {
      window.location.href = "./notifications.html";
    }
  });

  // Load now + every 12 seconds
  updateCount();
  setInterval(updateCount, 12000);
})();