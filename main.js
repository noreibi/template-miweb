document.addEventListener("DOMContentLoaded", function (event) {
    //do work    console.log("ready!");
    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('show');
    })
    ScrollReveal().reveal('.showcase', { delay: 500 });
    ScrollReveal().reveal('.noticias-card', { delay: 800 });
    ScrollReveal().reveal('.banner-cards', { delay: 800 });
    ScrollReveal().reveal('.banner-cards-two', { delay: 800 });

});

