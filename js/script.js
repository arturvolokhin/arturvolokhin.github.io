$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1100,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }    
        ]
      });
  });


  new WOW().init();


