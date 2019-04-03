$(window).scroll(function () {
    if ($(this).scrollTop() > 18) {
        $('.img_logoNav').fadeIn();
    } else {
        $('.img_logoNav').fadeOut();
    }
});

$(window).scroll(function() {

    if ($(this).scrollTop()>15)
     {
        $('.hero').fadeOut();
     }
    else
     {
      $('.hero').fadeIn();
     }
 });

