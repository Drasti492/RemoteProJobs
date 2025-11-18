// scripts/verify.js
document.addEventListener("DOMContentLoaded", () => {
  const verifyForm = document.getElementById("verifyForm");
  const emailInput = document.getElementById("verifyEmail");
  const codeInput = document.getElementById("code");
  const verifyMessage = document.getElementById("verifyMessage");
  const resendLink = document.getElementById("resendLink");
  const backBtn = document.querySelector(".back-btn");

  const showMessage = (text, type = "error") => {
    verifyMessage.textContent = text;
    verifyMessage.className = `message ${type}`;
    verifyMessage.style.display = "block";
  };

  // Autofill email from signup
  const savedEmail = localStorage.getItem("verifyEmail");
  if (savedEmail) emailInput.value = savedEmail;

  // Verify form submit
  verifyForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const code = codeInput.value.trim();

    if (!email || !code) {
      showMessage("Please fill in both email and verification code.");
      return;
    }

    showMessage("Verifying your email...", "success");

    try {
      const res = await fetch("https://remj82.onrender.com/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();
      console.log("Verify API response:", data);

      if (!res.ok) {
        showMessage(data.message || "Verification failed. Try again.");
        return;
      }

      showMessage("✅ Email verified successfully! Redirecting to login...", "success");
      localStorage.removeItem("verifyEmail");

      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } catch (err) {
      console.error("Verify error:", err);
      showMessage("Network error. Please try again.");
    }
  });

  // Resend verification code
  resendLink.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) {
      showMessage("Enter your email to resend verification code.");
      return;
    }

    showMessage("Resending code...", "success");

    try {
      const res = await fetch("https://remj82.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log("Resend response:", data);

      if (!res.ok) {
        showMessage(data.message || "Failed to resend code.");
        return;
      }

      showMessage("📩 Verification code resent! Check your email.", "success");
    } catch (err) {
      console.error("Resend error:", err);
      showMessage("Network error while resending code.");
    }
  });

  // Back to signup
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  }
});
