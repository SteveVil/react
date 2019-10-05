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
