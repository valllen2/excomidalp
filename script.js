const header = document.querySelector('.main-header');
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Efeito na Navbar ao rolar
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Menu Mobile
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animação simples do ícone
    const spans = menuIcon.querySelectorAll('span');
    if(navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        spans.forEach(s => s.style.transform = s.style.opacity = '');
    }
});

// Fecha menu ao clicar no link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const spans = menuIcon.querySelectorAll('span');
    spans.forEach(s => s.style.transform = s.style.opacity = '');
}));