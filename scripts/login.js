// scripts/login.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const togglePassword = document.querySelector(".toggle-password");
  const backHomeBtn = document.querySelector(".back-home-btn");

  // Helper for showing messages
  const showMessage = (text, type = "error") => {
    loginMessage.textContent = text;
    loginMessage.className = `message ${type}`;
    loginMessage.style.display = "block";
  };

  // Toggle password visibility
  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      const input = togglePassword.previousElementSibling;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      togglePassword.querySelector("i").classList.toggle("fa-eye", isPassword);
      togglePassword.querySelector("i").classList.toggle("fa-eye-slash", !isPassword);
    });
  }

  // Back home button
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  // Login form submission
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    if (!email || !password) {
      showMessage("Please fill in both email and password.");
      return;
    }

    showMessage("Logging in...", "success");

    try {
      // Login API call
      const res = await fetch("https://remj82.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login API response:", data);

      if (!res.ok || !data.token) {
        showMessage(data.message || "Login failed. Please check your credentials.");
        return;
      }

      // Save token & email
      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", email);

      // Fetch user profile
      try {
        const profileRes = await fetch("https://remj82.onrender.com/api/auth/user", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json"
          }
        });

        const profileData = await profileRes.json();
        console.log("Fetched profile:", profileData);

        if (profileData.success && profileData.user) {
          localStorage.setItem("userProfile", JSON.stringify(profileData.user));
        } else {
          console.warn("Profile not found or invalid response");
        }
      } catch (profileErr) {
        console.error("Error fetching profile:", profileErr);
      }

      // Redirect to main work page
      showMessage("Login successful! please wait...", "success");
      loginForm.reset();
      setTimeout(() => {
        window.location.href = "work.html";
      }, 1500);

    } catch (err) {
      console.error("Login error:", err);
      showMessage("Network error. Please try again.");
    }
  });
});
