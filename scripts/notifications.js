// ================================
// notifications.js – Full Page Logic + Delete + Mark All + Pagination
// Works with your exact routes
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../auth/login.html";
    return;
  }

  // DOM
  const notificationBell = document.getElementById("notificationBell");
  const notificationCount = document.getElementById("notificationCount");
  const listContainer = document.getElementById("notifications-list");
  const markAllReadBtn = document.getElementById("markAllRead");
  const deleteAllBtn = document.getElementById("deleteAll");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const paginationNumbers = document.getElementById("paginationNumbers");

  if (!notificationBell || !notificationCount || !listContainer) {
    console.error("Required elements missing.");
    return;
  }

  // Pagination
  const PER_PAGE = 6;
  let currentPage = 1;
  let allNotifs = [];

  // Time ago
  function timeAgo(dateString) {
    const now = new Date();
    const past = new Date(dateString);
    const seconds = Math.floor((now - past) / 1000);

    const intervals = [
      { label: "year", sec: 31536000 },
      { label: "month", sec: 2592000 },
      { label: "day", sec: 86400 },
      { label: "hour", sec: 3600 },
      { label: "minute", sec: 60 },
      { label: "second", sec: 1 }
    ];

    for (const i of intervals) {
      const count = Math.floor(seconds / i.sec);
      if (count >= 1) {
        return count === 1 ? `${count} ${i.label} ago` : `${count} ${i.label}s ago`;
      }
    }
    return "Just now";
  }

  // Render list + pagination
  function render(notifs) {
    allNotifs = notifs || [];
    const totalPages = Math.ceil(allNotifs.length / PER_PAGE);
    const start = (currentPage - 1) * PER_PAGE;
    const page = allNotifs.slice(start, start + PER_PAGE);

    if (allNotifs.length === 0) {
      listContainer.innerHTML = `
        <div class="notif-item" style="text-align:center;color:#777;padding:32px;">
          <i class="fas fa-bell-slash" style="font-size:24px;margin-bottom:8px;"></i>
          No notifications yet.
        </div>`;
      renderPagination(0);
      return;
    }

    listContainer.innerHTML = page
      .map(n => `
        <div class="notif-item ${!n.read ? "unread" : ""}" data-id="${n._id}">
          <div class="notif-content">
            <div class="notif-title">${n.title || "Notification"}</div>
            <div class="notif-message">${n.message}</div>
            <div class="notif-meta">${timeAgo(n.createdAt)}</div>
          </div>
          <div class="notif-actions">
            ${!n.read ? `<button class="btn-mark-read" data-id="${n._id}">Mark Read</button>` : ""}
            <button class="btn-delete" data-id="${n._id}">Delete</button>
          </div>
        </div>
      `)
      .join("");

    renderPagination(totalPages);
    attachListeners();
  }

  // Pagination UI
  function renderPagination(total) {
    paginationNumbers.innerHTML = "";
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === total || total === 0;

    document.querySelector('.notif-pagination').style.display = total <= 1 ? 'none' : 'flex';

    const max = 5;
    let start = Math.max(1, currentPage - Math.floor(max / 2));
    let end = Math.min(total, start + max - 1);
    if (end - start + 1 < max) start = Math.max(1, end - max + 1);

    if (start > 1) { addBtn(1); if (start > 2) addEllipsis(); }
    for (let i = start; i <= end; i++) addBtn(i);
    if (end < total) { if (end < total - 1) addEllipsis(); addBtn(total); }
  }

  function addBtn(page) {
    const b = document.createElement("button");
    b.textContent = page;
    b.className = `pagination-btn ${page === currentPage ? "active" : ""}`;
    b.onclick = () => {
      currentPage = page;
      render(allNotifs);
      window.scrollTo({ top: listContainer.offsetTop - 100, behavior: "smooth" });
    };
    paginationNumbers.appendChild(b);
  }

  function addEllipsis() {
    const e = document.createElement("span");
    e.textContent = "...";
    e.className = "pagination-ellipsis";
    paginationNumbers.appendChild(e);
  }

  // Attach per-item actions
  function attachListeners() {
    // Mark read
    document.querySelectorAll(".btn-mark-read").forEach(btn => {
      btn.onclick = async e => {
        e.stopPropagation();
        const id = btn.dataset.id;
        try {
          await fetch(`https://remj82.onrender.com/api/notifications/${id}/read`, {
            method: "PATCH",
            headers: { Authorization: `Bearer ${token}` }
          });
          fetchNotifs();
        } catch {
          window.notify.show("Failed to mark as read.", "error");
        }
      };
    });

    // Delete one
    document.querySelectorAll(".btn-delete").forEach(btn => {
      btn.onclick = async e => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (!confirm("Delete this notification?")) return;
        try {
          await fetch(`https://remj82.onrender.com/api/notifications/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
          });
          window.notify.show("Deleted.", "success");
          fetchNotifs();
        } catch {
          window.notify.show("Delete failed.", "error");
        }
      };
    });
  }

  // Fetch + update bell
  async function fetchNotifs() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw "";
      const data = await res.json();
      const unread = data.filter(n => !n.read).length;

      notificationCount.textContent = unread > 9 ? "9+" : unread;
      notificationCount.style.display = unread > 0 ? "flex" : "none";

      render(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (err) {
      listContainer.innerHTML = `<div class="notif-item" style="text-align:center;color:#e74c3c;"><i class="fas fa-exclamation-triangle"></i><br>Failed to load.</div>`;
      renderPagination(0);
    }
  }

  // Mark All Read
  markAllReadBtn.onclick = async () => {
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` }
      });
      window.notify.show("All marked as read.", "success");
      fetchNotifs();
    } catch {
      window.notify.show("Failed to mark all.", "error");
    }
  };

  // Delete All
  deleteAllBtn.onclick = async () => {
    if (allNotifs.length === 0) return;
    if (!confirm("Delete ALL notifications?")) return;
    try {
      await fetch("https://remj82.onrender.com/api/notifications/", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      window.notify.show("All deleted.", "success");
      fetchNotifs();
    } catch {
      window.notify.show("Failed to delete all.", "error");
    }
  };

  // Pagination arrows
  prevPageBtn.onclick = () => { if (currentPage > 1) { currentPage--; render(allNotifs); } };
  nextPageBtn.onclick = () => {
    const total = Math.ceil(allNotifs.length / PER_PAGE);
    if (currentPage < total) { currentPage++; render(allNotifs); }
  };

  // Bell → go to page
  notificationBell.onclick = e => { e.preventDefault(); window.location.href = "./notifications.html"; };

  // Init + poll
  fetchNotifs();
  setInterval(fetchNotifs, 20000);
});

