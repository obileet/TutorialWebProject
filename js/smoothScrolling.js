$(document).ready(function () {
    $("#loader-page").css("display","none");
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                scrollBtnScrolling(this.hash);
            }
        });
});

//smooth to top
function scrollBtnScrolling(hash) {
    var target = $(hash);
    target = target.length ? target : $('[name=' + hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            }
            ;
        });
    }
}

document.addEventListener("scroll", function () {
    var xPosVision = $("#visionRow").position().top;
    var currentXPos = $(window).scrollTop();

    if (xPosVision > currentXPos) {
        $("#scrollBtn").css("display", "none");
    } else {
        $("#scrollBtn").css("display", "block");
    }

    $(".scroll-down-section").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(window).load(function () {
    $("#loader-page").fadeOut("slow");
})

