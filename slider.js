$(document).ready(function(){
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="prev arrow">&larr;</button>',
        nextArrow: '<button class="next arrow">&rarr;</button>',
        responsive: [
            {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
    });