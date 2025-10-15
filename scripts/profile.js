document.addEventListener("DOMContentLoaded", () => {
    const usernameEl = document.getElementById("profile-username");
    const phoneEl = document.getElementById("profile-phone");
    const emailEl = document.getElementById("profile-email");
    const messageEl = document.getElementById("profileMessage");
    const logoutBtn = document.getElementById("logoutBtn");
    const backBtn = document.querySelector(".back-btn");
    const apiBase = "https://remj82.onrender.com/api/auth";
    const token = localStorage.getItem("authToken");

    function showMessage(text, type = "error") {
        messageEl.textContent = text;
        messageEl.className = "message " + (type === "success" ? "success" : "error");
    }

    async function loadProfile() {
        if (!token) {
            showMessage("Please log in to view your profile.");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
            return;
        }

        emailEl.textContent = localStorage.getItem("userEmail") || localStorage.getItem("verifyEmail") || "N/A";

        try {
            const res = await fetch(`${apiBase}/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                credentials: "include"
            });

            const data = await res.json();
            if (res.ok && data.user) {
                usernameEl.textContent = data.user.name || "N/A";
                phoneEl.textContent = data.user.phone || "N/A";
                emailEl.textContent = data.user.email || emailEl.textContent;
            } else {
                showMessage(data.message || "Unable to fetch profile data.");
                usernameEl.textContent = "Jane Doe";
                phoneEl.textContent = "+254712345678";
            }
        } catch (err) {
            console.error("Profile fetch error:", err);
            showMessage("Network error. Please try again.");
            usernameEl.textContent = "Jane Doe";
            phoneEl.textContent = "+254712345678";
        }
    }

    logoutBtn.addEventListener("click", async () => {
        try {
            await fetch(`${apiBase}/logout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
        } catch (err) {
            console.error("Logout error:", err);
        }
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        showMessage("Logged out successfully.", "success");
        setTimeout(() => {
            window.location.href = "index.html"; // Changed to index.html
        }, 700);
    });

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.location.href = "work.html";
        });
    }

    loadProfile();
});