document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-contacto");
  const contenedorContactos = document.getElementById("contactos-container");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !asunto || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const card = document.createElement("div");
    card.classList.add("card-contacto");

    card.innerHTML = `
      <h3>${nombre}</h3>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;

    contenedorContactos.appendChild(card);

    formulario.reset();
  });
});
