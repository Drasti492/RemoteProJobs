document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotPasswordMessage = document.getElementById('forgotPasswordMessage');
    const backHomeBtn = document.querySelector('.back-home-btn');

    // Display message
    function showMessage(text, type = 'error') {
        forgotPasswordMessage.textContent = text;
        forgotPasswordMessage.className = `message ${type}`;
        forgotPasswordMessage.style.display = 'block';
    }

    // Back home
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', () => {
            window.location.href = '../index.html'; // Matches login.js
        });
    }

    // Forgot password form submit
    forgotPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(forgotPasswordForm);
        const email = formData.get('email').trim();

        if (!email) {
            showMessage('Please enter your email address.');
            return;
        }

        showMessage('Sending reset code...', 'success');

        try {
            const response = await fetch('https://remj82.onrender.com/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            console.log('Forgot password API response:', data);

            if (response.ok) {
                localStorage.setItem('resetEmail', email);
                showMessage(data.message || 'If this email is registered, a reset code has been sent.', 'success');
                setTimeout(() => {
                    window.location.href = 'reset-password.html';
                }, 1500); // Matches login.js redirect delay
            } else {
                showMessage(data.message || 'An error occurred. Please try again.');
            }
        } catch (err) {
            console.error('Forgot password error:', err.message);
            showMessage('Network error. Please try again.');
        }
    });
});