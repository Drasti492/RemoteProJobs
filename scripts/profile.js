// scripts/profile.js — FINAL & FLAWLESS
document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const els = {
    name: document.getElementById('profile-name'),
    email: document.getElementById('profile-email'),
    email2: document.getElementById('profile-email2'),
    fullname: document.getElementById('profile-fullname'),
    phone: document.getElementById('profile-phone'),
    balance: document.getElementById('profile-balance'),
    connects: document.getElementById('connects-count'),
    applications: document.getElementById('applications-count'),
    notVerifiedBanner: document.getElementById('notVerifiedBanner'),
    verifiedBanner: document.getElementById('verifiedBanner'),
    memberSince: document.getElementById('member-since')
  };

  let user = null;

  // Instant cached display
  const cached = localStorage.getItem('userProfile');
  if (cached) {
    user = JSON.parse(cached);
    render(user);
  }

  // Fetch fresh data
  try {
    const res = await fetch('https://remj82.onrender.com/api/auth/user', {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!res.ok) throw new Error();

    const data = await res.json();
    user = data.user;
    localStorage.setItem('userProfile', JSON.stringify(user));
    render(user);
  } catch (err) {
    // Keep cached if failed
  }

  function render(u) {
    els.name.textContent = u.name || "User";
    els.email.textContent = u.email;
    els.email2.textContent = u.email;
    els.fullname.textContent = u.name || "—";
    els.phone.textContent = u.phone || "—";
    els.balance.textContent = `${u.balance || 0} $`;
    els.connects.textContent = u.connects || 0;
    els.applications.textContent = u.applications?.length || 0;
    els.memberSince.textContent = new Date(u.createdAt || Date.now()).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    // VERIFICATION LOGIC
    if (u.isManuallyVerified) {
      els.verifiedBanner.style.display = "flex";
      els.notVerifiedBanner.style.display = "none";
    } else {
      els.verifiedBanner.style.display = "none";
      els.notVerifiedBanner.style.display = "flex";
    }
  }

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "login.html";
  });
});