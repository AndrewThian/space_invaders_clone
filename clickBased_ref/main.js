// (function($, window, document) {
    // "use strict";

    var inAnim = false,
        l, to,

        rnd = function(min, max) {
            return (min + parseInt((Math.random() * ((max - min) + 1)), 10));
        },

        shoot = function(e, explode) {
            // $(".score .num").html(parseInt($('.score .num').html(), 10) + rnd(0, 300));
            l = $('footer .shooter').offset();
            l = l.left + 35;

            to = $(window).height() - (e.pageY - $(window).scrollTop()) - 30;

            $('footer .shoot').css({
                left: l,
                top: -39
            }).show().stop().animate({
                top: -(to)
            }, function() {
                $('footer .shoot').hide();
                if (explode) {
                    inAnim = true;
                }
            });
        },

        space = function(e, elem) {
            l = $('footer .shooter').offset();
            l = l.left + 35;

            to = $(window).height() - (e.pageY - $(window).scrollTop()) - 30;

            $('footer .shoot').css({
                left: l,
                top: -39
            }).show().stop().animate({
                top: -(to)
            }, function() {
                $('.score .num').html(parseInt($('.score .num').html(), 10) + rnd(0, 300));
                $('footer .shoot').hide();
                elem.attr('src', elem.attr('src').replace('png', 'gif'));

                setTimeout(function() {
                    elem.fadeOut(function() {
                        elem.attr('src', elem.attr('src').replace('gif', 'png')).fadeIn();
                    });
                }, 1900);
            });
        };


    $(document).ready(function() {
        $(document).mousemove(function(e) {
            if (e.pageX < $(window).width()) {
                $('footer .shooter').css({
                    left: e.pageX - 37
                });
            } else {
                $('footer .shooter').css({
                    left: $(window).width() - 75
                });
            }
        });


        $(document).click(function(e) {
            shoot(e, false);
            // $('.score .num').html(parseInt($('.score .num').html(), 10) + rnd(0, 300));
        });


        $('.space').click(function(e) {
            space(e, $(this));
            return false;
        });
    });
// }(jQuery, window, document));
