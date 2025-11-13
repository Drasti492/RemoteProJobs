document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const notificationBell = document.getElementById("notificationBell");
  const notificationDropdown = document.getElementById("notificationDropdown");
  const dropdownList = document.getElementById("dropdown-list");
  const notificationCount = document.getElementById("notificationCount");

  // ✅ Toggle dropdown
  notificationBell?.addEventListener("click", (e) => {
    e.stopPropagation();
    notificationDropdown.style.display =
      notificationDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!notificationDropdown.contains(e.target) && e.target !== notificationBell) {
      notificationDropdown.style.display = "none";
    }
  });

  // ✅ Fetch notifications
  async function fetchNotifications() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      renderDropdownNotifications(data);
      updateNotificationCount(data);
    } catch (err) {
      console.error("Notification fetch error:", err);
    }
  }

  function renderDropdownNotifications(notifications) {
    dropdownList.innerHTML = "";
    if (!notifications.length) {
      dropdownList.innerHTML = `<p class="no-notifications">No notifications yet.</p>`;
      return;
    }

    notifications.slice(0, 5).forEach((n) => {
      const div = document.createElement("div");
      div.className = `notification-item ${n.read ? "" : "unread"}`;
      const date = new Date(n.createdAt).toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "short",
      });
      div.innerHTML = `
        <div class="notification-content">
          <div class="notification-title">${n.title || "New Update"}</div>
          <div class="notification-message">${n.message}</div>
          <div class="notification-meta">${date}</div>
        </div>`;
      dropdownList.appendChild(div);
    });
  }

  function updateNotificationCount(notifications) {
    const unread = notifications.filter((n) => !n.read).length;
    notificationCount.textContent = unread > 9 ? "9+" : unread;
    notificationCount.style.display = unread > 0 ? "block" : "none";
  }

  // ✅ Refresh every 20 seconds
  fetchNotifications();
  setInterval(fetchNotifications, 20000);
});
