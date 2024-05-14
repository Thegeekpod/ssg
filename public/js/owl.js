(function( $ ) {
    "use strict";

    $('.home-client-carousel').owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },          
            767:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
})( jQuery );