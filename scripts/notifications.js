document.addEventListener("DOMContentLoaded", () => {
    const notificationList = document.getElementById("notifications-list");
    const notificationCount = document.getElementById("notificationCount");
    const token = localStorage.getItem("token");

    if (!token) return;

    let notifications = [];

    // ==========================
    // Fetch Notifications
    // ==========================
    async function fetchNotifications() {
        try {
            const res = await fetch("https://remj82.onrender.com/api/notifications", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (!res.ok) throw new Error("Failed to fetch notifications.");
            const data = await res.json();
            notifications = data.notifications || [];
            renderNotifications();
            updateNotificationBell();
        } catch (err) {
            console.error("Error fetching notifications:", err);
        }
    }

    // ==========================
    // Render Notifications List
    // ==========================
    function renderNotifications() {
        if (!notificationList) return;

        notificationList.innerHTML = "";

        if (notifications.length === 0) {
            notificationList.innerHTML = `<p class="no-notifications">No notifications yet.</p>`;
            return;
        }

        notifications.forEach(n => {
            const div = document.createElement("div");
            div.className = `notification-item ${n.read ? "" : "unread"}`;
            div.innerHTML = `
                <div class="notification-content">
                    <div class="notification-title">${n.title}</div>
                    <div class="notification-message">${n.message}</div>
                    <div class="notification-meta">${new Date(n.createdAt).toLocaleString()}</div>
                </div>
                <div class="notification-actions">
                    <button onclick="markRead('${n._id}')">Mark Read</button>
                    <button onclick="deleteNotification('${n._id}')">Delete</button>
                </div>
            `;
            notificationList.appendChild(div);
        });
    }

    // ==========================
    // Update Notification Bell
    // ==========================
    function updateNotificationBell() {
        const unreadCount = notifications.filter(n => !n.read).length;
        if (notificationCount) {
            notificationCount.textContent = unreadCount;
            notificationCount.style.display = unreadCount > 0 ? "inline-block" : "none";
        }
    }

    // ==========================
    // Mark Read
    // ==========================
    window.markRead = async (id) => {
        try {
            await fetch(`https://remj82.onrender.com/api/notifications/${id}/read`, {
                method: "PATCH",
                headers: { "Authorization": `Bearer ${token}` }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    };

    // ==========================
    // Delete Notification
    // ==========================
    window.deleteNotification = async (id) => {
        try {
            await fetch(`https://remj82.onrender.com/api/notifications/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    };

    // ==========================
    // Mark All Read
    // ==========================
    document.getElementById("markAllRead")?.addEventListener("click", async () => {
        try {
            await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
                method: "PATCH",
                headers: { "Authorization": `Bearer ${token}` }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    });

    // ==========================
    // Delete All
    // ==========================
    document.getElementById("deleteAll")?.addEventListener("click", async () => {
        try {
            await fetch("https://remj82.onrender.com/api/notifications", {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    });

    // ==========================
    // Live updates every 30 seconds
    // ==========================
    fetchNotifications();
    setInterval(fetchNotifications, 10000); // auto-refresh every 30s
});
