//top-backgroud-slideshow
jQuery(function ($) {
    $.supersized({
        slide_interval: 5000, //1画像の表示時間
        transition: 1, //切り替え効果
        transition_speed: 300, //切り替えスピード
        random: 1,
        slides: [
            {
                image: 'img/index/20180903-292A6494.jpg'
            },
            {
                image: 'img/index/20180903-292A6648.jpg'
            },
            {
                image: 'img/index/20180903-292A6777.jpg'
            },
            {
                image: 'img/index/292A9708.jpg'
            },
            {
                image: 'img/index/20180626-292A1627.jpg'
            },
            {
                image: 'img/index/20180626-292A1699.jpg'
            },
            {
                image: 'img/index/20180628-292A3259.jpg'
            },
            
        ]
    });
});
//top-backgroud-slideshow

//hamburger-menu

(function ($) {
    $(function () {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function () {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function () {
            $header.toggleClass('open');
        });
    });
})(jQuery);

//hamburger-menu
