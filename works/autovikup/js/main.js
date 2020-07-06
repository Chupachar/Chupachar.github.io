$(document).ready(function() {
    (function burgerMenuTriggerButton() {
        let $burger = $('.hamburger');

        $burger.on('click', function() {

            $(this).toggleClass('is-active').next().toggleClass('active');

            $('body, html').toggleClass('no-scroll');

            $('.overlay').fadeToggle();

        });

    })();
    car.onload = function() {
        let start = Date.now();

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;

            car.style.left = timePassed / 5 + 'px';

            if (timePassed > 12000) clearInterval(timer)

        }, 20);
    }


    (function removeModals() {
        let $overlay = $('.overlay');
        let $burger = $('.hamburger');

        $overlay.on('click', function() {
            $burger.removeClass('is-active').next().removeClass('active');
            $(this).fadeOut();
        });

    })();

});

