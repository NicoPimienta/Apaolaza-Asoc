// Verificar si es un dispositivo móvil antes de ejecutar la función
if (/Mobi|Android/i.test(navigator.userAgent)) {
    function irASeccion() {
      // Obtener la posición de la sección anclada
      const section = document.getElementById('nav-business');
      const sectionPos = section.offsetTop;

      // Desplazarse suavemente a la posición de la sección
      window.scrollTo({
        top: sectionPos,
        behavior: 'smooth'
      });
    }
  }