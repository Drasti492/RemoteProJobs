document.addEventListener('DOMContentLoaded', () => {
    const notificationsList = document.getElementById('notifications-list');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const paginationNumbers = document.getElementById('paginationNumbers');
    const markAllReadBtn = document.getElementById('markAllRead');
    const deleteAllBtn = document.getElementById('deleteAll');

    const token = localStorage.getItem('token');
    if (!token) {
        alert('Please login to view notifications.');
        window.location.href = './login.html';
        return;
    }

    let notifications = [];
    let currentPage = 1;
    const notificationsPerPage = 5;

    // Fetch notifications from backend
    async function fetchNotifications() {
        try {
            const res = await fetch('https://remj82.onrender.com/api/notifications', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Failed to fetch notifications');
            const data = await res.json();
            notifications = data.notifications || [];
            renderNotifications();
            renderPagination();
        } catch (err) {
            console.error(err);
            notificationsList.innerHTML = `<p class="error-msg">${err.message}</p>`;
        }
    }

    // Render notifications on page
    function renderNotifications() {
        if (notifications.length === 0) {
            notificationsList.innerHTML = `<p>No notifications yet.</p>`;
            return;
        }

        const start = (currentPage - 1) * notificationsPerPage;
        const end = start + notificationsPerPage;
        const pageNotifications = notifications.slice(start, end);

        notificationsList.innerHTML = pageNotifications.map(n => `
            <div class="notification-card ${n.read ? 'read' : 'unread'}" data-id="${n._id}">
                <div class="notification-content">
                    <div class="notification-header">
                        <h4>${n.title}</h4>
                        <span class="notification-date">${new Date(n.date).toLocaleString()}</span>
                    </div>
                    <p>${n.message}</p>
                </div>
                <div class="notification-actions">
                    <button class="mark-read-btn">${n.read ? 'Mark Unread' : 'Mark Read'}</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.mark-read-btn').forEach(btn => btn.addEventListener('click', handleMarkRead));
        document.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', handleDelete));
    }

    // Pagination
    function renderPagination() {
        const totalPages = Math.ceil(notifications.length / notificationsPerPage);
        paginationNumbers.innerHTML = '';
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                renderNotifications();
                renderPagination();
            });
            paginationNumbers.appendChild(btn);
        }
    }

    // Toggle read/unread
    async function handleMarkRead(e) {
        e.stopPropagation();
        const card = e.target.closest('.notification-card');
        const id = card.dataset.id;
        const read = card.classList.contains('unread');

        try {
            const res = await fetch(`https://remj82.onrender.com/api/notifications/${id}/read`, {
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ read })
            });
            if (!res.ok) throw new Error('Failed to update notification');

            const notif = notifications.find(n => n._id === id);
            if (notif) notif.read = read;
            renderNotifications();
        } catch (err) {
            console.error(err);
        }
    }

    // Delete single notification
    async function handleDelete(e) {
        e.stopPropagation();
        const card = e.target.closest('.notification-card');
        const id = card.dataset.id;
        try {
            const res = await fetch(`https://remj82.onrender.com/api/notifications/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Failed to delete notification');
            notifications = notifications.filter(n => n._id !== id);
            renderNotifications();
            renderPagination();
        } catch (err) {
            console.error(err);
        }
    }

    // Mark all as read
    markAllReadBtn.addEventListener('click', async () => {
        try {
            const res = await fetch(`https://remj82.onrender.com/api/notifications/read-all`, {
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Failed to mark all as read');
            notifications.forEach(n => n.read = true);
            renderNotifications();
        } catch (err) {
            console.error(err);
        }
    });

    // Delete all notifications
    deleteAllBtn.addEventListener('click', async () => {
        if (!confirm('Are you sure you want to delete all notifications?')) return;
        try {
            const res = await fetch(`https://remj82.onrender.com/api/notifications/delete-all`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Failed to delete all notifications');
            notifications = [];
            renderNotifications();
            renderPagination();
        } catch (err) {
            console.error(err);
        }
    });

    // Pagination buttons
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderNotifications();
            renderPagination();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(notifications.length / notificationsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderNotifications();
            renderPagination();
        }
    });

    // Logout handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.href = './index.html';
        });
    }

    // Initial fetch + auto-refresh every 30s
    fetchNotifications();
    setInterval(fetchNotifications, 30000);
});
