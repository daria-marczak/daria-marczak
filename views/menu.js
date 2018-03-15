if ($(window).width() < 1300) {
  $(".menu-toggle").click(function() {
      $("ul").fadeToggle("slow", function() {
          $("ul").toggleClass("opening");
      });
      $(this).toggleClass("slow", "open");
  });

  $("a").click(function() {
      $("ul").fadeOut("slow");
  });
}