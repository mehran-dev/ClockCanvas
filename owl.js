$(document).ready(function () {
    $(".owl-carousel.clocks").owlCarousel({
        loop: false,
        rtl: true,
        dots: true,
        margin: 10,
        autoPlay: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        },



    });
});