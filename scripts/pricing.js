// scripts/pricing.js — FINAL, CLEAN & ZERO ERRORS
document.addEventListener("DOMContentLoaded", async () => {
  const PRICE_IN_USD = 10.40;
  const priceEl = document.getElementById("priceAmount");
  const flagEl = document.getElementById("currencyFlag");
  const overlay = document.getElementById("currencyOverlay");
  const mainContent = document.getElementById("mainContent");
  const select = document.getElementById("currencySelect");
  const continueBtn = document.getElementById("continueBtn");
  const changeBtn = document.getElementById("changeCurrencyBtn");
  const contactBtn = document.getElementById("contactBtn");

  const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";

  let rates = {};

  // Force currency prompt every time on page load (no auto-skip)
  overlay.style.display = "flex";
  mainContent.style.display = "none";

  // Load saved currency as default in select if exists
  const savedCurrency = localStorage.getItem("userCurrency");
  if (savedCurrency) {
    select.value = savedCurrency;
  }

  // Get user status (no flash - hide all dynamic parts first)
  document.querySelectorAll(".if-verified, .if-not-verified").forEach(el => el.style.display = "none");

  const status = await getUserStatus();

  if (status.verified) {
    document.querySelectorAll(".if-verified").forEach(el => el.style.display = "block");
  } else {
    document.querySelectorAll(".if-not-verified").forEach(el => el.style.display = "block");
  }

  // Load exchange rates
  async function loadRatesAndUpdate(currency) {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      rates = data.usd;

      const rate = rates[currency.toLowerCase()] || 1;
      const amount = (PRICE_IN_USD * rate).toFixed(2);

      priceEl.textContent = formatCurrency(amount, currency);
      flagEl.textContent  = getFlag(currency);
    } catch (err) {
      priceEl.textContent = "$10.40";
      flagEl.textContent = "USD";
    }
  }

  // Continue button
  continueBtn.addEventListener("click", () => {
    const currency = select.value;
    localStorage.setItem("userCurrency", currency);
    overlay.style.display = "none";
    mainContent.style.display = "block";
    loadRatesAndUpdate(currency);
  });

  // Change currency button
  changeBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  // Contact button → Dynamic message based on verification
  contactBtn.addEventListener("click", () => {
    const phone = "19155032586"; // Your number without +
    const currency = select.value || "USD";
    const amount = priceEl.textContent.trim() || "$10.40";

    let message;
    if (status.verified) {
      message = encodeURIComponent(
        `Hello Remote ProJobs support team, I need to add more connects for ${amount} (${currency}).`
      );
    } else {
      message = encodeURIComponent(
        "Hello Remote ProJobs Support! I need to purchase Connects Token / Get Verified. Please help me activate my account instantly."
      );
    }

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  });

  function getFlag(code) {
    const flags = { USD:"USD", NGN:"NGN", GHS:"GHS", KES:"KES", ZAR:"ZAR", INR:"INR", EUR:"EUR", GBP:"GBP", CAD:"CAD", AUD:"AUD" };
    return flags[code] || "USD";
  }

  function formatCurrency(amount, currency) {
    const symbols = {
      USD:"$", EUR:"€", GBP:"£", NGN:"₦", INR:"₹",
      GHS:"GH₵", KES:"KSh", ZAR:"R", CAD:"$", AUD:"A$"
    };
    const symbol = symbols[currency] || "$";
    return `${symbol}${parseFloat(amount).toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  }
});
document.getElementById("payBtn").onclick = async () => {
  await fetch("https://remj82.onrender.com/api/payments/stk-push", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({ phone: "07XXXXXXXX" })
  });
};
