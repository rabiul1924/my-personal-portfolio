/*=================================================
    
                About

===============================================*/

$(function () {
    // animate on scroll
    new WOW().init();
});


/*=================================================
    
                Projects

===============================================*/


$(function () {

    $("#Projects-names").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1

            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }

        }
    });
});

/*=================================================
    
                Testimonials

===============================================*/


$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true
    });
});


/*=================================================
    
                STATS

===============================================*/

$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 2000

    });
});



/*=================================================
    
                NAVIGATION

==============================================*/
// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


//Show/Hide transparent trangerine yellow navigation

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("fixed-top");
            $("#back-to-top").fadeOut();


        } else {
            //show nav
            $("nav").addClass("fixed-top");
            $("#back-to-top").fadeIn();
        }
    });
});
//Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #skills, #Projects and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250, ("easeInOutExpo"));
    });
});






/*=================================================
    
                Form

==============================================*/
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

