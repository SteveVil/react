$(function() {
  //caches a jQuery object containing the header element
  var header = $("#mainNav");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      header.removeClass("navbar-dark").addClass("navbar-light");
    } else {
      header.removeClass("navbar-light").addClass("navbar-dark");
    }
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $("#anim").addClass("slideInUp");
  } else {
    $("#anim").removeClass("slideInUp");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $("#about-img").addClass("fadeInLeft");
  } else {
    $("#about-img").removeClass("fadeInLeft");
  }
});
