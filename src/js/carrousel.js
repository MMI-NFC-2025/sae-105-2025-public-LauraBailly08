// Carrousel qui se trouve dans ma page artiste
document.addEventListener('DOMContentLoaded', function() {
  const carrousels = document.querySelectorAll('.carrousel');

  carrousels.forEach(carrousel => {
    const container = carrousel.querySelector('.carrousel__container');
    const prevBtn = carrousel.querySelector('.carrousel__btn--prev');
    const nextBtn = carrousel.querySelector('.carrousel__btn--next');
    const images = carrousel.querySelectorAll('.carrousel__image');

    if (!container || !prevBtn || !nextBtn || images.length === 0) return;

    const imageWidth = images[0].offsetWidth + 16; // 16px gap

    prevBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -imageWidth,
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      container.scrollBy({
        left: imageWidth,
        behavior: 'smooth'
      });
    });

    // bouton visible 
    function updateButtonVisibility() {
      const isAtStart = container.scrollLeft <= 0;
      const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 10;

      prevBtn.style.opacity = isAtStart ? '0.4' : '1';
      prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
      nextBtn.style.opacity = isAtEnd ? '0.4' : '1';
      nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
    }

    container.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility();
  });
});
