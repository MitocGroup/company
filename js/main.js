$(function() {
    'use strict';

    $('.icon-burger').on('click', function() {
        $(this).toggleClass('open').toggleClass('icon-burger').toggleClass('icon-arrow');

        if ($('.icon-arrow').hasClass('open')) {
            $('html').css('overflow', 'hidden');
            $('.navbar-fix').addClass('color-nav-responsive');
        } else {
            $('html').css('overflow', 'scroll');
            $('.navbar-fix').removeClass('color-nav-responsive');
        }
    });

    $('.anchor').on('click', function(e) {
        if ($(window).width() > 992) {
            e.preventDefault();
            e.stopPropagation();

            let anchor = this.getAttribute('href').replace(new RegExp('\/', 'g'), '');
            $('html, body').animate({ scrollTop: $('#' + anchor).offset().top - 50 }, 1000);
            return;
        }
    });

    $('#mce-error-response, #mce-success-response').on('click',function() {
        $('#mce-error-response, #mce-success-response').fadeOut('fast');
    });

  /**
   * Parse confirmation message and append it to the page
   */
  (function confirmationMessage() {
    let location = document.location.toString();
    if (location.toString().indexOf('?mc-massage=') > 0) {
      let message = (location.split('?mc-massage='))[1];

      $('#mc-message').text(decodeURI(message || ''));
    }
  })();
});

$(window).scroll(function() {
    didScroll = true;
    if ($(window).scrollTop() > 30) {
        $('.navbar-fix').addClass('color-nav');
    } else {
        $('.navbar-fix').removeClass("color-nav");
        
    }
});
