document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("verifyForm");
  const msgEl = document.getElementById("verifyMessage");
  const resendLink = document.getElementById("resendLink");
  const backHomeBtn = document.querySelector(".back-home-btn"); // Added
  const apiBase = "https://remj82.onrender.com/api/auth";

  // Pre-fill email if stored
  const saved = localStorage.getItem("verifyEmail");
  if (saved) {
    document.getElementById("verifyEmail").value = saved;
  }

  function showMessage(text, type = "error") {
    msgEl.textContent = text;
    msgEl.className = `message ${type}`;
  }

  // Verify form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    showMessage("", "");

    const email = document.getElementById("verifyEmail").value.trim();
    const code = document.getElementById("code").value.trim();

    if (!email || !code) return showMessage("Enter email and the 6-digit code.");

    const btn = document.getElementById("verifyBtn");
    btn.disabled = true;
    btn.textContent = "Verifying...";

    try {
      const res = await fetch(`${apiBase}/verify-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (res.ok) {
        showMessage("Email verified! Redirecting...", "success");
        localStorage.setItem("userEmail", email);
        setTimeout(() => window.location.href = "work.html", 900); // Redirect to work.html
      } else {
        showMessage(data.message || "Verification failed.");
      }
    } catch (err) {
      console.error("Verify error:", err);
      showMessage("Network error. Try again.");
    } finally {
      btn.disabled = false;
      btn.textContent = "Verify";
    }
  });

  // Resend code
  resendLink.addEventListener("click", async (ev) => {
    ev.preventDefault();
    const email = document.getElementById("verifyEmail").value.trim();
    if (!email) return showMessage("Enter email to resend code.");

    try {
      resendLink.textContent = "Sending...";
      const res = await fetch(`${apiBase}/register`, { // Changed to /register
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // Minimal payload to trigger code resend
      });
      const data = await res.json();
      if (res.ok) {
        showMessage("Verification code resent.", "success");
      } else {
        showMessage(data.message || "Could not resend code.");
      }
    } catch (err) {
      console.error("Resend error:", err);
      showMessage("Network error while resending.");
    } finally {
      resendLink.textContent = "Resend";
    }
  });

  // Back to Home
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }
});