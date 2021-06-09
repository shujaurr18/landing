$(".dropdown_menu").click(function () {
  
  $(".dropdown_wrapper").toggle("slow");
});

$(document).ready(function () {
  $(function () {
    $(".nav_menu li a").click(function (e) {
      e.preventDefault();
      $("a").removeClass("active_nav");
      $(this).addClass("active_nav");
    });
  });

  $(".single-item").slick();
});
{
  // dots: true,
  // infinite: true,
  // speed: 300,
  // slidesToShow: 1,

  // arrows: true,
  // adaptiveHeight: true,
}
