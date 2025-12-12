// scripts/profile.js 
document.addEventListener("DOMContentLoaded", async () => {
  const BASE_URL = "https://remj82.onrender.com";
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  // Clear old cache — always get fresh data from backend
  localStorage.removeItem("userProfile");

  const els = {
    name: document.getElementById("profile-name"),
    fullname: document.getElementById("profile-fullname"),
    email: document.getElementById("profile-email"),
    email2: document.getElementById("profile-email2"),
    phone: document.getElementById("profile-phone"),
    balance: document.getElementById("profile-balance"),
    connects: document.getElementById("connects-count"),
    applications: document.getElementById("applications-count"),
    verifiedBanner: document.getElementById("verifiedBanner"),
    notVerifiedBanner: document.getElementById("notVerifiedBanner")
    // NO memberSince — it's gone forever
  };

  // Loading state
  els.name.textContent = "Loading...";

  try {
    // COMMUNICATES WITH BACKEND — GETS REAL, FRESH USER DATA
    const res = await fetch(`${BASE_URL}/api/auth/user`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });

    if (!res.ok) throw new Error("Failed to load profile");

    const { user } = await res.json();

    // Save fresh data for other pages
    localStorage.setItem("userProfile", JSON.stringify(user));

    // RENDER EVERYTHING
    els.name.textContent = user.name || "User";
    els.fullname.textContent = user.name || "—";
    els.email.textContent = user.email || "—";
    els.email2.textContent = user.email || "—";
    els.phone.textContent = user.phone || "Not added";
    els.balance.textContent = `$${(user.balance || 0).toFixed(2)}`;
    els.connects.textContent = user.connects ?? 0;
    els.applications.textContent = user.applications?.length ?? 0;

    // VERIFICATION LOGIC — ONLY YOU CAN DO THIS
    if (user.isManuallyVerified === true) {
      els.verifiedBanner.style.display = "flex";
      els.notVerifiedBanner.style.display = "none";
    } else {
      els.verifiedBanner.style.display = "none";
      els.notVerifiedBanner.style.display = "flex";
    }

  } catch (error) {
    console.error("Profile load failed:", error);
    els.name.textContent = "Error loading profile";
  }
});