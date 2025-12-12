/**
 * INTERACTION : Menu hamburger
 * Description : Ouverture/fermeture du menu de navigation mobile
 * URL visible : Toutes les pages du site (header)
 * Exemples : index.html, festival.html, programme.html, artistes.html, contact.html, etc.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner les éléments du menu
  const menuButton = document.querySelector('.btn__menu');
  const menu = document.querySelector('.header__menu');
  const menuLinks = document.querySelectorAll('.menu__link');

  // Vérifier que les éléments existent
  if (menuButton && menu) {
    menuButton.addEventListener('click', function() {
      // Basculer l'attribut hidden
      if (menu.hasAttribute('hidden')) {
        menu.removeAttribute('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.classList.add('menu-ouvert');
      } else {
        menu.setAttribute('hidden', '');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.classList.remove('menu-ouvert');
      }
    });

    // Fermer le menu quand on clique sur un lien
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menu.setAttribute('hidden', '');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.classList.remove('menu-ouvert');
      });
    });
  }
});