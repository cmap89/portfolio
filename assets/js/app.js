// scroll to top functionality

const scrollToTop = document.querySelector("#scroll-up");

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Nav hamburger selections 
const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const burgIcon = document.querySelector('.bars');

burger.addEventListener("click", () => {
    ul.classList.toggle('show');
    burgIcon.classList.toggle('ex');
    if (burgIcon.classList.contains('ex')) {
        burgIcon.name = 'close-outline';
    }
    else {
        burgIcon.name = 'menu-outline';
    };
});

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        ul.classList.remove('show');
        burgIcon.classList.toggle('ex');
        burgIcon.name = 'menu-outline';
    });
});