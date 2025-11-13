document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const notificationBell = document.getElementById("notificationBell");
  const notificationCount = document.getElementById("notificationCount");

  if (!notificationBell || !notificationCount) return;

  // Fetch notifications count
  async function fetchNotificationCount() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      const unread = (data || []).filter(n => !n.read).length;

      notificationCount.textContent = unread > 9 ? "9+" : unread;
      notificationCount.style.display = unread > 0 ? "flex" : "none";
    } catch (err) {
      console.error("Notification fetch error:", err);
    }
  }

  // Refresh every 20 seconds
  fetchNotificationCount();
  setInterval(fetchNotificationCount, 20000);

  // Click bell → redirect & mark all read
  notificationBell.addEventListener("click", async () => {
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });

      notificationCount.style.display = "none";
      notificationCount.textContent = "0";

      window.location.href = "./notifications.html";
    } catch (err) {
      console.error(err);
      window.location.href = "./notifications.html";
    }
  });
});

// ==========================
// Inline small notifications
// ==========================
window.notify = (function () {
  const containerId = "notification-container";

  function createContainer() {
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      container.style.position = "fixed";
      container.style.top = "20px";
      container.style.right = "20px";
      container.style.zIndex = "9999";
      container.style.display = "flex";
      container.style.flexDirection = "column";
      container.style.gap = "10px";
      document.body.appendChild(container);
    }
    return container;
  }

  function show(message, type = "info") {
    const container = createContainer();
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.style.background =
      type === "success"
        ? "#4CAF50"
        : type === "error"
        ? "#f44336"
        : "#2196F3";
    notification.style.color = "#fff";
    notification.style.padding = "12px 16px";
    notification.style.borderRadius = "6px";
    notification.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    notification.style.fontSize = "14px";
    notification.style.transition = "opacity 0.4s ease";
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => notification.remove(), 400);
    }, 3000);
  }

  return { show };
})();
