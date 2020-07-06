$(document).ready(function() {

    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault();
    //
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top
    //     }, 100, 'linear');
    // });


    (function burgerMenuTriggerButton(){
        var $burger = $('.hamburger');

        $burger.on('click', function() {

            $(this).toggleClass('is-active').next().toggleClass('active');

        });

    })();

    var menu = $('.menu');
    var burger = $('.hamburger');
    $('body').on('click', function(e) {
        if(!e.target.closest('.menu')) {
            menu.removeClass('active');
        }
    });

    burger.on('click', function(e) {
        e.stopPropagation();
    });

    $('.card__trigger-btn').on('click', function(e){
        e.preventDefault();
        $('.portfolio__wrap').toggleClass('trigger__active');
    });

    if($(window).outerWidth() > 1000) {
        $('.card-link').on('click', function(e) {
            e.preventDefault();
            $(this).find('.card').addClass('portfolio__wrap-origin');
            setTimeout(function() {
                window.open($(this).attr('href'),'_blank');
            }, 300);
        });
    }



    $('.card-link').on('click', function(e) {
        e.preventDefault();
        window.open($(this).attr('href'),'_blank');
    });

    $(function() {
        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop:0
            },100);
        })
    });

    $('body, html').scroll(function() {
        if ($(this).scrollTop()>500) {
            $('.scrollup').fadeIn();
        }
        else {
            $('.scrollup').fadeOut();
        }
    });

    $('body, html').scroll(function() {
        if ($(this).scrollTop()>50) {
            $('.header').addClass('header__active');
        }
    });

    const particlesSettings = {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    };
    particlesJS('hero__particles--js', particlesSettings);
    particlesJS('skills__particles--js', particlesSettings);
    particlesJS('portfolio__particles--js', particlesSettings);

});




var granimInstance = new Granim({
    element: '#canvas-granim',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#fafafa', '#87CEEB'],
                ['#00BFFF', '#fafafa'],
                ['#e1eec3', '#4682B4']
            ]
        }
    }
});










class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

const phrases = [
    'навыки',
];
const subtitle = [
    'мои работы',
];

const el = document.querySelector('.skills__title-heading'),
      ul = document.querySelector('.portfolio__title-heading');
const fx = new TextScramble(el);
const fl = new TextScramble(ul);

let counter = 0;
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
    });
    counter = (counter + 1) % phrases.length;
    fl.setText(subtitle[counter]).then(() => {
        setTimeout(next, 800)
    });
    counter = (counter + 1) % subtitle.length
};


next();






$('.btn__primary-one').on('click', function(e){
    e.preventDefault();
    $('#form').toggleClass('active-popup');
    setTimeout(function(){
        Swal.fire({
            title: 'ОЙ!',
            text: 'На данный момент обратная связь не доступна, по причине оскорбления чувств GitHub относительно поддержки php.',
            icon: 'error',
            confirmButtonText: 'Понятно, в таком случае напишу вам на почту)'
        })
    },700);
});



var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

var bubblyButtons = document.getElementsByClassName("btn__primary-one");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
















