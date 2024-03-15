// usar este .js para cualquier tipo de programación aparte


  (function ($) {
  
  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // PROJECTS IMAGE RESIZE
    function NewsImageResize(){      
      var LargeImage = $('.projects-thumb-small .projects-image').height();

      $('.projects-thumb-large').css('height', LargeImage + 'px');
    }
    // funciónes para que seleccione reserva virtual al form:

    $(document).ready(function(){
      $('#resvirtual').click(function(){
          $('#tipo_de_entrevista').val('virtual');
      });
  });


  $(document).ready(function(){
    $('#respresen').click(function(){
        $('#tipo_de_entrevista').val('presencial');
    });
});

//funcion para cambio de telefono de header

$(document).ready(function() {
  var phoneNumbers = ['011-22433664', '02324-553786']; // Array con los números de teléfono
  var index = 0;

  function changePhoneNumber() {
      $('#phone-text').fadeOut(500, function() {
          $(this).text(phoneNumbers[index]).fadeIn(500);
      });

      index = (index + 1) % phoneNumbers.length;
  }

  // Llamar a la función para cambiar el número de teléfono cada 8 segundos
  setInterval(changePhoneNumber, 5000);
});











// ---------------


    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


