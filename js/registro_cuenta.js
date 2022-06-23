let botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();

    const datos = Object.fromEntries(new FormData(document.querySelector("#formEnviar")))   
    const validaciones=[];
    validaciones.nombre=validarNombre(datos.nombre);








});