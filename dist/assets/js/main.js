
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
  }
}

// Hide nav on scroll down and show on scroll up
function hideNavbarOnScroll() {
  
  $(".navbar.navbar-expand-lg.navbar-light").autoHidingNavbar();
}