// scripts/login.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const togglePassword = document.querySelector(".toggle-password");
  const backHomeBtn = document.querySelector(".back-home-btn");

  function showMessage(text, type = "error") {
    loginMessage.textContent = text;
    loginMessage.className = `message ${type}`;
    loginMessage.style.display = "block";
  }

  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      const input = togglePassword.previousElementSibling;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      togglePassword.querySelector("i").classList.toggle("fa-eye", isPassword);
      togglePassword.querySelector("i").classList.toggle("fa-eye-slash", !isPassword);
    });
  }

  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    console.log("Processed form data:", { email, password });

    if (!email || !password) {
      showMessage("Please fill in both email and password.");
      return;
    }

    showMessage("Logging in...", "success");

    try {
      const res = await fetch("https://remj82.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();
      console.log("Login API response:", data);

      if (res.ok) {
        showMessage(data.message, "success");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", email);
        loginForm.reset();
        setTimeout(() => {
          window.location.href = "work.html";
        }, 1500);
      } else {
        showMessage(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err.message);
      showMessage("Network error. Please try again.");
    }
  });
});