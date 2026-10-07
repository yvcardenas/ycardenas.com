const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
});

function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
}

navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
    }
});
