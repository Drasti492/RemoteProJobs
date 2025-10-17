// scripts/verify.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("verifyForm");
  const msgEl = document.getElementById("verifyMessage");
  const resendLink = document.getElementById("resendLink");
  const backHomeBtn = document.querySelector(".back-home-btn");
  const apiBase = "https://remj82.onrender.com/api/auth";

  // Pre-fill email from localStorage if available
  const savedEmail = localStorage.getItem("verifyEmail");
  if (savedEmail) {
    const emailInput = document.getElementById("verifyEmail");
    if (emailInput) emailInput.value = savedEmail;
  }

  // Helper: Show feedback message
  function showMessage(text, type = "error") {
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.className = `message ${type}`;
    msgEl.style.display = text ? "block" : "none";
  }

  // ✅ Handle form submission (verify code)
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      showMessage("");

      const email = document.getElementById("verifyEmail").value.trim();
      const code = document.getElementById("code").value.trim();
      const btn = document.getElementById("verifyBtn");

      if (!email || !code) {
        showMessage("Please enter your email and the 6-digit code.");
        return;
      }

      btn.disabled = true;
      btn.textContent = "Verifying...";

      try {
        const res = await fetch(`${apiBase}/verify-code`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, code }),
        });

        const data = await res.json();
        console.log("✅ Verify API response:", data);

        if (res.ok) {
          showMessage("Email verified successfully! Redirecting...", "success");
          localStorage.setItem("userEmail", email);
          localStorage.removeItem("verifyEmail");

          setTimeout(() => {
            window.location.href = "login.html";
          }, 1200);
        } else {
          showMessage(data.message || "Verification failed. Please try again.");
        }
      } catch (err) {
        console.error("❌ Verification error:", err);
        showMessage("Network error. Please try again.");
      } finally {
        btn.disabled = false;
        btn.textContent = "Verify";
      }
    });
  }

  // ✅ Handle resend verification code
  if (resendLink) {
    resendLink.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = document.getElementById("verifyEmail").value.trim();

      if (!email) {
        showMessage("Enter your email before resending the code.");
        return;
      }

      resendLink.textContent = "Sending...";

      try {
        const res = await fetch(`${apiBase}/resend-code`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();
        console.log("✅ Resend API response:", data);

        if (res.ok) {
          showMessage("Verification code resent to your email.", "success");
        } else {
          showMessage(data.message || "Failed to resend code.");
        }
      } catch (err) {
        console.error("❌ Resend error:", err);
        showMessage("Network error while resending the code.");
      } finally {
        resendLink.textContent = "Resend";
      }
    });
  }

  // ✅ Handle back to home
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }
});
