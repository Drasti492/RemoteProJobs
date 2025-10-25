document.addEventListener('DOMContentLoaded', () => {
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const resetPasswordMessage = document.getElementById('resetPasswordMessage');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    const backHomeBtn = document.querySelectorAll('.back-home-btn');
    const emailInput = document.getElementById('email');

    // Display message
    function showMessage(text, type = 'error') {
        resetPasswordMessage.textContent = text;
        resetPasswordMessage.className = `message ${type}`;
        resetPasswordMessage.style.display = 'block';
    }

    // Pre-fill email from localStorage
    const storedEmail = localStorage.getItem('resetEmail');
    if (storedEmail) {
        emailInput.value = storedEmail;
    }

    // Toggle password visibility
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            const icon = button.querySelector('i');
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            icon.classList.toggle('fa-eye', isPassword);
            icon.classList.toggle('fa-eye-slash', !isPassword);
        });
    });

    // Back home
    backHomeBtn.forEach(button => {
        button.addEventListener('click', () => {
            localStorage.removeItem('resetEmail');
            window.location.href = '../index.html'; // Matches login.js
        });
    });

    // Reset password form submit
    resetPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(resetPasswordForm);
        const email = formData.get('email').trim();
        const resetCode = formData.get('resetCode').trim();
        const newPassword = formData.get('newPassword').trim();
        const confirmPassword = formData.get('confirmPassword').trim();

        if (!email || !resetCode || !newPassword || !confirmPassword) {
            showMessage('Please fill in all fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            showMessage('Passwords do not match.');
            return;
        }

        showMessage('Resetting password...', 'success');

        try {
            const response = await fetch('https://remj82.onrender.com/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, code: resetCode, newPassword })
            });
            const data = await response.json();
            console.log('Reset password API response:', data);

            if (response.ok) {
                showMessage(data.message || 'Password reset successful! Redirecting to login...', 'success');
                localStorage.removeItem('resetEmail');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500); // Matches login.js redirect delay
            } else {
                showMessage(data.message || 'Invalid reset code or email.');
            }
        } catch (err) {
            console.error('Reset password error:', err.message);
            showMessage('Network error. Please try again.');
        }
    });
});