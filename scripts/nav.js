document.addEventListener("DOMContentLoaded", () => {
    // Navigation toggle for all pages
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // Contact form submission for contact.html
    const contactForm = document.getElementById("contact-form");
    const messageEl = document.getElementById("contact-message");

    if (contactForm && messageEl) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            messageEl.textContent = "Thank you! Your message has been sent..";
            messageEl.className = "message success";
            messageEl.style.display = "block";
            setTimeout(() => {
                messageEl.style.display = "none";
            }, 3000);
            contactForm.reset();
        });
    }
});
 // Logout button handler
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    window.location.href = '../index.html';
  });