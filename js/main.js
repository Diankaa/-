$(document).ready(function () {
  $(".hero__slider").slick({
    arrows: false,
    dots: true,
    dotsClass: "slick-dots hero__slide-dots",
    arrows: true,
    slidesToShow: 1,
    slideToScroll: 3,
    autoplay: false,
  });

  $(".personal__slider").slick({
    dots: false,
    prevArrow: document.querySelector(".personal-arrow--prev"),
    nextArrow: document.querySelector(".personal-arrow--next"),
    slidesToShow: 4,
    slideToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 906,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  if ($(window).width() > 1100) {
    $(".nav-dropdown")
      .mouseenter(function () {
        $(".dropdown-list").show();
      })
      .mouseleave(function () {
        $(".dropdown-list").hide();
      });
  } else {
    $(".nav-dropdown").click(function () {
      $(".dropdown-list").slideToggle(), $(this).toggleClass("active");
    });
  }

  $(".navbar-toggle").click(function () {
    $(".nav").slideToggle(), $(this).toggleClass("active");
  });

  // new WOW().init();
  wow = new WOW({
    offset: 150,
  });
  wow.init();
});
