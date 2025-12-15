document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("verifyForm");
  const emailInput = document.getElementById("verifyEmail");
  const codeInput = document.getElementById("code");
  const message = document.getElementById("verifyMessage");
  const resendLink = document.getElementById("resendLink");

  const show = (text, type = "error") => {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = "block";
  };

  // Autofill email from signup
  const savedEmail = localStorage.getItem("verifyEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    emailInput.readOnly = true; // ⭐ professional UX
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const code = codeInput.value.trim();

    if (!email || !code) {
      show("Please enter the verification code.");
      return;
    }

    try {
      const res = await fetch(
        "https://remj82.onrender.com/api/auth/verify-code",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, code })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        show(data.message || "Verification failed.");
        return;
      }

      show("✅ Email verified successfully! Redirecting...", "success");
      localStorage.removeItem("verifyEmail");

      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } catch {
      show("Network error. Try again.");
    }
  });

  resendLink.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
      show("Email missing.");
      return;
    }

    try {
      const res = await fetch(
        "https://remj82.onrender.com/api/auth/resend-verification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        show(data.message || "Failed to resend code.");
        return;
      }

      show("📩 Verification code resent!", "success");
    } catch {
      show("Network error.");
    }
  });
});
