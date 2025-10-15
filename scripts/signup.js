document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");
  const togglePassword = document.querySelectorAll(".toggle-password");
  const backHomeBtn = document.querySelector(".back-home-btn");

  function showMessage(text, type = "error") {
    signupMessage.textContent = text;
    signupMessage.className = `message ${type}`;
  }

  togglePassword.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      toggle.querySelector("i").classList.toggle("fa-eye", isPassword);
      toggle.querySelector("i").classList.toggle("fa-eye-slash", !isPassword);
    });
  });

  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(signupForm);
    
    // Log all form data entries
    const formDataEntries = {};
    for (const [key, value] of formData.entries()) {
      formDataEntries[key] = value;
    }
    console.log("Raw FormData:", formDataEntries); // Debugging

    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const confirmPassword = formData.get("confirm-password").trim();

    console.log("Processed form data:", { name, phone, email, password, confirmPassword }); // Debugging

    if (!name || !phone || !email || !password || !confirmPassword) {
      showMessage("Please fill in all fields, including phone number.");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("https://remj82.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, password }),
        credentials: "include",
      });

      const data = await res.json();
      console.log("Register API response:", data); // Debugging

      if (res.ok) {
        showMessage(data.message, "success");
        localStorage.setItem("verifyEmail", email);
        signupForm.reset();
        setTimeout(() => {
          window.location.href = "verify.html";
        }, 1500);
      } else {
        showMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err.message);
      showMessage("Network error. Please try again.");
    }
  });
});