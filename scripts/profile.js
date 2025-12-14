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
    applications: document.getElementById("applications-count"),
    verifiedBanner: document.getElementById("verifiedBanner"),
    notVerifiedBanner: document.getElementById("notVerifiedBanner")
  };

  // Optional Blue Check if you added it
  const blueCheck = document.getElementById("blue-check");

  let user = null;

  const cached = localStorage.getItem("userProfile");
  if (cached) {
    user = JSON.parse(cached);
    render(user);
  }

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

  function render(u) {
    els.name.textContent = u.name || "User";
    els.fullname.textContent = u.name || "—";
    els.email.textContent = u.email;
    els.email2.textContent = u.email;
    els.phone.textContent = u.phone || "Not added";

    els.balance.textContent = `$${(u.balance || 0).toFixed(2)}`;
    els.connects.textContent = u.connects ?? 0;
    els.applications.textContent = u.applications?.length ?? 0;

    // Strict verification: only manual
    if (u.isManuallyVerified === true) {
      els.verifiedBanner.style.display = "flex";
      els.notVerifiedBanner.style.display = "none";
      if (blueCheck) blueCheck.style.display = "inline-block";
    } else {
      els.notVerifiedBanner.style.display = "flex";
      els.verifiedBanner.style.display = "none";
      if (blueCheck) blueCheck.style.display = "none";
    }
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "../index.html";
    });
  }
});
