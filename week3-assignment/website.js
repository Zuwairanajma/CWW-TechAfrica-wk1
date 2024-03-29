document.addEventListener('DOMContentLoaded', function () {
    const serviceContainer = document.querySelector('.service-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function adjustCarouselButtons() {
        if (serviceContainer) {
            // Get the height of the service container
            const containerHeight = serviceContainer.offsetHeight;

            // Adjust the position of the buttons dynamically based on the container's height
            prevBtn.style.top = `${containerHeight / 2}px`;
            nextBtn.style.top = `${containerHeight / 2}px`;
        }
    }

    // Call the function on initial load
    adjustCarouselButtons();

    // Adjust the buttons on window resize
    window.addEventListener('resize', adjustCarouselButtons);

    let scrollAmount = 0;

    prevBtn.addEventListener('click', () => {
        scrollAmount -= 200; 
        serviceContainer.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        scrollAmount += 200; 
        serviceContainer.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
