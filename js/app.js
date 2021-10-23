// DropDown Trogol

$(".bdkaj-dropdown-toggle").on("click", function () {
    if ($(this).closest(".bdkaj-dropdown").find(".bdkaj-dropdown-list").hasClass("bdkaj--open")) {
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
        $(this).closest(".bdkaj-dropdown").find(".bdkaj-dropdown-list").removeClass('bdkaj--open');
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
        $(".bdkaj-dropdown-list").removeClass('bdkaj--open');

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
        $(this).closest(".bdkaj-dropdown").find(".bdkaj-dropdown-list").addClass('bdkaj--open');
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






