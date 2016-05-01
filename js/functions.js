var pContainerHeight = $('.banner').height();
var controller = new ScrollMagic.Controller();

$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll <= pContainerHeight) {

        $('.logo').css({
            'transform': 'translate(0px, ' + wScroll / 3.9 + '%)'
        });

        $('#bannerColourOverlay').css('opacity', wScroll / $('#bannerColourOverlay').height() / 3 + 0.5);
        $('.blurred-image').css('opacity', wScroll / $('#bannerColourOverlay').height() / 3 + 0.5);

    }

});

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
})
    .setTween("#how", 0.5, {opacity: 1.0, top: 0}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
