jQuery(document).ready(function($) {
    
    /ono scroll, navbar shrinks
    $(window).scroll(function() {
        var scroll 		= $(this).scrollTop();
        var nav 		= $('#header');

        // nav.addClass('#main-navbar.second-state');

        if (scroll > 200) {
            nav.addClass('#main-navbar.second-state');
        } else {
            nav.removeClass('#main-navbar.second-state');

        }
    });

    $('.slider').slick({
      arrows: true,
      dots: true,
      centerMode: true,
      slidesToShow: 1,
      infinite: true,
      adaptiveHeight: false,
      fade: false
    });

});
