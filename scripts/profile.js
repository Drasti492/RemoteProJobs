document.addEventListener("DOMContentLoaded", () => {
    const usernameEl = document.getElementById("profile-username");
    const phoneEl = document.getElementById("profile-phone");
    const emailEl = document.getElementById("profile-email");
    const balanceEl = document.getElementById("profile-balance");
    const messageEl = document.getElementById("profileMessage");
    const logoutBtn = document.getElementById("logoutBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");
    const backBtn = document.querySelector(".back-btn");
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("nav");
    const apiBase = "https://remj82.onrender.com/api/auth";
    const token = localStorage.getItem("authToken");

    function showMessage(text, type = "error") {
        messageEl.textContent = text;
        messageEl.className = `message ${type === "success" ? "success" : "error"}`;
        messageEl.style.display = "block";
        setTimeout(() => {
            messageEl.style.display = "none";
        }, 3000);
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
                balanceEl.textContent = "0 KSH";
            } else {
                showMessage(data.message || "Unable to fetch profile data.");
                usernameEl.textContent = "Jane Doe";
                phoneEl.textContent = "+254712345678";
                balanceEl.textContent = "0 KSH";
            }
        } catch (err) {
            console.error("Profile fetch error:", err);
            showMessage("Network error. Please try again.");
            usernameEl.textContent = "Jane Doe";
            phoneEl.textContent = "+254712345678";
            balanceEl.textContent = "0 KSH";
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
            window.location.href = "index.html";
        }, 700);
    });

    if (withdrawBtn) {
        withdrawBtn.addEventListener("click", () => {
            const balanceText = balanceEl.textContent.replace(" KSH", "");
            const balance = parseFloat(balanceText) || 0;
            if (balance < 500) {
                showMessage("Your account balance is below the minimum withdrawal amount of KES 500.", "error");
            }
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.location.href = "work.html";
        });
    }

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    loadProfile();
});