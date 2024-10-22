//main.js file




// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);


function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

jQuery(document).on('click', 'a[href^="#"]', function (event) {
  if (jQuery(this).attr('href') == '#') {
    return;
  } else {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
    }, 500);
  }
  
});


jQuery('.testimonials-slider').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 2,
  arrows: true,
  dots: false,
  nextArrow: jQuery('.testimonials-slider-next-button'),
  prevArrow: jQuery('.testimonials-slider-prev-button'),
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows:false,
        dots:true,
      }
    },
  ]
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

var decimal_places = 0;
var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

  
jQuery('#countries').viewportChecker( {
  offset: 100, 
  repeat: false,
  callbackFunction: function(elem, action){
    elem.animateNumber(
      {
        number: 30 * decimal_factor,
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now) / decimal_factor,
              target = jQuery(tween.elem);
          if (decimal_places > 0) {
            floored_number = floored_number.toFixed(decimal_places);
          }
  
          target.text(floored_number + '+');
        }
      },
      5000
    )
  }, 
});

jQuery('#units').viewportChecker( {
  offset: 100, 
  repeat: false,
  callbackFunction: function(elem, action){
    elem.animateNumber(
      {
        number: 2 * decimal_factor,
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now) / decimal_factor,
              target = jQuery(tween.elem);
          if (decimal_places > 0) {
            floored_number = floored_number.toFixed(decimal_places);
          }
  
          target.text(floored_number + 'M+');
        }
      },
      5000
    )
  }, 
});

jQuery('#years').viewportChecker( {
  offset: 100, 
  repeat: false,
  callbackFunction: function(elem, action){
    elem.animateNumber(
      {
        number: 50 * decimal_factor,
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now) / decimal_factor,
              target = jQuery(tween.elem);
          if (decimal_places > 0) {
            floored_number = floored_number.toFixed(decimal_places);
          }
  
          target.text(floored_number + '+');
        }
      },
      5000
    )
  }, 
});

jQuery('#history').viewportChecker( {
  offset: 100, 
  repeat: false,
  callbackFunction: function(elem, action){
    elem.animateNumber(
      {
        number: 20 * decimal_factor,
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now) / decimal_factor,
              target = jQuery(tween.elem);
          if (decimal_places > 0) {
            floored_number = floored_number.toFixed(decimal_places);
          }
  
          target.text(floored_number + '+');
        }
      },
      5000
    )
  }, 
});


jQuery('.key-industrials-slider')
.on('init', (event, slick, currentSlide, nextSlide) => {
  var active_slides = document.querySelectorAll("#key-industrials .slick-active");
  var count = active_slides.length;
  active_slides[0].classList.add('first-slide');
  active_slides[count-1].classList.add('last-slide');
})
.slick({
  infinite: true,
  dots:false,
  arrows:true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:'12px',
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: jQuery('.key-industrials-prev-button'),
  prevArrow: jQuery('.key-industrials-next-button'),
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        arrows: true,
        dots:false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots:true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots:true,
      }
    }
  ]
})
.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
  
  
})
.on('afterChange', (event, slick, currentSlide, nextSlide) => {
  var allslides = jQuery("#key-industrials .key-industrials-slider-item");
  allslides.removeClass('first-slide');
  allslides.removeClass('last-slide');
  var active_slides = document.querySelectorAll("#key-industrials .slick-active");
  var count = active_slides.length;
  active_slides[0].classList.add('first-slide');
  active_slides[count-1].classList.add('last-slide');
});

var select = jQuery('.select-wrap');

select.find('.select-list li').on('click', function () {
  var option = jQuery(this).text();
  jQuery(this).parents('.select-wrap').find('input').val(option);
  jQuery(this).parents('.select-wrap').find('.select-field').text(option);
});


jQuery(document).ready( function() {
  jQuery(".file-upload input[type=file]").change(function(){
       var filename = jQuery(this).val().replace(/.*\\/, "");
       jQuery("#filename").val(filename);
  });
});