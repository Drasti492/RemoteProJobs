document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  // ==================== DOM Elements ====================
  const notificationBell = document.getElementById("notificationBell");
  const notificationCount = document.getElementById("notificationCount");
  const listContainer = document.getElementById("notifications-list");
  const markAllReadBtn = document.getElementById("markAllRead");
  const deleteAllBtn = document.getElementById("deleteAll");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const paginationNumbers = document.getElementById("paginationNumbers");

  if (!listContainer) return;

  // ==================== Pagination ====================
  const PER_PAGE = 6;
  let currentPage = 1;
  let allNotifications = [];


  // ==================== Time Ago Helper ====================

function formatNotificationTime(notification) {
  const rawDate = notification.createdAt || notification.date;
  const date = new Date(rawDate);

  // Safety check
  if (!rawDate || isNaN(date.getTime())) {
    return "—";
  }

  const now = new Date();
  const diffMs = now - date;
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours   = Math.floor(diffMinutes / 60);
  const diffDays    = Math.floor(diffHours / 24);

  // ⏱ Same day → relative time
  if (diffDays === 0) {
    if (diffHours > 0) return `${diffHours}h ago`;
    if (diffMinutes > 0) return `${diffMinutes}m ago`;
    return "Just now";
  }

  // 📅 Older → exact timestamp (professional style)
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}


  // ==================== Render Notifications ====================
  function render() {
    const totalPages = Math.ceil(allNotifications.length / PER_PAGE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    const start = (currentPage - 1) * PER_PAGE;
    const pageData = allNotifications.slice(start, start + PER_PAGE);

    if (allNotifications.length === 0) {
      listContainer.innerHTML = `<div style="text-align:center;padding:50px 20px;color:#777;">
        <i class="fas fa-bell-slash" style="font-size:48px;margin-bottom:16px;opacity:0.5;"></i>
        <p>No notifications yet</p>
      </div>`;
      renderPagination();
      return;
    }

    listContainer.innerHTML = pageData.map(notif => `
      <div class="notif-item ${!notif.read ? 'unread' : ''}" data-id="${notif._id}">
        <div class="notif-content">
          <div class="notif-title">${notif.title || "Notification"}</div>
          <div class="notif-message">${notif.message}</div>
          <div class="notif-meta">${formatNotificationTime(notif)}</div>
        </div>
        <div class="notif-actions">
          ${!notif.read ? `<button class="btn-mark-read" data-id="${notif._id}">Mark Read</button>` : ""}
          <button class="btn-delete" data-id="${notif._id}">Delete</button>
        </div>
      </div>
    `).join("");

    attachItemListeners();
    renderPagination();
  }

  // ==================== Render Pagination Buttons ====================
  function renderPagination() {
    const totalPages = Math.ceil(allNotifications.length / PER_PAGE) || 1;
    paginationNumbers.innerHTML = "";

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage >= totalPages;

    const maxButtons = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxButtons - 1);
    if (end - start + 1 < maxButtons) start = Math.max(1, end - maxButtons + 1);

    const addBtn = (num) => {
      const btn = document.createElement("button");
      btn.textContent = num;
      btn.className = `pagination-btn ${num === currentPage ? "active" : ""}`;
      btn.onclick = () => { currentPage = num; render(); window.scrollTo({ top: listContainer.offsetTop - 100, behavior: "smooth" }); };
      paginationNumbers.appendChild(btn);
    };

    if (start > 1) { addBtn(1); if (start > 2) paginationNumbers.innerHTML += '<span class="pagination-ellipsis">...</span>'; }
    for (let i = start; i <= end; i++) addBtn(i);
    if (end < totalPages) { if (end < totalPages - 1) paginationNumbers.innerHTML += '<span class="pagination-ellipsis">...</span>'; addBtn(totalPages); }
  }

// ==================== Attach Actions ====================
function attachItemListeners() {
  // Mark read
  document.querySelectorAll(".btn-mark-read").forEach(btn => {
    btn.onclick = async (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      try {
        await fetch(`https://remj82.onrender.com/api/notifications/${id}/read`, { 
          method: "PATCH", 
          headers: { Authorization: `Bearer ${token}` } 
        });
        // Update locally
        const notif = allNotifications.find(n => n._id === id);
        if (notif) notif.read = true;
        render();
      } catch {
        notify.error("Failed to mark as read");
      }
    };
  });

  // Delete
  document.querySelectorAll(".btn-delete").forEach(btn => {
    btn.onclick = async (e) => {
      e.stopPropagation();
      if (!confirm("Delete this notification?")) return;
      const id = btn.dataset.id;
      try {
        await fetch(`https://remj82.onrender.com/api/notifications/${id}`, { 
          method: "DELETE", 
          headers: { Authorization: `Bearer ${token}` } 
        });
        // Remove from local array immediately
        allNotifications = allNotifications.filter(n => n._id !== id);
        
        // Adjust current page if needed
        const totalPages = Math.ceil(allNotifications.length / PER_PAGE) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        notify.success("Deleted");
        render(); // rerender current page slice
      } catch {
        notify.error("Delete failed");
      }
    };
  });
}


  // ==================== Fetch Notifications & Update Bell ====================
  async function fetchNotifications() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error("Failed to fetch notifications");
      const data = await res.json();
     allNotifications = data.sort((a, b) => {
          const dateA = new Date(a.createdAt || a.date);
          const dateB = new Date(b.createdAt || b.date);
          return dateB - dateA;
       });


      const unreadCount = allNotifications.filter(n => !n.read).length;
      if (notificationCount) {
        notificationCount.textContent = unreadCount > 9 ? "9+" : unreadCount;
        notificationCount.style.display = unreadCount > 0 ? "flex" : "none";
      }

      render();
    } catch (err) {
      listContainer.innerHTML = `<div style="text-align:center;color:#e74c3c;padding:40px;">Failed to load notifications</div>`;
      renderPagination();
      console.error(err);
    }
  }

  // ==================== Mark All Read ====================
  markAllReadBtn?.addEventListener("click", async () => {
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", { method: "PATCH", headers: { Authorization: `Bearer ${token}` } });
      allNotifications.forEach(n => n.read = true); // update locally
      notify.success("All marked as read");
      render();
    } catch { notify.error("Failed"); }
  });

  // ==================== Delete All ====================
  deleteAllBtn?.addEventListener("click", async () => {
    if (!allNotifications.length) return;
    if (!confirm("Delete ALL notifications?")) return;
    try {
      await fetch("https://remj82.onrender.com/api/notifications/", { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      allNotifications = [];
      notify.success("All notifications deleted");
      render();
    } catch { notify.error("Failed to delete all"); }
  });

  // ==================== Pagination Buttons ====================
  prevPageBtn?.addEventListener("click", () => { if (currentPage > 1) { currentPage--; render(); } });
  nextPageBtn?.addEventListener("click", () => { if (currentPage < Math.ceil(allNotifications.length / PER_PAGE)) { currentPage++; render(); } });

  // ==================== Bell Click ====================
  notificationBell?.addEventListener("click", (e) => e.preventDefault());

  // ==================== INIT ====================
  fetchNotifications();
  setInterval(fetchNotifications, 20000);
});
