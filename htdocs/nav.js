//var hamburger 
$(document).ready(function(){


var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");
//var menu_trigger = document.querySelector(".menu_trigger");
hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
    });
})

function close_menu(){
    $('.hamburger').toggleClass('toggle')
    $('.nav-links').toggleClass('open')
    $('.fade').toggleClass('fade')
};