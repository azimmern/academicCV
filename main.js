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

    $('.therologia a').on('click', function (e){
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

      var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


});


// document ready