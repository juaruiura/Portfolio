var menu;
var burgerButton;
window.onload = main;

function main() {
    menu = document.querySelector('.menu');
    burgerButton = document.querySelector('.burger-button');
    burgerButton.addEventListener('click', hideAndShow);
}

function hideAndShow() {
    menu.classList.toggle('is-active');
}