var pContainerHeight = $('.banner').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /3.9 +'%)'
    });

    $('#bannerColourOverlay').css('opacity', wScroll/$('#bannerColourOverlay').height()/3 + 0.5);

  }

});
