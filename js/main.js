$(document).ready(function(){
    $('.circle-slider').slick({
        slidesToShow:5,
        slidesToScroll:5,
        infinite:true,
        arrows:false,
        dots: false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll:1,
                    infinite:false,
                    dots:true
                }
            }
        ]
    });
    $('.our-customer-slider').slick({
        slidesToShow:8,
        slidesToScroll:3,
        infinite:true,
        arrows:false,
        dots:true,
        responsive:[
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint:500,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll:3
                }
            }
        ]
    });
});
