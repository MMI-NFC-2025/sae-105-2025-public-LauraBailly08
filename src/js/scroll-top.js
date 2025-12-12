// BOUTON RETOUR EN HAUT

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.querySelector('.cta__scroll-top');
    
    if (!scrollTopBtn) return;

    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll smooth vers le haut au clic
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
