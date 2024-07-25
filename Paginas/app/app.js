
  function redirigirPagina2() {
    var numero1 = document.getElementById("quantity").value;
    var numero2 = document.getElementById("end").value;

    if (numero1 === "" || numero2 === "") {
      alertify.alert('Atención', 'Debe ingresar números en ambos recuadros.', function() {
        alertify.success('Ok');
      });
      return;
    }


    if (isNaN(numero1) || isNaN(numero2)) {
      alertify.alert('Error', 'Debe ingresar números válidos en ambos recuadros.', function() {
        alertify.success('Ok');
      });
      return;
    }

    if (numero1 === numero2) {
      alertify.alert('Error', 'El primer recuadro debe ser diferente al segundo.', function() {
        alertify.success('Ok');
      });
      return;
    }

    if (numero2 > numero1) {
      alertify.alert('Error', 'El primer recuadro debe ser mayor al segundo.', function() {
        alertify.success('Ok');
      });
      return;
    }

    window.location.href = "Paginas/pagina/pagina2.html?numero1=" + numero1 + "&numero2=" + numero2;
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("tablaMultiplicar");
  
    if (container) {
      var urlParams = new URLSearchParams(window.location.search);
      var numero1 = parseInt(urlParams.get("numero1"));
      var numero2 = parseInt(urlParams.get("numero2"));
      console.log("URL Search Params:", window.location.search);
      console.log("Parsed numero1:", numero1);
      console.log("Parsed numero2:", numero2);
      if (!isNaN(numero1) && !isNaN(numero2)) {
        for (var i = numero1; i >= numero2; i--) { // Adjusted the loop to iterate from numero1 to numero2 in reverse
          var table = document.createElement("table");
          for (var j = 1; j <= 10; j++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.textContent = "Tabla del " + i + ":";
            cell2.textContent = i + " x " + j + " = " + i * j;
          }
          container.appendChild(table);
          container.appendChild(document.createElement("br")); // Optional: Adds a line break between tables
        }
      } else {
        console.error("Los parámetros 'numero1' y 'numero2' no son válidos o están ausentes.");
      }
    } else {
      console.error("No se encontró el contenedor 'tablaMultiplicar'.");
    }
  });
  
  

function redirigirPagina3() {
      window.location.href = "Paginas/pagina/pagina3.html"; 
}
document.getElementById("volverInicio").addEventListener("click", function() {
  window.location.href = "../../index.html";
});
