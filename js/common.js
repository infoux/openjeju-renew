$(document).ready(function() {


  function viewMode() {
    var windowWidth = $(window).width();
    if (windowWidth < 1199) {
      $("body").removeClass("pc");
      $("body").addClass("mobile");



      $('#main_menu .menu>li:has(ul>li)').each(function() {
        $(this).find("h2 a").removeAttr("href");
      });

      $('body #main_menu h2 a').on('click', function() {
        $('body #main_menu h2 a').removeClass("active");
        $(this).addClass("active");
        $("body #main_menu ul ul").removeClass("depth2on");
        $(this).parent().parent().find("ul").addClass("depth2on");
      });


    } else {
      $("body").addClass("pc");
      $("body").removeClass("mobile");


      $('body #main_menu h2').mouseenter(function() {
        $('body #main_menu').addClass("active");

      });


      $('body #main_menu').mouseleave(function() {
        $('body #main_menu').removeClass("active");

      });


    }
  }

  viewMode();

  $(window).resize(function() {
    viewMode();
  });

  $(".menuToggle").click(function() {
    $("#header nav").addClass("open");
    $("body").addClass("menuon");
  });


  $("#header nav button.close").click(function() {
    $("#header nav").removeClass("open");
    $("body").removeClass("menuon");
  });


  $("section.issue").each(function() {

    $(this).css("background", "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover");

  });





});
