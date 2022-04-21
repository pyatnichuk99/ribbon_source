"use strict"

document.addEventListener("DOMContentLoaded", ()=> {
    AOS.init();
    let buttonMenu = document.querySelector('.header-row__menu');
    let menuNavigation = document.querySelector('.header-row__navigation')
    let menuSocial = document.querySelector('.header-row__social')

    buttonMenu.addEventListener('click',()=>{
        buttonMenu.classList.toggle('active');
        menuNavigation.classList.toggle('active_menu');
        menuSocial.classList.toggle('active_menu');
    })
});