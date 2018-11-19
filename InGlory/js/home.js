$(function () {

    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }

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
});