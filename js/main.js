var menu;
window.onload = main;

function main() {
    menu = document.querySelector('.menu');

    var burgerButton = document.querySelector('.burger-button');
    burgerButton.addEventListener('click', hideAndShow);
    
    var links = document.querySelectorAll('.link');
    console.log(links);
    for (const link of links) {
        link.addEventListener('click', hideAndShow);
    }
}

function hideAndShow() {
    menu.classList.toggle('is-active');
}