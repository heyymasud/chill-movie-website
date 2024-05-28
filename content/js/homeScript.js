document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.movie-list');
    const prevButtons = document.querySelectorAll('.carousel-prev');
    const nextButtons = document.querySelectorAll('.carousel-next');

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

    carousels.forEach((carousel, index) => {
        initializeCarousel(carousel, prevButtons[index], nextButtons[index]);
    });
});