$(function () {

    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }

    $("#leistung1Content").load("leistung1.html");
    $("#leistung2Content").load("leistung2.html");
    $("#leistung3Content").load("leistung3.html");
    $("#leistung4Content").load("leistung4.html");
    $("#leistung5Content").load("leistung5.html");
    $("#leistung6Content").load("leistung6.html");
    $("#leistung7Content").load("leistung7.html");
    $("#leistung8Content").load("leistung8.html");
    $("#leistung9Content").load("leistung9.html");

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