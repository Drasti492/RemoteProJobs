// scripts/signup.js — 100% WORKING (SAVES USER PROFILE AFTER SIGNUP)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const message = document.getElementById("signupMessage");

  const show = (text, type = "error") => {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = "block";
    setTimeout(() => message.style.display = "none", 4000);
  };

  // Toggle password visibility
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

  // Back home button
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

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

if (!strongPasswordRegex.test(password)) {
  show(
    "Password must be at least 8 characters and include uppercase, lowercase, and a number (e.g. A258100b)"
  );
  return;
}

const phoneRegex = /^\+?[0-9]{8,15}$/;

if (!phoneRegex.test(phone)) {
  show("Enter a valid phone number (numbers only, 8–15 digits)");
  return;
}



    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
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
        // Save profile so verify page & profile page work instantly
        localStorage.setItem("token", data.token || ""); // in case backend sends token
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userProfile", JSON.stringify(data.user || data.data || {}));

        show("Account created! Redirecting...", "success");
        form.reset();
        setTimeout(() => {
          window.location.href = "../pages/verify.html";
        }, 800);
      } else {
        show(data.message || "Registration failed");
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