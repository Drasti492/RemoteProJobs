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
  // TOAST
  // ===============================
  function showToast(message, success = true) {
    let toast = document.getElementById("paymentToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "paymentToast";
      toast.style.cssText = `
        position:fixed;
        bottom:30px;
        right:30px;
        padding:16px 22px;
        border-radius:14px;
        font-size:14px;
        color:#fff;
        z-index:9999;
        box-shadow:0 10px 30px rgba(0,0,0,.25);
      `;
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.background = success ? "#16a34a" : "#dc2626";
    toast.style.display = "block";

    setTimeout(() => {
      toast.style.display = "none";
    }, 5000);
  }

  // ===============================
  // PAYMENT MODAL
  // ===============================
  function showPhoneModal(onSubmit) {
    const modal = document.createElement("div");
    modal.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.55);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:10000;
    `;

    modal.innerHTML = `
      <div style="
        background:#fff;
        padding:26px;
        border-radius:18px;
        width:340px;
        box-shadow:0 20px 40px rgba(0,0,0,.25);
        font-family:system-ui;
        text-align:center;
      ">
        <h3 style="margin-bottom:8px">M-Pesa Payment</h3>
        <p style="font-size:13px;color:#555;margin-bottom:14px">
          Enter your M-Pesa number to receive the payment prompt.
        </p>

        <input id="mpesaPhoneInput"
          placeholder="07XXXXXXXX"
          style="
            width:100%;
            padding:12px;
            border-radius:10px;
            border:1px solid #ddd;
            font-size:14px;
          "
        />

        <button id="confirmPayBtn"
          style="
            margin-top:16px;
            width:100%;
            padding:12px;
            border-radius:12px;
            background:#16a34a;
            color:#fff;
            border:none;
            font-weight:600;
            cursor:pointer;
          ">
          Send STK Prompt
        </button>

        <div id="payStatus"
          style="margin-top:14px;font-size:13px;color:#555;display:none">
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const btn = modal.querySelector("#confirmPayBtn");
    const status = modal.querySelector("#payStatus");

    btn.onclick = async () => {
      const phone = modal.querySelector("#mpesaPhoneInput").value.trim();
      if (!phone) return;

      btn.disabled = true;
      btn.textContent = "Processing...";
      status.style.display = "block";
      status.textContent = "📲 Sending STK prompt…";

      await onSubmit(phone, status, () => {
        document.body.removeChild(modal);
      });
    };
  }

  // ===============================
  // INITIAL STATE
  // ===============================
  overlay.style.display = "flex";
  mainContent.style.display = "none";

  const savedCurrency = localStorage.getItem("userCurrency");
  if (savedCurrency) select.value = savedCurrency;

  // ===============================
  // CURRENCY DISPLAY ONLY
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
  // STK PUSH
  // ===============================
  payBtn.onclick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      showToast("Please login first", false);
      return;
    }

    showPhoneModal(async (phone, status, close) => {
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
          status.textContent =
            data?.message ||
            "Payment could not be initiated. Try again later.";
          return;
        }

        status.innerHTML =
          "⏳ Waiting for confirmation…<br/>Check your phone.";

        setTimeout(() => {
          showToast("STK prompt sent. Complete payment on your phone.");
          close();
        }, 4000);
      } catch {
        status.textContent = "Network error. Please try again.";
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
