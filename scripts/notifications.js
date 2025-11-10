document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const notificationBell = document.getElementById("notificationBell");
  const notificationDropdown = document.getElementById("notificationDropdown");
  const dropdownList = document.getElementById("dropdown-list");
  const notificationList = document.getElementById("notifications-list");
  const notificationCount = document.getElementById("notificationCount");

  // ✅ Toggle dropdown visibility
  notificationBell?.addEventListener("click", () => {
    notificationDropdown.style.display =
      notificationDropdown.style.display === "block" ? "none" : "block";
  });

  // ✅ Fetch all notifications
  async function fetchNotifications() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch notifications");
      const data = await res.json();
      renderNotifications(data, notificationList);
      renderNotifications(data.slice(0, 5), dropdownList); // show top 5
      updateNotificationCount(data);
    } catch (err) {
      console.error("Notification fetch error:", err);
    }
  }

  // ✅ Render notification list
  function renderNotifications(notifications, container) {
    container.innerHTML = "";
    if (!notifications || notifications.length === 0) {
      container.innerHTML = `<p class="no-notifications">No notifications yet.</p>`;
      return;
    }

    notifications.forEach((n) => {
      const div = document.createElement("div");
      div.className = `notification-item ${n.read ? "" : "unread"}`;

      // ✅ Safe date formatting
      const dateObj = new Date(n.createdAt);
      const formattedDate = !isNaN(dateObj)
        ? dateObj.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          })
        : "Just now";

      // ✅ Render item
      div.innerHTML = `
        <div class="notification-content">
          <div class="notification-title">${n.title || "Notification"}</div>
          <div class="notification-message">${n.message}</div>
          <div class="notification-meta">${formattedDate}</div>
        </div>
        <div class="notification-actions">
          <button class="mark-read-btn" data-id="${n._id}">Mark Read</button>
          <button class="delete-btn" data-id="${n._id}">Delete</button>
        </div>
      `;
      container.appendChild(div);
    });

    attachNotificationActions(container);
  }

  // ✅ Attach handlers
  function attachNotificationActions(container) {
    container.querySelectorAll(".mark-read-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        await markRead(btn.dataset.id);
      });
    });
    container.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        await deleteNotification(btn.dataset.id);
      });
    });
  }

  // ✅ Update bell count
  function updateNotificationCount(notifications) {
    const unreadCount = notifications.filter((n) => !n.read).length;
    if (notificationCount) notificationCount.textContent = unreadCount;
  }

  // ✅ Mark read
  async function markRead(id) {
    try {
      await fetch(`https://remj82.onrender.com/api/notifications/${id}/read`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  }

  // ✅ Delete single notification
  async function deleteNotification(id) {
    try {
      await fetch(`https://remj82.onrender.com/api/notifications/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  }

  // ✅ Mark all read
  async function markAllRead() {
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotifications();
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
    } catch (err) {
      console.error(err);
    }
  }

  // ✅ Attach to all possible buttons
  document.getElementById("markAllRead")?.addEventListener("click", markAllRead);
  document.getElementById("deleteAll")?.addEventListener("click", deleteAll);
  document
    .getElementById("dropdownMarkAllRead")
    ?.addEventListener("click", markAllRead);
  document
    .getElementById("dropdownDeleteAll")
    ?.addEventListener("click", deleteAll);

  // ✅ Auto refresh every 20 seconds
  setInterval(fetchNotifications, 20000);
  fetchNotifications();
});
