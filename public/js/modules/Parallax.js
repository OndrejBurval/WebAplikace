// Potřebuje napojení jQuery
(function ($) {
    $.fn.inViewport = function (offsetVh) {
        var elOffsetVh = ~~Math.round(parseFloat(offsetVh)) || 0;
        var elT = $(this).offset().top;
        var elB = elT + $(this).outerHeight();
        var viewT = $(window).scrollTop();
        var viewB = viewT + ($(window).height() + elOffsetVh);
        return elB > viewT && elT < viewB;
    };
})(jQuery);

export const addParallax = (target, speed) => {
    $(window).on("resize scroll load", function () {
        $(target).each(function () {

            if ($(this).inViewport(0)) {
                let offset = $(this).offset();
                let value = ((window.scrollY - (offset.top - 500)) * (speed / 10)) * -1;
                this.style.transform = `translateY(${value}px)`;
            }
        });
    });
}

