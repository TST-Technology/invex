/* eslint-disable no-undef */
jQuery(document).ready(function () {
  $(".top_market_carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: false,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
      },
      1366: {
        items: 5,
        nav: true,
      },
    },
  });
});
