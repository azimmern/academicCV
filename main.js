$(document).ready(function () {

    // smooth scroll to section
    $('.w3-sidebar a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    $('.collaborate a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    $('.future a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // fade out the menu banner after a certain scroll length
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('#menu-banner').fadeOut("fast");
        } else {
          $('#menu-banner').fadeIn("fast");
        }
      });


});


// document ready