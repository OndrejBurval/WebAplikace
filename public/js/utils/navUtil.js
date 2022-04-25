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


// Zjišťuje jaká část je zrovna in view
export const watchLinksInView = (navLinkClassName) => {
    const navLinks = document.querySelectorAll(navLinkClassName)

    $(window).on("resize scroll load", function () {
        $("[data-navIndex]").each(function () {

            if ($(this).inViewport(-100)) {
                let index = this.getAttribute("data-navIndex")
                navLinks[index].classList.add("actual")
                navLinks.forEach((e, key) => {
                    if (key !== index) e.classList.remove("actual")
                })
            }
        });
    });
}