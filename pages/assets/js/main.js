
//
//
// main.js
//
// Custom functions

$( document ).ready(function() {
  
  checkComponents();
  initReadMoreLinks();
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
          items:3
      }
    }
  })
}

function initReadMoreLinks() {

  $('.read-more').click(function(){
      var $this = $(this);
      $this.toggleClass('read-more');
      if($this.hasClass('read-more')){
          $this.text('Read more');         
      } else {
          $this.text('Read less');
      }
  });
}