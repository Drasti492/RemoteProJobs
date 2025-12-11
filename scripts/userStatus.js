// scripts/userStatus.js → REUSABLE ON EVERY PAGE
async function getUserStatus() {
  const token = localStorage.getItem("token");
  if (!token) return { loggedIn: false };

  try {
    const res = await fetch("https://remj82.onrender.com/api/auth/user", {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error();

    const data = await res.json();
    const user = data.user;

    localStorage.setItem("userProfile", JSON.stringify(user));

    return {
      loggedIn: true,
      verified: !!(user.verified || user.isManuallyVerified),
      connects: user.connects || 0,
      balance: user.balance || 0,
      name: user.name || "User"
    };
  } catch (err) {
    return { loggedIn: true, verified: false, connects: 0, balance: 0 };
  }
}

function updatePageForUser(status) {
  document.querySelectorAll(".if-verified").forEach(el => {
    el.style.display = status.verified ? "block" : "none";
  });
  document.querySelectorAll(".if-not-verified").forEach(el => {
    el.style.display = status.verified ? "none" : "block";
  });
}