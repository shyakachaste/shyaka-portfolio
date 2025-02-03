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


document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const fullscreenOverlay = document.getElementById("fullscreen-overlay");
    const fullscreenImg = document.getElementById("fullscreen-img");
    const closeBtn = document.querySelector(".fullscreen-overlay .close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            fullscreenImg.src = item.src;
            fullscreenOverlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        fullscreenOverlay.style.display = "none";
    });

    fullscreenOverlay.addEventListener("click", (e) => {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.style.display = "none";
        }
    });
});