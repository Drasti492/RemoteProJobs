// scripts/withraw.js — PROFESSIONAL & FAST
document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const mainContent   = document.getElementById("mainContent");
  const balanceEl     = document.getElementById("profile-balance");
  const amountInput   = document.getElementById("withdrawal-amount");
  const notification  = document.getElementById("withdraw-notification");

  // Hide everything until we know the user status
  mainContent.style.display = "none";

  const status = await getUserStatus();

  // Update UI instantly (no flash)
  updatePageForUser(status);
  balanceEl.textContent = `$${status.balance.toFixed(2)}`;

  // Show page
  mainContent.style.display = "block";

  // === CUSTOM ERROR NOTIFICATIONS (NO BROWSER POPUPS) ===
  function showError(message, type = "blue") {
    notification.textContent = message;
    notification.className = "notification-slide"; // reset
    notification.classList.add("show", type);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      notification.classList.remove("show");
    }, 5000);
  }

  // Block native validation messages
  document.getElementById("withdrawal-form").setAttribute("novalidate", true);

  // Form submit
  document.getElementById("withdrawal-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const amount = parseFloat(amountInput.value);

    // Reset notification
    notification.classList.remove("show", "red", "blue");

    // Minimum amount check
    if (!amount || amount < 12) {
      showError("Minimum withdrawal amount is $12", "blue");
      amountInput.focus();
      return;
    }

    // Balance check
    if (amount > status.balance) {
      showError("Insufficient balance", "red");
      amountInput.focus();
      return;
    }

    // Success flow (send to backend later)
    showError("Withdrawal request submitted successfully!", "success");
    amountInput.value = "";
  });

  // Optional: real-time feedback when typing
  amountInput.addEventListener("input", () => {
    notification.classList.remove("show");
  });
});