// ================================
// TOAST – unchanged (your working version)
// ================================
window.notify = (function () {
  const id = "notification-toast-container";
  function container() {
    let c = document.getElementById(id);
    if (!c) {
      c = document.createElement("div");
      c.id = id;
      c.style.cssText = `position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:12px;max-width:360px;font-family:system-ui,sans-serif;pointer-events:none;`;
      document.body.appendChild(c);
    }
    return c;
  }

  function show(msg, type = "info", dur = 6000) {
    const cont = container();
    if (Array.from(cont.children).some(el => el.querySelector(".toast-message")?.textContent === msg)) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
      background:${type==="success"?"#10b981":type==="error"?"#ef4444":"#3b82f6"};
      color:white;padding:14px 16px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.15);
      display:flex;align-items:center;gap:12px;min-width:280px;font-size:14px;
      opacity:0;transform:translateX(20px);transition:opacity .3s,transform .3s;
      pointer-events:auto;animation:slideIn .3s forwards;
    `;
    toast.innerHTML = `
      <span class="toast-message">${msg}</span>
      <button class="toast-close" style="background:none;border:none;color:white;font-size:20px;cursor:pointer;" onclick="this.parentElement.remove()">×</button>
    `;
    cont.appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = "1"; toast.style.transform = "translateX(0)"; });
    if (dur) setTimeout(() => { toast.style.opacity = "0"; toast.style.transform = "translateX(20px)"; setTimeout(() => toast.remove(), 300); }, dur);
  }
  return { show };
})();

const style = document.createElement("style");
style.textContent = `@keyframes slideIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}`;
document.head.appendChild(style);