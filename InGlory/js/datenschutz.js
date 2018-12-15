$(function () {

    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }

    $("#footerDatenschutzContent").load("footer.html");

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

    $(window).scroll(function(){
        var scrollTopVar = $(window).scrollTop();
        if(scrollTopVar > 0) {
            $(".datenschutzLine").addClass("line").removeClass("menuline-dark");
        } else {
            $(".datenschutzLine").addClass("menuline-dark").removeClass("line");

        }
    });

});