// Scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on smaller screens like phones, tablets, etc
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('nav ul');

    toggleBtn.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});