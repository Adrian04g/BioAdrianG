const form = document.querySelector(".formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const correo = document.getElementById('correo').value;

    console.log("Nombre:", nombre);
    console.log("Descripcion:", descripcion);
    console.log("Correo:", correo);

    alert("Hola " + nombre + ", su correo es " + correo + "\n su motivo de contacto es: " + descripcion);
});
