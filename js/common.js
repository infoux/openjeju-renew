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

            try {

                if ($('.mobile .sub-menu ul').hasClass("num1")) {
                    $('.mobile .sub-menu button').css("display", "none");

                } else {

                    var mobileSub = $('.mobile .sub-menu ul').slick({
                        speed: 1000,
                        infinite: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        variableWidth: true,
                        prevArrow: ".submenu-prev",
                        nextArrow: ".submenu-next"
                    });



                }

                $('.mobile .sub-menu ul').slick(
                    'slickGoTo',
                    $('.mobile .sub-menu ul li a.active').parent().index()
                );

                $('.rankoutline').slick({

                    prevArrow: ".prev",
                    nextArrow: ".next",
                    breakpoint: 1199,
                    speed: 1000,
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    autoplaySpeed: 2000
                });
            

                $('.mobile .popword ul').slick({
                    autoplay:true,
                    speed: 1000,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical:true,
                    prevArrow: ".popword-prev",
                    nextArrow: ".popword-next"
                });

            } catch (e) {}

        } else {
            $("body").addClass("pc");
            $("body").removeClass("mobile");

            $('body #main_menu h2').mouseenter(function () {
                $('body #main_menu').addClass("active");

            });

            $('body #main_menu').mouseleave(function () {
                $('body #main_menu').removeClass("active");
            });

            try {
                $('.sub-menu ul').slick('unslick');
                $('.rankoutline').slick('unslick');
            } catch (e) {}
        }
    }

    viewMode();

    $(window).resize(function () {
        viewMode();
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

    $("section.sub-head").each(function () {
        $(this).css(
            "background",
            "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
        );
    });

    $("section.sub-head-search").each(function () {
        $(this).css(
            "background",
            "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
        );
    });

    $("section.main-food ul li a").each(function () {

        if ($(this).find("img").length) {

            $(this).css(
                "background",
                "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
            );

        } else {}
    });
    
    try {
        $(".map-pop p.text").perfectScrollbar();
    } catch(e) {}

    var tripslider = $('.main-trip div.list').slick({
        speed: 1000,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        prevArrow: ".trip-prev",
        nextArrow: ".trip-next"
    });

    $('.food-slider .outline').slick({
        speed: 1000,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 7,
        variableWidth: true,
        prevArrow: ".food-prev",
        nextArrow: ".food-next",
        autoplay: true,
        autoplaySpeed: 2000,
        
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3

              }
            }
        ]

    });


    $(".plan-map button.reply").click(function () {
        $(this).parent().find("div.reply").toggleClass("on");
        $(this).toggleClass("on");
    });



    $(".plan-map .list dt button").click(function () {
        $(".plan-map div.search").toggleClass("on");

    });



    $(".plan-map div.search h3 button").click(function () {
        $(".plan-map div.search").toggleClass("on");

    });




    $("div.keyword button.title").click(function () {
        $("div.popword").toggle();

    });


    $("button.photo-view").click(function () {
        $("button.photo-view").removeClass("on");
        $(this).addClass("on");


        $("div.photo-view").removeClass("open");
        $(this).parent().find("div.photo-view").addClass("open");
 

        try {
            $('div.photo-view.'+ $(this).attr("data") +' div.list').slick('unslick');
        } catch (e) {
            
        }


        $('div.photo-view.'+ $(this).attr("data") +' div.list').slick({
            speed: 1000,
            centerMode: true,
            variableWidth: true,
            slidesToShow: 3,
            prevArrow: ".trip-prev",
            nextArrow: ".trip-next"
        });

        $("div.photo-view div.list div.slick-slide").each(function () {
            $(this).css(
                "background",
                "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
            );
        });


    });


    $("button.ar").click(function () {
        $("button.ar").removeClass("on");
        $(this).addClass("on");

        $(".list-gallery li div.ar").removeClass("open");
        $(this).parent().find("div.ar").addClass("open");
    });


    $(".map-pop p.img").each(function () {
        $(this).css(
            "background",
            "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
        );
    });

    $("section.main-trip div.slick-slide a").each(function () {
        $(this).css(
            "background",
            "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover"
        );
    });

    $('.check-all').on('click', function() {
        $("input:checkbox").prop("checked", "checked");

        $('.check-all').css("display", "none");
        $('.check-all-cancle').css("display", "inline-block");
      });
    

      $('.check-all-cancle').on('click', function() {
        $("input:checkbox").removeProp("checked");

        $('.check-all').removeAttr("style");
        $('.check-all-cancle').removeAttr("style");
      });

    $('.tabs a').on('click', function() {
        var tab = $(this).attr("data");
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $('.tab.' + tab).addClass('active');
      });
    
      
  /* STAR_RATE*/
  var $starRate = $('.star-rate');
  if ($starRate.length > 0) $starRate.on('click', 'a', function() {
    var starValue = $(this).attr("data");
    $starRate.find('a').each(function() {
        $(this).find("i").removeClass("icon-star");
      $(this).find("i").addClass("icon-star-empty");

      if ($(this).attr("data") <= starValue) {

        $(this).find("i").removeClass("icon-star-empty");
        $(this).find("i").addClass("icon-star");
      }

    });
  });












});
