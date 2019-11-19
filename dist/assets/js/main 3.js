
//
//
// main.js
//
// Custom functions

$( document ).ready(function() {
  
  checkComponents();
});

function checkComponents() {
  
  if ($("nav").hasClass("navbar")) {
    
    // call navbar function
    
    hideNavbarOnScroll();
    initOwlCarousels();
  }
}

// Hide nav on scroll down and show on scroll up

function hideNavbarOnScroll() {
  
  $(".navbar.navbar-expand-lg.navbar-light").autoHidingNavbar();
}

// Project carousels 

function initOwlCarousels() {

  $('.owl-carousel').owlCarousel({
    margin: 20,
    loop: false,
    items: 4,
    dots: true,
    responsive:{
      320: {
          items:2
      },
      600: {
          items:2
      },
      1000: {
          items:3
      },
      1600: {
          items:4
      }
    }
  })
}