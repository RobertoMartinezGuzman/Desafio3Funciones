function pintar(texto, color = "green") {
    texto.style.backgroundColor = color;
      }
      texto = document.getElementById("texto");
      texto.addEventListener("click", function() {
        pintar(texto, "yellow");
      });
    