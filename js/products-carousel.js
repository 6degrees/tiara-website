// Products Carousel Navigation
(function () {
  'use strict';

  function initProductsCarousel() {
    const carousel = document.getElementById('products-carousel');
    const leftArrow = document.querySelector('.products-arrow-left');
    const rightArrow = document.querySelector('.products-arrow-right');

    if (!carousel || !leftArrow || !rightArrow) {
      return;
    }

    function updateArrowStates() {
      // Works in both LTR and RTL: in RTL browsers report scrollLeft in [-max, 0]
      const max = carousel.scrollWidth - carousel.clientWidth;
      const isRTL = getComputedStyle(carousel).direction === 'rtl';
      const minEdge = isRTL ? -max : 0;
      const maxEdge = isRTL ? 0 : max;

      // Arrows move the viewport visually left/right regardless of direction
      leftArrow.disabled = carousel.scrollLeft <= minEdge + 10;
      rightArrow.disabled = carousel.scrollLeft >= maxEdge - 10;
    }

    // Scroll function (visual direction)
    function scrollProducts(direction) {
      const scrollAmount = carousel.clientWidth * 0.8; // Scroll 80% of visible width
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }

    // Event listeners
    leftArrow.addEventListener('click', function () {
      scrollProducts('left');
    });

    rightArrow.addEventListener('click', function () {
      scrollProducts('right');
    });

    // Update arrow states on scroll
    carousel.addEventListener('scroll', updateArrowStates);

    // Update arrow states on resize
    window.addEventListener('resize', function () {
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
