(function ($) {
  'use strict';

  // search js
  $('.header-right ul li a i.fa-magnifying-glass').on('click', function () {
    $('.search input').slideToggle(800);
  });

  // menu-slide
  $('.menu-icon').on('click', function () {
    $('.menu-slide').animate({ right: 0 });
  });

  // menu-close
  $('.menu-close').on('click', function () {
    $('.menu-slide').animate({ right: -250 });
  });

  //box shadow under header
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('.header-area').css(
        'box-shadow',
        '0 15px 10px -10px rgba(0, 0, 0, 0.5)'
      );
      $('.header-area').css('background-color', '#f1f1f1 ');
    } else {
      $('.header-area').css('box-shadow', 'none');
      $('.header-area').css('background-color', '#fff');
    }
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });

  // scrollTop
  $(window).scroll(function () {
    let distance = $(window).scrollTop();
    if (distance > 500) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });
  $('.top').on('click', function () {
    $('html').animate({
      scrollTop: 0,
    });
  });

  //  wow js
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
})(jQuery);
