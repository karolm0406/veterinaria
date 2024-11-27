// script.js

// Función para mostrar un mensaje de bienvenida al hacer clic en el botón en la página principal
function showWelcomeMessage() {
    alert("¡Gracias por visitar Veterinaria Dogy Dogs! Cuidamos de tus mascotas con amor y dedicación.");
}

// Agregar evento para mostrar el mensaje de bienvenida al hacer clic en el botón
document.addEventListener("DOMContentLoaded", () => {
    const welcomeButton = document.querySelector("button");
    if (welcomeButton) {
        welcomeButton.addEventListener("click", showWelcomeMessage);
    }
});

// Validación del formulario de contacto y mensaje de confirmación al enviar
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que se recargue la página al enviar el formulario

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;
            const formMessage = document.getElementById("formMessage");

            if (nombre && email && mensaje) {
                formMessage.innerHTML = "<p>¡Gracias por contactarnos, " + nombre + "! Te responderemos pronto.</p>";
                formMessage.style.color = "green";
                contactForm.reset(); // Limpia el formulario
            } else {
                formMessage.innerHTML = "<p>Por favor, completa todos los campos.</p>";
                formMessage.style.color = "red";
            }
        });
    }
});

// Mensaje emergente al hacer clic en un servicio en la página de servicios
document.addEventListener("DOMContentLoaded", () => {
    const servicios = document.querySelectorAll(".servicio");
    servicios.forEach(servicio => {
        servicio.addEventListener("click", () => {
            const serviceName = servicio.querySelector("h3").innerText;
            alert("Has seleccionado el servicio: " + serviceName);
        });
    });
});
