// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Año dinámico en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Referencias a los elementos del formulario
  const form = document.getElementById("contactForm");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const mensajeInput = document.getElementById("mensaje");
  const formMessage = document.getElementById("formMessage");

  // Aseguramos que el formulario exista
  if (!form) return;

  // Agregar event listener al submit del formulario
  form.addEventListener("submit", function (event) {
    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    // Validar que no estén vacíos
    if (!nombre || !email || !mensaje) {
      // Mostrar mensaje de error
      formMessage.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Por favor, completa todos los campos antes de enviar el formulario.
        </div>
      `;
      return;
    }

    // (Opcional) Validación simple de formato de email
    if (!email.includes("@") || !email.includes(".")) {
      formMessage.innerHTML = `
        <div class="alert alert-warning" role="alert">
          El correo electrónico no parece válido. Revisa el formato.
        </div>
      `;
      return;
    }

    // Si todo está OK, mostrar mensaje de éxito
    formMessage.innerHTML = `
      <div class="alert alert-success" role="alert">
        ¡Gracias, ${nombre}! He recibido tu mensaje y te responderé pronto.
      </div>
    `;

    // Limpiar el formulario
    form.reset();
  });
});