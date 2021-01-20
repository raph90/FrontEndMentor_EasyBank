const hamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('#header');
const overlay = document.querySelector('.overlay')
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
hamburger.addEventListener('click', function () {
    if (header.classList.contains('open')) {
        header.classList.remove('open')
        overlay.classList.remove('fade-in')
        body.classList.remove('noscroll');
        overlay.classList.add('fade-out')
        setTimeout(function () {
            overlay.style.display = "none"
        }, 300)
        setTimeout(function () {
            headerMenu.style.display = "none"
        }, 100)
    } else {
        header.classList.add('open')
        body.classList.add('noscroll');
        overlay.style.display = "block"
        headerMenu.style.display = "block"
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
    }
})