document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = "https://remj82.onrender.com"; 
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in first");
    window.location.href = "/login.html";
    return;
  }

  const balanceSpan = document.getElementById("balance");
  const withdrawForm = document.getElementById("withdrawForm");
  const statusMsg = document.getElementById("statusMessage");

  // Load wallet balance
  async function loadBalance() {
    try {
      const res = await fetch(`${BASE_URL}/api/wallet/balance`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await res.json();
      if (data.success) {
        balanceSpan.textContent = `$${data.balance.toFixed(2)}`;
      }
    } catch (err) {
      console.error("Balance error:", err);
    }
  }

  // Submit Withdraw
  withdrawForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("withdrawAmount").value);

    if (!amount || amount <= 0) {
      statusMsg.textContent = "Invalid amount.";
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/wallet/withdraw`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount })
      });

      const data = await res.json();

      if (data.success) {
        statusMsg.textContent = "Withdrawal successful!";
        loadBalance();
      } else {
        statusMsg.textContent = data.message;
      }
    } catch (err) {
      statusMsg.textContent = "Server error. Try again.";
      console.error(err);
    }
  });

  loadBalance();
});
