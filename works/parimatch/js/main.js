$(document).ready(function() {
    $('.parallax').on('mousemove', function(e) {
        var x = e.pageX / $(window).width();
        var y = e.pageY / $(window).height();

        $('.parallax__jugg').css(
            'transform',
            'translate(' + x * 100 +'px ,' + y * 2 + 'px)'
        );

        $('.parallax__tracer').css(
            'transform',
            'translate(' + x * 80 +'px ,' + y * 2 + 'px)'
        );

        $('.parallax__pubg').css(
            'transform',
            'translate(' + x * 60 +'px ,' + y * 2 + 'px)'
        );
    });
});



// $(window).on('load', function() {
//     $('section').addClass('active');
// });



