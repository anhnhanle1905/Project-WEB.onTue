// owl carousel
$(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autopalyTimeout: 5000, //5s
    // autoplayHoverPause: true,
    doc: false,
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  });
});