/**
 * INTERACTION : Bouton retour en haut de page
 * Description : Bouton flottant qui apparaît après 300px de scroll et permet de remonter en haut avec animation smooth
 * URL visible : index.html
 * Localisation : Coin inférieur droit (apparaît automatiquement au scroll)
 */

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
