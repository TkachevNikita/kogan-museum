const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.menu-close');
const bodies = document.querySelectorAll('body');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.add('burger-active');
});

burgerClose.addEventListener('click', () => {
    nav.classList.remove('burger-active');
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

for (let i = 1; i < bodies.length - 1; i++) {
    bodies[i].classList.add('hidden');
}