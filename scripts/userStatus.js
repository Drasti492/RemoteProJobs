// scripts/userStatus.js — STRICT MANUAL VERIFICATION (FINAL)

async function getUserStatus() {
  const token = localStorage.getItem("token");
  if (!token) return { loggedIn: false };

  try {
    const res = await fetch("https://remj82.onrender.com/api/auth/user", {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Unauthorized");

    const data = await res.json();
    const user = data.user;

    // Cache profile
    localStorage.setItem("userProfile", JSON.stringify(user));

    return {
      loggedIn: true,

      // ✅ ONLY ADMIN MANUAL VERIFICATION COUNTS
      verified: user.isManuallyVerified === true,

      connects: user.connects || 0,
      balance: user.balance || 0,
      name: user.name || "User"
    };
  } catch (err) {
    console.error("getUserStatus error:", err);
    return {
      loggedIn: true,
      verified: false,
      connects: 0,
      balance: 0
    };
  }
}

// =====================================
// UI CONTROLLER
// =====================================
function updatePageForUser(status) {
  if (!status) return;

  document.querySelectorAll(".if-verified").forEach(el => {
    el.style.display = status.verified ? "block" : "none";
  });

  document.querySelectorAll(".if-not-verified").forEach(el => {
    el.style.display = status.verified ? "none" : "block";
  });
}
