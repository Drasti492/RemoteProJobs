// scripts/signup.js — FINAL & FASTEST VERSION
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const message = document.getElementById("signupMessage");

  const show = (text, type = "error") => {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = "block";
    setTimeout(() => message.style.display = "none", 4000);
  };

  // Password toggle
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

  // Back home
  document.querySelector(".back-home-btn")?.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirm = form["confirm-password"].value;

    if (!name || !phone || !email || !password) {
      show("All fields are required");
      return;
    }
    if (password !== confirm) {
      show("Passwords do not match");
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Creating account...";

    try {
      const res = await fetch("https://remj82.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        show("Account created! Redirecting...", "success");
        localStorage.setItem("verifyEmail", email);
        form.reset();
        setTimeout(() => window.location.href = "../pages/verify.html", 800);
      } else {
        show(data.message || "Signup failed");
        btn.disabled = false;
        btn.textContent = original;
      }
    } catch (err) {
      show("No internet connection");
      btn.disabled = false;
      btn.textContent = original;
    }
  });
});