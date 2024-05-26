document.getElementById('image').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.getElementById('thumbnail');
            img.src = e.target.result;
            img.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('consultaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const tipoConsulta = document.getElementById('tipoConsulta').value;
    const mensaje = document.getElementById('mensaje').value;
    const suscripcion = document.querySelector('input[name="suscripcion"]:checked');

    const emailVerificacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const letrasVerificacion = /^[a-zA-Z\s]+$/;

    if (!emailVerificacion.test(email)) {
        alert('Por favor, ingrese un email válido.');
        return;
    }

    if (!letrasVerificacion.test(nombre)) {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    if (!letrasVerificacion.test(apellido)) {
        alert('Por favor, ingrese un apellido válido.');
        return;
    }

    if (confirm('¿Desea completar el envío?')) {
        alert('Formulario enviado con éxito.');
    } else {
        alert('Envío cancelado.');
    }
});
