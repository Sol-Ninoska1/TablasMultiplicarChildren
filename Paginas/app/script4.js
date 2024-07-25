function mostrarImagen(event) {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function() {
      const imagenMostrada = document.getElementById('imagenMostrada');
      imagenMostrada.src = reader.result;
      imagenMostrada.style.display = 'block'; // Mostrar la imagen

      localStorage.setItem('imagenAdjunta', reader.result);
    };

    reader.readAsDataURL(input.files[0]);
  }

  // Recupera la imagen del almacenamiento local
  const imagenAdjunta = localStorage.getItem('imagenAdjunta');

  if (imagenAdjunta) {
    // Muestra la imagen en la página 4
    const imagenMostrada = document.getElementById('imagenEnPagina4');
    imagenMostrada.src = imagenAdjunta;
    imagenMostrada.style.display = 'block';
  }