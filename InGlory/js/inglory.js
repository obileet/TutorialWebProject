/*
  [JS Index]

  ---

  Template Wox - Photography Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. fadeIn.element
  3. slick slider
    3.1. slick about slider
    3.2. slick services slider
	3.3. slick fullscreen slideshow
  4. owl carousel
    4.1. owl works carousel
    4.2. owl news carousel
  5. magnificPopup
  6. skills bar
  7. facts counter
  8. navigation
    8.1. navigation open/close
    8.2. navigation active state
    8.3. navigation hover state
  9. fullPage
  10. YouTube player
    10.1. highlight YouTube player navigation
  11. toggle news content
  12. forms
    12.1. contact form
  13. contact modal
    13.1. contact modal additional CLOSER
  14. section position reset
    14.1. news position reset
    14.2. works position reset
    14.3. contact position reset
*/
function showServiceItem(itemID) {

    $(".serviceItem1").fadeOut('slow');
    $(".serviceItem2").fadeOut('slow');
    $(".serviceItem3").fadeOut('slow');
    $(".serviceItem4").fadeOut('slow');
    $(".serviceItem5").fadeOut('slow');
    $(".serviceItem6").fadeOut('slow');
    $(".serviceItem7").fadeOut('slow');
    $(".serviceItem8").fadeOut('slow');
    $(".serviceItem9").fadeOut('slow');

    var serviceItem = document.getElementsByClassName(itemID);
    $(serviceItem).delay(700).fadeIn('slow');

}

var homeInit = false;
var impressumInit = false;

$(function () {
    "use strict";

//initializing



    $(window).on("load", function () {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);

        // 2. fadeIn.element
        setTimeout(function () {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });

    // 3. slick slider
    // 3.1. slick about slider
    $(".slick-about").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 500
    });


    // 4.2. owl news carousel
    $("#news-page-img-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1170: {
                items: 3
            }
        }
    });

    // 5. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 300,
        mainClass: "mfp-fade"
    });

    // 6. skills bar
    $(".show-skillbar").appear(function () {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });

    // 7. facts counter
    $(".facts-counter-number").appear(function () {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });

    // 8. navigation
    // 8.1. navigation open/close
    $(".navigation-icon").on("click", function () {
        $(this).toggleClass("active");
    });
    $(".navigation-fire").on("click", function (e) {
        $(this).toggleClass("open");
        $("nav.navigation-menu").toggleClass("show");
    });
    $("nav.navigation-menu a").on("click", function (e) {
        var hash = $(this.hash);
        $("nav").removeClass("show");
        $(".navigation-fire").removeClass("open");
        $(".navigation-icon").removeClass("active");
    });
    // 8.2. navigation active state
    $("a.menu-state").on("click", function () {
        $("a.menu-state").removeClass("active");
        $(this).addClass("active");
    });
    // 8.3. navigation hover state
    hoverMenu();
    imgMenu();

    function hoverMenu() {
        $(".menu li a").on("mouseenter", function () {
            var ref = $(this).data("ref"),
                menuImg = $('.menu-img[data-ref="' + ref + '"]');
            $(".menu li a").removeClass("active");
            $(this).addClass("active");
            $(".menu-img").removeClass("active");
            menuImg.addClass("active");
        });
    }

    function imgMenu() {
        $("[data-bg]").each(function () {
            var bg = $(this).data("bg");
            $(this).css({
                "background-image": 'url(' + bg + ')',
                "background-position": "center center",
                "background-size": "cover"
            });
        });
    }

    // 9. fullPage

    // 10. YouTube player
    $("#bgndVideo").YTPlayer();
    // 10.1. highlight YouTube player navigation
    $(".video-state").on("click", function () {
        $(".video-state").removeClass("active");
        $(this).addClass("active");
    });

    // 11. toggle news content
    $(".c-btn-news").on("click", function () {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".inverse-dark").on("click", function () {
        $(".panel-left, .panel-right").removeClass("open");
    });

    // 12. forms
    // 12.1. contact form
    $("form#form").on("submit", function () {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function () {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">Bitte füllen Sie dieses Feld aus</span>'), $(this).addClass(
                "inputError"), s = !0;
            else if ($(this).hasClass("email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Keine gültige E-Mail Adresse</span>'), $(this).addClass(
                    "inputError"), s = !0);
            }
        }), !s) {
            $("form#form input.submit").fadeOut("normal", function () {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function () {
                $("form#form").slideUp("fast", function () {
                    $(this).before('<div class="success">Ihre Nachricht wurde erfolgreich versendet.</div>');
                });
            });
        }
        return !1;
    });

    // 13. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function () {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open").addClass("close");
        } else {
            $(".contact-modal").removeClass("close").addClass("open");
        }
    });
    // 13.1. contact modal additional CLOSER
    $(".navigation-icon, .logo").on("click", function () {
        $(".contact-modal").removeClass("open").addClass("close");
    });

    $("#footerSection").children(0).css("height", "");

});


// 14. section position reset
// 14.1. news position reset
$(".c-btn-news").on("click", function () {
    target = $(".news-page-img-wrapper");
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500);
});

// 14.2. works position reset
$(".c-btn-projekte").on("click", function () {
    target = $(".works-page-img-wrapper");
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500);
});

// 14.3. contact position reset
$(".contact-modal-launcher").on("click", function () {
    target = $(".contact-reset");
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500);
});

