
const hamburger = document.getElementById('hamburger-menu');
const nav_menu = document.getElementById('home-navigation');



hamburger.addEventListener('click', mobileMenu); 


function mobileMenu(){
    hamburger.classList.toggle('active');
    nav_menu.classList.toggle('active');
};













