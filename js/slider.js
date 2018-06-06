$('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false
            }
        }
    ]
})
;