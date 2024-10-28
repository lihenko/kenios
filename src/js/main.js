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

var service_select = jQuery('#services-navigation');
var service_navigation = jQuery('.services-navigation');
var service_data = jQuery('.services-data');
var select = jQuery('.select-wrap');

service_select.on('change', function () {
  var service = this.value;
  var service_name = service_select.find('option:selected').text();
  service_data.find('.service-data-wrap').removeClass('active');
  service_navigation.find('ul li').removeClass('active');
  service_data.find('#' + service).addClass('active');
  service_navigation.find('[data-service="' + service + '"]').addClass('active');
  select.find('.select-field').text(service_name);
});

service_navigation.find('li').on('click', function () {
  var service = jQuery(this).data('service');
  service_select.val(service).change();
});

select.on('click', function () {
  jQuery(this).toggleClass('active');
});

select.find('.select-list li').on('click', function () {
  var option = jQuery(this).data('value');
  var option_name = jQuery(this).text();
  jQuery(this).parents('.select-wrap').find('select').val(option).change();
  jQuery(this).parents('.select-wrap').find('.select-field').text(option_name);
  service_navigation.find('[data-service="' + option + '"]').addClass('active');
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

 



