$('.slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 824,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})
;