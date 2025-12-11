// scripts/pricing.js — FINAL & ERROR-FREE
document.addEventListener("DOMContentLoaded", async () => {
  const PRICE_IN_USD = 10.40;

  const priceEl    = document.getElementById("priceAmount");
  const flagEl     = document.getElementById("currencyFlag");
  const overlay    = document.getElementById("currencyOverlay");
  const main       = document.getElementById("mainContent");
  const select     = document.getElementById("currencySelect");
  const continueBtn = document.getElementById("continueBtn");
  const changeBtn  = document.getElementById("changeCurrencyBtn");
  const contactBtn = document.getElementById("contactBtn");

  const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";
  let rates = {};

  // Default to USD
  let currentCurrency = "USD";

  // Show overlay if no currency saved
  if (!localStorage.getItem("userCurrency")) {
    overlay.style.display = "flex";
  } else {
    currentCurrency = localStorage.getItem("userCurrency");
    main.style.display = "block";
    await loadAndUpdatePrice(currentCurrency);
  }

  // Fetch rates and update price
  async function loadAndUpdatePrice(currency) {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      rates = data.usd;

      const rate = rates[currency.toLowerCase()] || 1;
      const amount = (PRICE_IN_USD * rate).toFixed(2);

      priceEl.textContent = formatCurrency(amount, currency);
      flagEl.textContent = getFlag(currency);
    } catch (err) {
      priceEl.textContent = "$10.40";
      flagEl.textContent = "USD";
    }
  }

  // Continue button
  continueBtn.addEventListener("click", () => {
    currentCurrency = select.value;
    localStorage.setItem("userCurrency", currentCurrency);
    overlay.style.display = "none";
    main.style.display = "block";
    loadAndUpdatePrice(currentCurrency);
  });

  // Change currency button
  changeBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  // Contact button
  contactBtn.addEventListener("click", () => {
    window.location.href = "tel:+19155032586";
  });

  // Helpers
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