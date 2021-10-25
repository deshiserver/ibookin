// DropDown Trogol

$(".ibookin-dropdown-toggle").on("click", function () {
    if ($(this).closest(".ibookin-dropdown").find(".ibookin-dropdown-list").hasClass("ibookin--open")) {
        $(this).find('.arrow-icon').animate({
            'rotate': '0'
        }, {
            step: function (now, fx) {
                $(this).css({
                    "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-" +
                        now +
                        "deg) skew(0deg, 0deg)",
                    "transform-style": "preserve-3d"
                });
            },
            duration: 180,
            easing: 'linear',
            queue: false,
            complete: function () {

            }
        }, 'linear');
        $(this).closest(".ibookin-dropdown").find(".ibookin-dropdown-list").removeClass('ibookin--open');
    } else {
        $('.arrow-icon').animate({
            'rotate': '0'
        }, {
            step: function (now, fx) {
                $(this).css({
                    "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-" +
                        now +
                        "deg) skew(0deg, 0deg)",
                    "transform-style": "preserve-3d"
                });
            },
            duration: 80,
            easing: 'linear',
            queue: false,
            complete: function () {

            }
        }, 'linear');
        $(".ibookin-dropdown-list").removeClass('ibookin--open');

        $(this).find('.arrow-icon').animate({
            'rotate': '180'
        }, {
            step: function (now, fx) {
                $(this).css({
                    "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-" +
                        now +
                        "deg) skew(0deg, 0deg)",
                    "transform-style": "preserve-3d"
                });
            },
            duration: 180,
            easing: 'linear',
            queue: false,
            complete: function () {

            }
        }, 'linear');
        $(this).closest(".ibookin-dropdown").find(".ibookin-dropdown-list").addClass('ibookin--open');
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 6,
            nav: true,
            loop: false
        }
    }
})

// sticker
$(document).ready(function () {
    $("#sticker").sticky({
        topSpacing: 0
    });
});



