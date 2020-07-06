
$(document).ready(function() {
    (function burgerMenuTriggerButton() {
        let $burger = $('.hamburger');

        $burger.on('click', function() {

            $(this).toggleClass('is-active').next().toggleClass('active');

            $('body, html').toggleClass('no-scroll');

            $('.overlay').fadeToggle();
        });
    })();

    (function removeModals() {
        let $overlay = $('.overlay');
        let $burger = $('.hamburger');

        $overlay.on('click', function() {
            $burger.removeClass('is-active').next().removeClass('active');
            $(this).fadeOut();
        });
    })();
});



$('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinity: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


