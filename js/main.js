$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        padding:10,
        responsive:{
            480:{
                items:3,
                loop:false
            },
            768:{
                items:5,
                loop:false
            }
        }
    });
})