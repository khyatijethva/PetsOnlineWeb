$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

function scrollToTop() {
    window.scrollTo(0, 0);
}

$(window).scroll(function() {  
    $(".scrolldown").removeClass("scroll");  
    var scroll = $(window).scrollTop();
    if (scroll >= 700) {
        $(".scrolldown").addClass("scroll");
    }
});


$(document).ready(function(){
    jQuery("html, body").scrollTop(0);

    $(".gallery-slider a").fancybox();


    // header js
    $(".navbar li.has-children > a").click(function(){
        $(".navbar li.has-children").toggleClass("active");
        $(this).toggleClass("active-menu");
    });

    $(".main-wrapper").click(function(){
        $(".navbar li.has-children").removeClass("active");
        $(".navbar li.has-children > a").removeClass("active-menu");
    });

    $("button.navbar-toggler").click(function(){
        $("body").toggleClass("menu-show");
    });

    if ($(window).width() > 991) {
        $('ul.sub-menu').owlCarousel({
            margin: 0,
            responsiveClass:true,
            autoWidth:true,
            items: 6,
            loop: false,
            smartSpeed: 800,
            dots: false,
            nav: false,
        });
    }

    // if ($(window).width() > 767) {
    //     $('.jump-breed-section ul').owlCarousel({
    //         margin: 0,
    //         responsiveClass:true,
    //         autoWidth:true,
    //         items: 6,
    //         loop: false,
    //         smartSpeed: 800,
    //         dots: false,
    //         nav: false,
    //     });
    // }

    if ($(window).width() < 767) {
        $('.dachshund-guides .petfind-wrapper').owlCarousel({
            margin: 20,
            responsiveClass:true,
            items: 1,
            loop: true,
            smartSpeed: 800,
            dots: false,
            nav: true,
        });
    }
    

    $('.logoslider').owlCarousel({
        margin: 60,
        responsiveClass:true,
        autoWidth:true,
        items: 6,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2,
                margin: 40,
            },
            767:{
                items:4,
                margin: 50,
            },
            1025:{
                items:5,
                margin: 60,
            }
        }
    });

    $('.dog-slider').owlCarousel({
        margin: 60,
        responsiveClass:true,
        items: 5,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        center:true,
        responsive:{
            0:{
                items:1,
                margin: 0,
            },
            575:{
                items:2,
                margin: 40,
                autoWidth:true,
            },
            1025:{
                items:4,
                margin: 50,
                autoWidth:true,
            },
            1600:{
                items: 5,
                margin: 65,
                autoWidth:true,
            }
        }
    });
    
    $('.cat-slider').owlCarousel({
        margin: 60,
        responsiveClass:true,
        items: 5,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        center:true,
        responsive:{
            0:{
                items:1,
                margin: 0,
            },
            575:{
                items:2,
                margin: 40,
                autoWidth:true,
            },
            1025:{
                items: 3,
                margin: 50,
                autoWidth:true,
            },
            1600:{
                items: 5,
                margin: 65,
                autoWidth:true,
            }
        }
    });

    $('.guide-slider').owlCarousel({
        margin: 55,
        responsiveClass:true,
        items: 5,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items:1,
                margin: 0,
            },
            575:{
                items:2,
                margin: 40,
                autoWidth:true,
            },
            1025:{
                items:4,
                margin: 45,
                autoWidth:true,
            },
            1600:{
                items: 4,
                margin: 50,
                autoWidth:true,
            }
        }
    });
    
    $(".review-slider").owlCarousel({
        loop:true,
        items: 1,
        smartSpeed: 900,
        dots: false,
        nav: false,
    });

    $('.gallery-slider').owlCarousel({
        margin: 60,
        responsiveClass:true,
        items: 2,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        center: true,
        // autoplay:true,
        autoplayTimeout: 1500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                margin: 10,
            },
            767:{
                items: 2,
                margin: 30,
                nav: false,
            },
            1025:{
                items: 2,
                margin: 55,
                nav: false,
            }
        }
    });

    $('.breeds-size-slider').owlCarousel({
        margin: 35,
        responsiveClass: true,
        autoWidth: true,
        items: 5,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items: 1,
                margin: 10,
            },
            575:{
                items: 2,
                margin: 22,
            },
            1025:{
                items: 4,
                margin: 28,
            },
            1600:{
                items: 5,
                margin: 32,
            }
        }
    }); 

    $('.breeds-maintenance-slider').owlCarousel({
        margin: 35,
        responsiveClass: true,
        autoWidth: true,
        items: 5,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items: 1,
                margin: 10,
            },
            575:{
                items: 2,
                margin: 22,
            },
            1025:{
                items: 4,
                margin: 28,
            },
            1600:{
                items: 5,
                margin: 32,
            }
        }
    });
    

    $('.review--slider').owlCarousel({
        margin: 70,
        responsiveClass:true,
        items: 3,
        loop:true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items: 1,
                margin: 30,
            },
            767:{
                items: 2,
                margin: 40,
            },
            1199:{
                items: 3,
                margin: 50,
            }
        }
    });


    $('.jump-breed ul li').click(function() {
        $(".jump-breed ul li").removeClass('active'); 
        $(this).addClass('active'); 
    });
});
