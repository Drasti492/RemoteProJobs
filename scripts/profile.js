document.addEventListener('DOMContentLoaded', async () => {
  const usernameEl = document.getElementById('profile-username');
  const phoneEl = document.getElementById('profile-phone');
  const emailEl = document.getElementById('profile-email');
  const balanceEl = document.getElementById('profile-balance');
  const verifiedBadgeEl = document.getElementById('verifiedBadge');
  const logoutBtn = document.getElementById('logoutBtn');
  const backBtn = document.querySelector('.back-btn');

  // Show cached data instantly
  const cachedProfile = JSON.parse(localStorage.getItem("userProfile"));
  if (cachedProfile) {
    usernameEl.textContent = cachedProfile.name || "Unknown";
    phoneEl.textContent = cachedProfile.phone || "Not provided";
    emailEl.textContent = cachedProfile.email || "Not provided";
    balanceEl.textContent = `${cachedProfile.balance || 0} $`;

    if (cachedProfile.isManuallyVerified) {
      verifiedBadgeEl.innerHTML = `<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified</span>`;
    }
  }

  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error("Not logged in");

    const res = await fetch('https://remj82.onrender.com/api/auth/user', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error("Failed to fetch user data");

    const data = await res.json();
    const user = data.user;

    usernameEl.textContent = user.name || "Unknown";
    phoneEl.textContent = user.phone || "Not provided";
    emailEl.textContent = user.email || "Not provided";
    balanceEl.textContent = `${user.balance || 0} $`;

    verifiedBadgeEl.innerHTML = user.isManuallyVerified
      ? `<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified</span>`
      : '';

    localStorage.setItem("userProfile", JSON.stringify(user));
  } catch (err) {
    console.error(err.message);
  }

  // Logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    window.location.href = '../index.html';
  });

  // Back button
  backBtn.addEventListener('click', () => {
    window.location.href = './work.html';
  });
});
