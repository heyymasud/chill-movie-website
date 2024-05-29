document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.movie-list');
    const prevButtons = document.querySelectorAll('.carousel-prev');
    const nextButtons = document.querySelectorAll('.carousel-next');

    const loggedIn = localStorage.getItem('loggedIn');
    const logoutButton = document.getElementById('logout');

    function updateCarousel(carousel, currentIndex) {
        carousel.style.transform = `translateX(-${currentIndex * 26}%)`;
    }

    function initializeCarousel(carousel, prevButton, nextButton) {
        let currentIndex = 0;

        prevButton.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel(carousel, currentIndex);
            }
        });

        nextButton.addEventListener('click', function () {
            if (currentIndex < 4) {
                currentIndex++;
                updateCarousel(carousel, currentIndex);
            }
        });

        updateCarousel(carousel, currentIndex);
    }

    function logout() {
        if (localStorage.getItem('loggedIn')) {
            localStorage.removeItem('loggedIn');
            alert('Anda telah keluar');
            window.location.href = 'login.html';
        } else {
            alert('Anda belum login');
        }
    }

    if (loggedIn !== 'true') {
        window.location.href = 'login.html';
    }
    
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    if (carousels) {
        carousels.forEach((carousel, index) => {
            initializeCarousel(carousel, prevButtons[index], nextButtons[index]);
        });
    }


    
});