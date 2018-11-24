$(function () {

    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }

    $("#leistung1Content").load("leistungen/ls1.html");
    $("#leistung2Content").load("leistungen/ls2.html");
    $("#leistung3Content").load("leistungen/ls3.html");
    $("#leistung4Content").load("leistungen/ls4.html");
    $("#leistung5Content").load("leistungen/ls5.html");
    $("#leistung6Content").load("leistungen/ls6.html");
    $("#leistung7Content").load("leistungen/ls7.html");
    $("#leistung8Content").load("leistungen/ls8.html");
    $("#leistung9Content").load("leistungen/ls9.html");

    $("#footerContent").load("footer.html");

    $("#fullpage").fullpage({
        anchors: ["home", "vision", "leistungen", "projekte", "kontakt", "footer"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "Vision", "Services", "Projekte", "Kontakt"],
        responsiveWidth: 900,
        autoScrolling: true,
        scrollBar: false,
        afterResponsive: function (isResponsive) {
        }
    });

    $("#leistungen-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"]
    });
});