document.addEventListener("DOMContentLoaded", async () => {
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

  // ⭐ Load cached version instantly (smooth UI)
  const cached = localStorage.getItem("userProfile");
  if (cached) {
    user = JSON.parse(cached);
    render(user);
  }

  // ⭐ Fetch updated profile from backend
  try {
    const res = await fetch("https://remj82.onrender.com/api/auth/user", {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Could not load profile data");

    const data = await res.json();
    user = data.user;

    localStorage.setItem("userProfile", JSON.stringify(user));
    render(user);
  } catch (err) {
    console.error("Profile fetch error:", err);
  }

  // ⭐ RENDER FUNCTION — all UI updates happen here
  function render(u) {
    // Basic profile info
    els.name.textContent = u.name || "User";
    els.fullname.textContent = u.name || "—";
    els.email.textContent = u.email;
    els.email2.textContent = u.email;
    els.phone.textContent = u.phone || "Not added";

    // Stats
    els.balance.textContent = `$${(u.balance || 0).toFixed(2)}`;
    els.connects.textContent = u.connects ?? 0;
    els.applications.textContent = u.totalApplications ?? 0;

    // Member Since
    els.memberSince.textContent = u.createdAt
      ? new Date(u.createdAt).toLocaleDateString()
      : "—";

    // VERIFICATION SYSTEM
    if (u.verified || u.isManuallyVerified) {
      els.verifiedBanner.style.display = "flex";
      els.notVerifiedBanner.style.display = "none";
    } else {
      els.notVerifiedBanner.style.display = "flex";
      els.verifiedBanner.style.display = "none";
    }
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "../index.html";
    });
  }
});
