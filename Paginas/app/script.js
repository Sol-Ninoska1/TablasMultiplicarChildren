

function validarCorreo(event) {
    var correo = document.getElementById("correo").value;
  
    // Expresión regular para validar el formato del correo
    var regex = /(@gmail\.com|@hotmail\.com|@outlook\.com)$/;
  
    if (!regex.test(correo)) {
        // El correo no tiene el formato deseado
        alertify.alert('Error', 'El correo electrónico no es válido.', function() {
            alertify.success('Ok');
        });
      
        event.preventDefault(); 
    }
}

function validarRut(RUT) {
    RUT = RUT.replace(/\./g, "").replace("-", "").toUpperCase();
    var dv = RUT.slice(-1);
    var rutNumber = RUT.slice(0, -1);
    var suma = 0;
    var multiplicador = 2;

    for (var i = rutNumber.length - 1; i >= 0; i--) {
        suma += parseInt(rutNumber.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    var resultado = 11 - (suma % 11);
    resultado = resultado === 11 ? "0" : resultado === 10 ? "K" : resultado.toString();
    return resultado === dv;
}

function validarfoto(fotoInput) {
    return fotoInput.files.length > 0;
}

function mostrarImagen(event) {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function () {
        const imagenMostrada = document.getElementById("imagenMostrada");
        if (imagenMostrada) {
            imagenMostrada.src = reader.result;
            imagenMostrada.style.display = "block";
            localStorage.setItem("imagenAdjunta", reader.result);
        }
    };

    if (input.files[0]) {
        reader.readAsDataURL(input.files[0]);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            var rutInput = document.getElementById("rut");
            var fotoInput = document.getElementById("foto");

            var validationResult = validarRut(rutInput.value);
            var validationResultfoto = validarfoto(fotoInput);

            if (!validationResult) {
                alertify.alert('Error', 'El RUT ingresado no es válido.', function() {
                    alertify.error('Ok');
                });
                event.preventDefault();
                return; // Detiene el envío del formulario si el RUT no es válido
            }

            if (!validationResultfoto) {
                alertify.alert('Error', 'Ingrese una imagen.', function() {
                    alertify.error('Ok');
                });
                event.preventDefault();
                return; // Detiene el envío del formulario si la imagen no es válida
            }

            // Si todo es válido, redirigir
            redirigirPagina4();
            event.preventDefault(); // Evita el envío del formulario para redirigir manualmente
        });
    } else {
        console.error("No se encontró ningún formulario.");
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    const imagenMostrada = document.getElementById("imagenMostrada");
    const imagenAdjuntada = document.getElementById("imagenAdjuntada");

    if (imagenMostrada && imagenAdjuntada) {
        const urlDeImagen = imagenAdjuntada.value;

        if (urlDeImagen) {
            imagenMostrada.src = urlDeImagen;
            imagenMostrada.style.display = "block";
        }
    }
});


  function redirigirPagina4() {
    window.location.href = "pagina4.html"; 
}

