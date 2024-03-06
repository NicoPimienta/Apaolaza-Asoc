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
  function createAnchorLink() {
      // Verificar si es un dispositivo móvil (ancho de pantalla menor a 768px)
      if ($(window).width() < 768) {
          // Obtener la posición del elemento de contenido
          var contentPosition = $('#nav-business').offset().top;
          // Agregar el enlace de anclaje al botón
          $('#nav-business-tab').click(function() {
              $('html, body').animate({
                  scrollTop: contentPosition
              }, 'slow');
          });
      }
  }



  

  // Llamar a la función para crear el enlace de anclaje
  createAnchorLink();
});

$(document).ready(function(){
  // Función para crear el enlace de anclaje para el botón 'nav-strategy-tab'
  function createStrategyAnchorLink() {
      if ($(window).width() < 768) {
          var contentPosition = $('#nav-strategy').offset().top;
          $('#nav-strategy-tab').click(function() {
              $('html, body').animate({
                  scrollTop: contentPosition
              }, 'slow');
          });
      }
  }

  // Función para crear el enlace de anclaje para el botón 'nav-video-tab'
  function createVideoAnchorLink() {
      if ($(window).width() < 768) {
          var contentPosition = $('#nav-video').offset().top;
          $('#nav-video-tab').click(function() {
              $('html, body').animate({
                  scrollTop: contentPosition
              }, 'slow');
          });
      }
  }

  // Función para crear el enlace de anclaje para el botón 'nav-consum-tab'
  function createConsumAnchorLink() {
      if ($(window).width() < 768) {
          var contentPosition = $('#nav-consum').offset().top;
          $('#nav-consum-tab').click(function() {
              $('html, body').animate({
                  scrollTop: contentPosition
              }, 'slow');
          });
      }
  }

  // Llamar a las funciones para crear los enlaces de anclaje
  createStrategyAnchorLink();
  createVideoAnchorLink();
  createConsumAnchorLink();
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


