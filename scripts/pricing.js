document.addEventListener("DOMContentLoaded", async () => {
  const PRICE_IN_USD = 10.4;

  const priceEl = document.getElementById("priceAmount");
  const flagEl = document.getElementById("currencyFlag");
  const overlay = document.getElementById("currencyOverlay");
  const mainContent = document.getElementById("mainContent");
  const select = document.getElementById("currencySelect");
  const continueBtn = document.getElementById("continueBtn");
  const changeBtn = document.getElementById("changeCurrencyBtn");
  const payBtn = document.getElementById("payBtn");

  const API_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";

  // Force currency selection
  overlay.style.display = "flex";
  mainContent.style.display = "none";

  // Load saved currency
  const savedCurrency = localStorage.getItem("userCurrency");
  if (savedCurrency) select.value = savedCurrency;

  // Hide dynamic blocks first
  document
    .querySelectorAll(".if-verified, .if-not-verified")
    .forEach(el => (el.style.display = "none"));

  const status = await getUserStatus();

  if (status.verified) {
    document.querySelectorAll(".if-verified").forEach(el => (el.style.display = "block"));
  } else {
    document.querySelectorAll(".if-not-verified").forEach(el => (el.style.display = "block"));
  }

  // Load currency rates
  async function loadRates(currency) {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const rate = data.usd[currency.toLowerCase()] || 1;
      const amount = (PRICE_IN_USD * rate).toFixed(2);

      priceEl.textContent = formatCurrency(amount, currency);
      flagEl.textContent = currency;
    } catch {
      priceEl.textContent = "$10.40";
      flagEl.textContent = "USD";
    }
  }

  continueBtn.onclick = () => {
    const currency = select.value;
    localStorage.setItem("userCurrency", currency);
    overlay.style.display = "none";
    mainContent.style.display = "block";
    loadRates(currency);
  };

  changeBtn.onclick = () => {
    overlay.style.display = "flex";
  };

  // 🔥 STK PUSH BUTTON (REAL PAYMENT)
  payBtn.onclick = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    const phone = prompt("Enter your M-Pesa phone number (07XXXXXXXX)");
    if (!phone) return;

    payBtn.disabled = true;
    payBtn.textContent = "Sending STK Prompt...";

    try {
      const res = await fetch(
        "https://remj82.onrender.com/api/payments/stk-push",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ phone })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Payment failed");
      } else {
        alert("📲 STK prompt sent. Complete payment on your phone.");
      }
    } catch (err) {
      alert("Network error. Try again.");
    } finally {
      payBtn.disabled = false;
      payBtn.textContent = "Pay & Get Verified";
    }
  };

  function formatCurrency(amount, currency) {
    const symbols = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      NGN: "₦",
      INR: "₹",
      GHS: "GH₵",
      KES: "KSh",
      ZAR: "R",
      CAD: "$",
      AUD: "A$"
    };
    return `${symbols[currency] || "$"}${Number(amount).toLocaleString()}`;
  }
});
