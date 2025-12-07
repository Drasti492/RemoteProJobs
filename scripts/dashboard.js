function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchModal(closeId, openId) {
    closeModal(closeId);
    openModal(openId);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
 // Navigation toggle for all pages
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }