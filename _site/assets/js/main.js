(function($) {
  "use strict";

  // mobile menu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991"
  });


  // sticky
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 180) {
      sticky.removeClass('sticky');
    } else {
      sticky.addClass('sticky');
    }
  });

  // offcanvas menu
  $(".menu-tigger").on("click", function() {
    $(".offcanvas-menu,.offcanvas-overly").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function() {
    $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
  });

  $(".portfolio-active").imagesLoaded(function() {
    var $grid = $(".portfolio-active").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
    });
  });

  //for menu active class
  $(".portfolio-menu button").on("click", function(event) {
    $(this)
      .siblings(".active")
      .removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

})(jQuery);