/** @format */

$(function () {
  $(".js-About").hide();
  $(".service-box").css({ transform: "scale(1.2)" });
  $(".fas").hide();
  $(".js-header").waypoint(function (direction) {
    $(".js-About").fadeIn(1800);
  });
  $(".about-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });

  $(".jsserv").waypoint(function () {
    $(".service-box").css({
      transform: "scale(1)",
      transition: "transform 1",
    });
    $(".fas").fadeIn(2000);
  });

  $(".testimonial-sec").waypoint(function () {
    $(".js--box")
      .fadeIn(500)
      .fadeOut(500)
      .fadeIn(500)
      .fadeOut(500)
      .fadeIn(500)
      .fadeOut(500)
      .fadeIn(500);
  });
});
