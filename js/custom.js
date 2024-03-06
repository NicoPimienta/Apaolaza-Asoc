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

//funciones para que redirija al modal SOLO EN MOVIL





$(document).ready(function(){
  // Función para crear el enlace de anclaje en dispositivos móviles
  function createAnchorLink(tabId, contentId) {
      // Verificar si es un dispositivo móvil (ancho de pantalla menor a 768px)
      if ($(window).width() < 768) {
          // Obtener la posición del elemento de contenido
          var contentPosition = $(contentId).offset().top;
          // Agregar el enlace de anclaje al botón
          $(tabId).click(function() {
              $('html, body').animate({
                  scrollTop: contentPosition
              }, 'slow');
          });
      }
  }

  // Llamar a la función para cada botón
  createAnchorLink('#nav-strategy-tab', '#nav-strategy');
  createAnchorLink('#nav-video-tab', '#nav-video');
  createAnchorLink('#nav-consum-tab', '#nav-consum');
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


