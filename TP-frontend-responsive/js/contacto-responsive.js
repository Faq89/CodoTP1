document.getElementById('consultaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const tipoConsulta = document.getElementById('tipoConsulta').value;
    const mensaje = document.getElementById('mensaje').value;
    const suscripcion = document.querySelector('input[name="suscripcion"]:checked');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese un email válido.');
        return;
    }

    if (confirm('¿Desea completar el envío?')) {
        alert('Formulario enviado con éxito.');

    } else {
        alert('Envío cancelado.');
    }
});
