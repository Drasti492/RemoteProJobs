document.addEventListener("DOMContentLoaded", () => {
    // Simulated user data (replace with backend fetch in production)
    const userData = {
        username: localStorage.getItem("userEmail") || "user@example.com",
        balance: 0, // Set to $0 as requested
        completedTasks: [
            { id: 1, title: "Design Simple Logo", date: "2025-10-20", earnings: 10 },
            { id: 2, title: "Answer Math Questions", date: "2025-10-18", earnings: 5 },
            { id: 3, title: "Write Product Review", date: "2025-10-15", earnings: 7 },
            { id: 4, title: "Reply to YouTube Comments", date: "2025-10-12", earnings: 3 },
            { id: 5, title: "Test Mobile App", date: "2025-10-10", earnings: 8 }
        ]
    };

    // Populate completed tasks
    const tasksList = document.getElementById("tasks-list");
    if (tasksList) {
        userData.completedTasks.forEach(task => {
            const taskItem = document.createElement("div");
            taskItem.className = "task-item";
            taskItem.innerHTML = `
                <span>${task.title}</span>
                <span>${task.date}</span>
                <span>$${task.earnings.toFixed(2)}</span>
            `;
            tasksList.appendChild(taskItem);
        });
    }

    // Update balance
    const balanceElement = document.getElementById("profile-balance");
    if (balanceElement) {
        balanceElement.textContent = `$${userData.balance.toFixed(2)}`;
    }

    // Withdrawal form submission
    const withdrawalForm = document.getElementById("withdrawal-form");
    const withdrawalMessage = document.getElementById("withdrawal-message");

    if (withdrawalForm && withdrawalMessage) {
        withdrawalForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Check for $0 balance first
            if (userData.balance === 0) {
                showMessage("Your account balance is $0. Complete tasks to earn.", "error");
                return;
            }

            // Other validations
            const amount = parseFloat(document.getElementById("withdrawal-amount").value);
            const mobileNumber = document.getElementById("mobile-number").value.trim();
            const paymentMethod = document.getElementById("payment-method").value;

            if (!amount || amount <= 0) {
                showMessage("Amount must be greater than $0.", "error");
                return;
            }
            if (amount < 4) {
                showMessage(`Amount must be at least $4. Your balance is $${userData.balance.toFixed(2)}.`, "error");
                return;
            }
            if (amount > userData.balance) {
                showMessage(`Insufficient balance to withdraw $${amount.toFixed(2)}. Your balance is $${userData.balance.toFixed(2)}. Earn at least $${(amount - userData.balance).toFixed(2)} more.`, "error");
                return;
            }
            if (!mobileNumber || !/^[a-zA-Z0-9@._-]+$/.test(mobileNumber)) {
                showMessage("Please enter a valid mobile payment ID (e.g., PayPal email or Venmo ID).", "error");
                return;
            }
            if (!paymentMethod) {
                showMessage("Please select a payment method.", "error");
                return;
            }

            // Calculate tax (0.38%)
            const tax = amount * 0.0038;
            const netAmount = amount - tax;

            // Simulate withdrawal (replace with backend API call)
            console.log(`Withdrawal requested: $${amount.toFixed(2)}, Tax: $${tax.toFixed(2)}, Net: $${netAmount.toFixed(2)}, Method: ${paymentMethod}, ID: ${mobileNumber}`);

            // Update balance
            userData.balance = Math.max(0, userData.balance - amount); // Ensure balance never goes negative
            if (balanceElement) {
                balanceElement.textContent = `$${userData.balance.toFixed(2)}`;
            }

            showMessage(`Withdrawal of $${netAmount.toFixed(2)} (after $${tax.toFixed(2)} tax) sent to ${paymentMethod} (${mobileNumber}).`, "success");
            withdrawalForm.reset();
        });
    }

    // Show message
    function showMessage(text, type) {
        withdrawalMessage.textContent = text;
        withdrawalMessage.className = `message ${type}`;
        withdrawalMessage.style.display = "block";
        setTimeout(() => {
            withdrawalMessage.style.display = "none";
        }, 3000);
    }
});


  // Withdraw button handler
  withdrawBtn.addEventListener('click', async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        showMessage('Please log in to withdraw.', 'error');
        return;
      }

      const response = await fetch('https://remj82.onrender.com/api/orders/withdraw', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const result = await response.json();
        console.error('Withdraw API error:', result); // Debug withdraw error
        if (result.message.includes('insufficient')) {
          showMessage('Insufficient funds in your account. Please ensure your balance is at least 500 KSH to withdraw.', 'error');
        } else {
          showMessage(result.message || 'Withdrawal failed. Please try again.', 'error');
        }
        return;
      }

      const result = await response.json();
      showMessage(result.message || 'Withdrawal successful!', 'success');
      balanceElement.textContent = `${result.balance || 0} KSH`;
    } catch (error) {
      console.error('Withdraw error:', error.message);
      showMessage('You Have Insufficient Balance In Your Account.', 'error');
    }
  });