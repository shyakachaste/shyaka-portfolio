document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.navbar-menu');
    const openIcon = document.querySelector('.navbar-toggle .open-icon');
    const closeIcon = document.querySelector('.navbar-toggle .close-icon');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        openIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
    });
});


// Gallery scripts removed