$(function () {

    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }

    $("#datenschutzPage").fullpage({
        anchors: ["datenschutz", "footer"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "Vision", "Services", "Projekte", "Kontakt"],
        responsiveWidth: 900,
        autoScrolling: false,
        fitToSection: false,
        scrollBar: true,
        afterResponsive: function (isResponsive) {
        }
    });
});