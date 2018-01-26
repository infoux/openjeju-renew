$(document).ready(function () {

    function viewMode() {
        var windowWidth = $(window).width();
        if (windowWidth < 1199) {
            $("body").removeClass("pc");
            $("body").addClass("mobile");

            $('#main_menu .menu>li:has(ul>li)').each(function () {
                $(this)
                    .find("h2 a")
                    .removeAttr("href");
            });

            $('body #main_menu h2 a').on('click', function () {
                $('body #main_menu h2 a').removeClass("active");
                $(this).addClass("active");
                $("body #main_menu ul ul").removeClass("depth2on");
                $(this)
                    .parent()
                    .parent()
                    .find("ul")
                    .addClass("depth2on");
            });

        } else {
            $("body").addClass("pc");
            $("body").removeClass("mobile");

            $('body #main_menu h2').mouseenter(function () {
                $('body #main_menu').addClass("active");

            });

            $('body #main_menu').mouseleave(function () {
                $('body #main_menu').removeClass("active");

            });

        }
    }

    function mobileMag() {

        var mag = ($(window).width() - $('.main-trip ul li').width() - 20) / 2;
        $('body.mobile .main-trip ul')
            .css('margin-left', mag)
            .css('margin-right', mag);
        $('body.pc .main-trip ul')
            .css('margin-left', '0')
            .css('margin-right', '0');

    }

    viewMode();

    $(window).ready(function () {
        mobileMag();
    });
    $(window).resize(function () {
        viewMode();
        mobileMag();
    });

    $(".menuToggle").click(function () {
        $("#header nav").addClass("open");
        $("body").addClass("menuon");
    });

    $("#header nav button.close").click(function () {
        $("#header nav").removeClass("open");
        $("body").removeClass("menuon");
    });

    $("section.issue").each(function () {
        $(this).css(
            "background",
            "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
        );
    });

    $("section.main-food ul li a").each(function () {
        $(this).css(
            "background",
            "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
        );
    });

    $("section.main-trip ul li a").each(function () {
        $(this).css(
            "background",
            "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
        );
    });

    var tripslider = $('.main-trip ul').bxSlider({
        speed: 1000,
        pager: false,
        controls: false,
        slideMargin: 25,
        infiniteLoop: true,
        minSlides: 8,
        maxSlides: 8,
        nextSelector: '.main-trip .bx-next',
        prevSelector: '.main-trip .bx-prev',
        onSliderLoad: function(currentIndex) {

          $(".main-trip li").each(function(){

            var temp = $(this).attr('aria-hidden');
            if(temp.indexOf('false')>-1){
            $(this).addClass("active");
            }
            if(temp.indexOf('true')>-1){
              $(this).removeClass("active");
            }
            });

        },
        onSlideAfter: function($slideElement){
          $(".main-trip li").each(function(){

            var temp = $(this).attr('aria-hidden');
            if(temp.indexOf('false')>-1){
            $(this).addClass("active");
            }
            if(temp.indexOf('true')>-1){
              $(this).removeClass("active");
            }
            });
        }
      
    });


    
    $('.main-trip .bx-prev').click(function () {
      tripslider.goToPrevSlide();
      return false;
  });

    
  $('.main-trip .bx-next').click(function () {
    tripslider.goToNextSlide();
    return false;
});



});
