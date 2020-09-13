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

  $('input[name=user_phone]').mask("+375 (99) 999-99-99");



 
    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
