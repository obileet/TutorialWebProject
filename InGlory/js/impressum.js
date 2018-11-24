$(function () {
    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }


    $("#footerImpressumContent").load("footer.html");

    $("#fullpageImpressum").fullpage({
        anchors: ["impressum", "fullimpressum", "footer"],
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