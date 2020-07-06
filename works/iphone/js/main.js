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