document.addEventListener("DOMContentLoaded", () => {
    const notificationBell = document.getElementById("notificationBell");
    const notificationDropdown = document.getElementById("notificationDropdown");
    const notificationList = document.getElementById("notifications-list");
    const notificationCount = document.getElementById("notificationCount");

    const token = localStorage.getItem("token");
    if (!token) return;

    let notificationsData = [];

    // Toggle dropdown visibility
    notificationBell.addEventListener("click", () => {
        notificationDropdown.style.display = notificationDropdown.style.display === "block" ? "none" : "block";
    });

    // Fetch notifications
    async function fetchNotifications() {
        try {
            const res = await fetch("https://remj82.onrender.com/api/notifications", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (!res.ok) throw new Error("Failed to fetch notifications.");
            notificationsData = await res.json();
            renderNotifications(notificationsData);
        } catch (err) {
            console.error(err);
        }
    }

    function renderNotifications(notifications) {
        notificationList.innerHTML = "";
        if (notifications.length === 0) {
            notificationList.innerHTML = `<p class="no-notifications">No notifications yet.</p>`;
        } else {
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
                        <button class="mark-read-btn" data-id="${n._id}">Mark Read</button>
                        <button class="delete-btn" data-id="${n._id}">Delete</button>
                    </div>
                `;
                notificationList.appendChild(div);
            });
        }
        updateNotificationCount(notifications);
        attachNotificationActions();
    }

    function updateNotificationCount(notifications) {
        const unreadCount = notifications.filter(n => !n.read).length;
        if (notificationCount) notificationCount.textContent = unreadCount;
    }

    function attachNotificationActions() {
        document.querySelectorAll(".mark-read-btn").forEach(btn => {
            btn.addEventListener("click", async () => {
                await markRead(btn.dataset.id);
            });
        });
        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", async () => {
                await deleteNotification(btn.dataset.id);
            });
        });
    }

    async function markRead(id) {
        try {
            await fetch(`https://remj82.onrender.com/api/notifications/${id}/read`, {
                method: "PATCH",
                headers: { "Authorization": `Bearer ${token}` }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteNotification(id) {
        try {
            await fetch(`https://remj82.onrender.com/api/notifications/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    }

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

    // Polling: refresh notifications every 20 seconds
    setInterval(fetchNotifications, 20000);

    fetchNotifications();
});
