document.addEventListener("DOMContentLoaded", async () => {
  // DISPLAY ONLY (KES 1340 is charged in backend)
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

  // ===============================
  // UI HELPERS
  // ===============================
  function showToast(message, success = true) {
    let toast = document.getElementById("paymentToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "paymentToast";
      toast.style.position = "fixed";
      toast.style.bottom = "30px";
      toast.style.right = "30px";
      toast.style.padding = "16px 22px";
      toast.style.borderRadius = "12px";
      toast.style.fontSize = "14px";
      toast.style.color = "#fff";
      toast.style.zIndex = "9999";
      toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.background = success ? "#16a34a" : "#dc2626";
    toast.style.display = "block";

    setTimeout(() => {
      toast.style.display = "none";
    }, 5000);
  }

  function showPhoneModal(onSubmit) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,.5)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "10000";

    modal.innerHTML = `
      <div style="background:#fff;padding:24px;border-radius:14px;width:320px">
        <h3 style="margin-bottom:10px">M-Pesa Payment</h3>
        <p style="font-size:13px;margin-bottom:12px">
          Enter your M-Pesa phone number to receive the STK prompt.
        </p>
        <input
          id="mpesaPhoneInput"
          type="tel"
          placeholder="07XXXXXXXX"
          style="width:100%;padding:10px;border-radius:8px;border:1px solid #ddd"
        />
        <button id="confirmPayBtn"
          style="margin-top:14px;width:100%;padding:10px;border-radius:8px;background:#16a34a;color:#fff;border:none">
          Send STK Prompt
        </button>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("confirmPayBtn").onclick = () => {
      const phone = document.getElementById("mpesaPhoneInput").value.trim();
      if (!phone) return;
      document.body.removeChild(modal);
      onSubmit(phone);
    };
  }

  // ===============================
  // INITIAL STATE
  // ===============================
  overlay.style.display = "flex";
  mainContent.style.display = "none";

  const savedCurrency = localStorage.getItem("userCurrency");
  if (savedCurrency) select.value = savedCurrency;

  document
    .querySelectorAll(".if-verified, .if-not-verified")
    .forEach(el => (el.style.display = "none"));

  const status = await getUserStatus();

  if (status.verified) {
    document.querySelectorAll(".if-verified").forEach(el => (el.style.display = "block"));
  } else {
    document.querySelectorAll(".if-not-verified").forEach(el => (el.style.display = "block"));
  }

  // ===============================
  // CURRENCY CONVERSION (DISPLAY)
  // ===============================
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

  // ===============================
  // STK PUSH PAYMENT
  // ===============================
  payBtn.onclick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      showToast("Please login first", false);
      return;
    }

    showPhoneModal(async phone => {
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
          showToast(data.message || "Payment failed", false);
        } else {
          showToast("📲 STK prompt sent. Complete payment on your phone.");
        }
      } catch {
        showToast("Network error. Try again.", false);
      } finally {
        payBtn.disabled = false;
        payBtn.textContent = "Proceed to Pay";
      }
    });
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
