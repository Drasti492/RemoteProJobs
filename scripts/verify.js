// In-page notification element
const inPageNotification = document.createElement("div");
inPageNotification.id = "inPageNotification";
inPageNotification.style.cssText = `
    display: none;
    position: fixed;
    top: 80px;
    right: 20px;
    background: rgba(0,0,0,0.8);
    color: #fff;
    padding: 10px 16px;
    border-radius: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 9999;
`;
document.body.appendChild(inPageNotification);

// Show messages in-page
function showMessage(message, type = "success", duration = 4000) {
    inPageNotification.innerHTML = "";
    const icon = document.createElement("i");
    icon.className = type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle";
    const text = document.createElement("span");
    text.textContent = message;
    inPageNotification.appendChild(icon);
    inPageNotification.appendChild(text);

    inPageNotification.style.background = type === "success" ? "rgba(16, 185, 129, 0.9)" : "rgba(239, 68, 68, 0.9)";
    inPageNotification.style.display = "flex";

    setTimeout(() => {
        inPageNotification.style.display = "none";
    }, duration);
}

// Load profile from localStorage
function loadProfileFromLocal() {
    const userStr = localStorage.getItem("user"); // Must have user object stored on login
    if (!userStr) {
        showMessage("No user data found. Please login.", "error");
        return;
    }

    const user = JSON.parse(userStr);

    // Set profile info immediately
    document.getElementById("profile-username").textContent = user.name;
    document.getElementById("profile-phone").textContent = user.phone;
    document.getElementById("profile-email").textContent = user.email;
    document.getElementById("profile-balance").textContent = `$${user.connects * 10}`;

    const verifiedBadge = document.getElementById("verifiedBadge");
    const verifyNotice = document.getElementById("verifyNotice");

    if (user.verified || user.isManuallyVerified) {
        // Verified
        verifyNotice.textContent = "✅ Your account is verified and active!";
        verifyNotice.style.color = "#10b981";
        verifyNotice.style.background = "rgba(16, 185, 129, 0.1)";
        verifyNotice.style.border = "1px solid rgba(16, 185, 129, 0.3)";
        verifiedBadge.innerHTML = `<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified</span>`;
        showMessage("Welcome back! Your account is verified.", "success");
    } else {
        // Not verified
        verifyNotice.textContent = "⚠️ Your account is not verified. Get connects to verify!";
        verifyNotice.style.color = "#f87171";
        verifyNotice.style.background = "rgba(248, 113, 113, 0.1)";
        verifyNotice.style.border = "1px solid rgba(248, 113, 113, 0.3)";
        verifiedBadge.innerHTML = "";
        showMessage("Your account is not verified yet.", "error");
    }
}

// Optional: Fetch updated verification from backend (if you want live update)
async function fetchVerificationStatus() {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
        const res = await fetch("https://remj82.onrender.com/api/auth/me", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("Failed to fetch user info");

        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data.user)); // update local storage
        loadProfileFromLocal();
    } catch (err) {
        console.error(err);
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
    loadProfileFromLocal();
    // Optional: fetch live verification status after 2s
    setTimeout(fetchVerificationStatus, 2000);
});
