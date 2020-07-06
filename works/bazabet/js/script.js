$(document).ready(function() {
    $('.parallax').on('mousemove', function(e) {
        var x = e.pageX / $(window).width();
        var y = e.pageY / $(window).height();

        $('.parallax__truck').css(
           'transform',
            'translate(' + x * 60 +'px ,' + y * 2 + 'px)'
        );

        $('.parallax__man').css(
           'transform',
            'translate(' + x * 30 +'px ,' + y * 2 + 'px)'
        );

        $('.parallax__ball').css(
            'transform',
            'translate(' + x * 100 +'px ,' + y * 2 + 'px)'
        );
    });
});



$(window).on('load', function() {
    $('section').addClass('active');
});

var elem = document.querySelector("#qube")
console.log(elem.classList);





