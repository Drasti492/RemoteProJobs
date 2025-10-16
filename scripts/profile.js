// scripts/profile.js
document.addEventListener('DOMContentLoaded', async () => {
  const usernameElement = document.getElementById('profile-username');
  const phoneElement = document.getElementById('profile-phone');
  const emailElement = document.getElementById('profile-email');
  const balanceElement = document.getElementById('profile-balance');
  const messageElement = document.getElementById('profileMessage');
  const withdrawBtn = document.getElementById('withdrawBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const backBtn = document.querySelector('.back-btn');

  function showMessage(text, type) {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
    messageElement.style.display = 'block';
    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 3000);
  }

  // Fetch user profile data
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      showMessage('Please log in to view your profile.', 'error');
      console.error('No token found in localStorage');
      setTimeout(() => (window.location.href = '../index.html'), 2000);
      return;
    }

    const response = await fetch('https://remj82.onrender.com/api/auth/getUser', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error response:', errorData);
      throw new Error(errorData.message || 'Failed to fetch profile data');
    }

    const data = await response.json();
    console.log('API response:', data);

    if (!data.success || !data.user) {
      throw new Error('Invalid response format');
    }

    const user = data.user;
    usernameElement.textContent = user.name || 'Unknown';
    phoneElement.textContent = user.phone || 'Not provided';
    emailElement.textContent = user.email || 'Not provided';
    balanceElement.textContent = `${user.balance || 0} KSH`;
  } catch (error) {
    console.error('Error fetching profile:', error.message);
    showMessage(error.message || 'Unable to load profile data. Please try again.', 'error');
    usernameElement.textContent = 'Unknown';
    phoneElement.textContent = 'Not provided';
    emailElement.textContent = 'Not provided';
    balanceElement.textContent = '0 KSH';
  }

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
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const result = await response.json();
      if (!response.ok) {
        if (result.message.includes('insufficient')) {
          showMessage('Insufficient funds in your account. Please ensure your balance is at least 500 KSH to withdraw.', 'error');
        } else {
          showMessage(result.message || 'Withdrawal failed. Please try again.', 'error');
        }
        return;
      }

      showMessage(result.message || 'Withdrawal successful!', 'success');
      balanceElement.textContent = `${result.balance || 0} KSH`;
    } catch (error) {
      console.error('Withdraw error:', error.message);
      showMessage('Withdrawal failed. Please try again.', 'error');
    }
  });

  // Logout button handler
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    window.location.href = '../index.html';
  });

  // Back button handler
  backBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
  });
});