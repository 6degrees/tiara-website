// Products Carousel Navigation
(function() {
  'use strict';

  function initProductsCarousel() {
    const carousel = document.getElementById('products-carousel');
    const leftArrow = document.querySelector('.products-arrow-left');
    const rightArrow = document.querySelector('.products-arrow-right');

    if (!carousel || !leftArrow || !rightArrow) {
      return;
    }

    function updateArrowStates() {
      const scrollLeft = carousel.scrollLeft;
      const scrollWidth = carousel.scrollWidth;
      const clientWidth = carousel.clientWidth;

      // Disable left arrow if at the start
      if (scrollLeft <= 0) {
        leftArrow.disabled = true;
      } else {
        leftArrow.disabled = false;
      }

      // Disable right arrow if at the end
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        rightArrow.disabled = true;
      } else {
        rightArrow.disabled = false;
      }
    }

    // Scroll function
    function scrollProducts(direction) {
      const scrollAmount = carousel.clientWidth * 0.8; // Scroll 80% of visible width
      const currentScroll = carousel.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;

      carousel.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }

    // Event listeners
    leftArrow.addEventListener('click', function() {
      scrollProducts('left');
    });

    rightArrow.addEventListener('click', function() {
      scrollProducts('right');
    });

    // Update arrow states on scroll
    carousel.addEventListener('scroll', updateArrowStates);

    // Update arrow states on resize
    window.addEventListener('resize', function() {
      updateArrowStates();
    });

    // Initial state
    updateArrowStates();
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductsCarousel);
  } else {
    initProductsCarousel();
  }
})();

