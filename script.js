// Validación y respuesta del formulario de contacto
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (!nombre || !comentario) {
    mostrarAlerta("Por favor completa todos los campos antes de enviar.", "error");
    return;
  }

  mostrarAlerta("Gracias por tu comentario, " + nombre + "!", "exito");
  form.reset();
});

// Desplazamiento suave al hacer clic en los enlaces del menú
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
  enlace.addEventListener("click", function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({ behavior: "smooth" });
  });
});

// Función para mostrar alertas personalizadas
function mostrarAlerta(mensaje, tipo) {
  const alerta = document.createElement("div");
  alerta.textContent = mensaje;
  alerta.style.padding = "10px";
  alerta.style.marginTop = "10px";
  alerta.style.borderRadius = "5px";
  alerta.style.textAlign = "center";
  alerta.style.fontWeight = "bold";
  alerta.style.transition = "opacity 0.5s ease";

  if (tipo === "exito") {
    alerta.style.backgroundColor = "#d4edda";
    alerta.style.color = "#155724";
  } else {
    alerta.style.backgroundColor = "#f8d7da";
    alerta.style.color = "#721c24";
  }

  form.appendChild(alerta);

  setTimeout(() => {
    alerta.style.opacity = "0";
    setTimeout(() => alerta.remove(), 500);
  }, 3000);
}

// Función para mostrar la hora actual en el pie de página
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const horaActual = new Date().toLocaleTimeString();
  const reloj = document.createElement("p");
  reloj.textContent = `Hora actual: ${horaActual}`;
  reloj.style.fontStyle = "italic";
  footer.appendChild(reloj);
});