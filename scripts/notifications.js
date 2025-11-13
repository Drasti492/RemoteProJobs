// scripts/notification.js
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const bell = document.getElementById("notificationBell");
  const dropdown = document.getElementById("notificationDropdown");
  const dropdownList = document.getElementById("dropdown-list");
  const count = document.getElementById("notificationCount");
  const toast = document.getElementById("toast");

  let notifications = [];

  // ✅ Toast function
  function showToast(message, type = "info") {
    toast.textContent = message;
    toast.style.background =
      type === "success" ? "#28a745" : type === "error" ? "#e63946" : "#323232";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  // ✅ Toggle dropdown
  bell?.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !bell.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // ✅ Fetch notifications
  async function fetchNotifications() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch notifications");
      const data = await res.json();
      notifications = data;
      renderDropdown(data);
      updateCount(data);
    } catch (err) {
      console.error("Notification fetch error:", err);
    }
  }

  // ✅ Render dropdown list
  function renderDropdown(list) {
    dropdownList.innerHTML = "";
    if (!list || list.length === 0) {
      dropdownList.innerHTML = `<p class="no-notifications">No notifications yet.</p>`;
      return;
    }

    list.slice(0, 5).forEach((n) => {
      const timeAgo = formatTimeAgo(n.createdAt);
      const item = document.createElement("div");
      item.className = `notification-item ${n.read ? "" : "unread"}`;
      item.innerHTML = `
        <div class="notification-content">
          <div class="notification-title">${n.title || "Notification"}</div>
          <div class="notification-message">${n.message}</div>
          <div class="notification-meta">${timeAgo}</div>
        </div>`;
      dropdownList.appendChild(item);
    });
  }

  // ✅ Count unread
  function updateCount(list) {
    const unread = list.filter((n) => !n.read).length;
    count.textContent = unread;
  }

  // ✅ Mark all read
  async function markAllRead() {
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotifications();
      showToast("All notifications marked as read", "success");
    } catch (err) {
      console.error(err);
    }
  }

  // ✅ Delete all
  async function deleteAll() {
    try {
      await fetch("https://remj82.onrender.com/api/notifications", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotifications();
      showToast("All notifications cleared", "success");
    } catch (err) {
      console.error(err);
    }
  }

  // ✅ Format "time ago"
  function formatTimeAgo(date) {
    const seconds = Math.floor((Date.now() - new Date(date)) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  // ✅ Expose globally (so work.js can call)
  window.notify = {
    show: showToast,
    refresh: fetchNotifications,
  };

  document.getElementById("dropdownMarkAllRead")?.addEventListener("click", markAllRead);
  document.getElementById("dropdownDeleteAll")?.addEventListener("click", deleteAll);

  // Auto refresh every 20s
  fetchNotifications();
  setInterval(fetchNotifications, 20000);
});
