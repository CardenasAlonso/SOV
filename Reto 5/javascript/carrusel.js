let contador = 0;

  function moverCarrusel(direccion) {
    const carousel = document.getElementById('carrusel');
    const imagenes = carousel.children.length;
    contador = (contador + direccion + imagenes) % imagenes;
    carousel.style.transform = `translateX(-${contador * 100}%)`;
  }