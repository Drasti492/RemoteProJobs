document.addEventListener("DOMContentLoaded", () => {
  const verifyForm = document.getElementById("verifyForm");
  const emailInput = document.getElementById("email");
  const codeInput = document.getElementById("code");
  const verifyMessage = document.getElementById("verifyMessage");
  const resendBtn = document.getElementById("resendBtn");
  const backBtn = document.querySelector(".back-btn");

  // === Helper for showing messages ===
  const showMessage = (text, type = "error") => {
    verifyMessage.textContent = text;
    verifyMessage.className = `message ${type}`;
    verifyMessage.style.display = "block";
  };

  // === Autofill email from signup ===
  const savedEmail = localStorage.getItem("verifyEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
  }

  // === Submit verification form ===
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

  // === Resend code ===
  if (resendBtn) {
    resendBtn.addEventListener("click", async () => {
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
  }

  // === Back to signup ===
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  }
});
