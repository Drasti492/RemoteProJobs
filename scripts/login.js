// scripts/login.js — FINAL, CLEAN & ZERO RED LINES
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("loginMessage");

  if (!form || !message) return;

  const show = (text, type = "error") => {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = "block";
    setTimeout(() => message.style.display = "none", 4000);
  };

  // Password toggle (show/hide
  document.querySelectorAll(".toggle-password").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling;
      const icon = toggle.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        input.type = "password";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      }
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      show("Email and password are required");
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Logging in...";

    try {
      const res = await fetch("https://remj82.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", email);
        show("Welcome back!", "success");
        setTimeout(() => {
          window.location.href = "../pages/work.html";
        }, 600);
      } else {
        show(data.message || "Invalid email or password");
        btn.disabled = false;
        btn.textContent = originalText;
      }
    } catch (err) {
      show("No internet connection");
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
});