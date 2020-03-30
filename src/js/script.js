$(function(){

    $('.header__slider').slick({
        infinite:true,
        fade:true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="arrows-right">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="arrows-right">',
        // asNavFor: '.slider-dots',
    });

    // $('.slider-dots').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     // asNavFor: '.header__slider',
    // });

    $('.slider-dots')
        .on('init', function(event, slick) {
            $('.slider-dots .slick-slide.slick-current').addClass('is-active');
        })
        .slick ({
            slidesToShow: 4,
            slidesToScroll: 4,
        });
   
    $('.header__slider').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-dots').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-dots .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-dots .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.slider-dots').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $('.header__slider').slick('slickGoTo', goToSingleSlide);
    });

    // https://codepen.io/dolce/pen/QarQde 
});