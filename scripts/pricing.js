// scripts/pricing.js
document.addEventListener("DOMContentLoaded", async () => {
  const PRICE_IN_USD = 10.40;
  const priceElement = document.getElementById("priceAmount");
  const flagElement = document.getElementById("currencyFlag");
  const modal = document.getElementById("currencyModal");
  const select = document.getElementById("currencySelect");
  const saveBtn = document.getElementById("saveCurrencyBtn");
  const changeBtn = document.getElementById("changeCurrencyBtn");

  // Free API — no key needed
  const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

  let rates = {};

  // Load saved currency or show modal
  const savedCurrency = localStorage.getItem("userCurrency") || "USD";
  if (!localStorage.getItem("userCurrency")) {
    modal.classList.add("show"); // First time → force show
  } else {
    await updatePrice(savedCurrency);
  }

  // Load rates on page load
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    rates = data.usd;
    updatePrice(savedCurrency);
  } catch (err) {
    priceElement.textContent = `$${PRICE_IN_USD.toFixed(2)}`;
    flagElement.textContent = "USD";
  }

  // Save & update
  saveBtn.addEventListener("click", () => {
    const currency = select.value;
    localStorage.setItem("userCurrency", currency);
    updatePrice(currency);
    modal.classList.remove("show");
  });

  changeBtn.addEventListener("click", () => {
    modal.classList.add("show");
    select.value = localStorage.getItem("userCurrency") || "USD";
  });

  async function updatePrice(currency) {
    if (!rates[currency.toLowerCase()]) {
      priceElement.textContent = `$${PRICE_IN_USD.toFixed(2)}`;
      flagElement.textContent = getFlag(currency);
      return;
    }

    const rate = rates[currency.toLowerCase()];
    const converted = (PRICE_IN_USD * rate).toFixed(2);

    priceElement.textContent = formatPrice(converted, currency);
    flagElement.textContent = getFlag(currency);
  }

  function getFlag(code) {
    const flags = {
      USD: "USD", EUR: "EUR", GBP: "GBP", NGN: "NGN",
      GHS: "GHS", KES: "KES", ZAR: "ZAR", INR: "INR",
      CAD: "CAD", AUD: "AUD"
    };
    return flags[code] || "USD";
  }

  function formatPrice(amount, currency) {
    if (currency === "NGN") return `₦${parseFloat(amount).toLocaleString()}`;
    if (currency === "INR") return `₹${parseFloat(amount).toLocaleString()}`;
    if (currency === "EUR") return `€${amount}`;
    if (currency === "GBP") return `£${amount}`;
    return `$${amount}`;
  }
});