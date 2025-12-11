document.addEventListener("DOMContentLoaded", async () => {
  const BASE_URL = "https://remj82.onrender.com";
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const els = {
    name: document.getElementById("profile-name"),
    fullname: document.getElementById("profile-fullname"),
    email: document.getElementById("profile-email"),
    email2: document.getElementById("profile-email2"),
    phone: document.getElementById("profile-phone"),
    balance: document.getElementById("profile-balance"),
    connects: document.getElementById("connects-count"),
    memberSince: document.getElementById("member-since"),
    applications: document.getElementById("applications-count"),
    verifiedBanner: document.getElementById("verifiedBanner"),
    notVerifiedBanner: document.getElementById("notVerifiedBanner")
  };

  let user = null;

  // 🔹 Load cached profile instantly for smooth UI
  const cached = localStorage.getItem("userProfile");
  if (cached) {
    user = JSON.parse(cached);
    render(user);
  }

  // 🔹 Fetch the latest version from backend
  try {
    const res = await fetch(`${BASE_URL}/api/auth/user`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) {
      throw new Error("Could not load profile data");
    }

    const data = await res.json();
    user = data.user;

    localStorage.setItem("userProfile", JSON.stringify(user));

    render(user);
  } catch (err) {
    console.error("Profile fetch error:", err);
  }

  // =====================================================
  // ⭐ RENDER FUNCTION — updates the whole UI
  // =====================================================
  function render(u) {
    if (!u) return;

    // Basic user info
    els.name.textContent = u.name || "User";
    els.fullname.textContent = u.name || "—";
    els.email.textContent = u.email || "—";
    els.email2.textContent = u.email || "—";
    els.phone.textContent = u.phone || "Not added";

    // Wallet balance
    els.balance.textContent = `$${(u.balance || 0).toFixed(2)}`;

    // Connects
    els.connects.textContent = u.connects ?? 0;

    // Application count
    els.applications.textContent = u.applications?.length ?? 0;

    // Member Since
    els.memberSince.textContent = u.createdAt
      ? new Date(u.createdAt).toLocaleDateString()
      : "—";

    // Verification status
    if (u.verified || u.isManuallyVerified) {
      els.verifiedBanner.style.display = "flex";
      els.notVerifiedBanner.style.display = "none";
    } else {
      els.notVerifiedBanner.style.display = "flex";
      els.verifiedBanner.style.display = "none";
    }
  }

  // =====================================================
  // LOGOUT
  // =====================================================
  // DELETE THIS WHOLE BLOCK FROM profile.js
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../index.html";
  });
}
});
