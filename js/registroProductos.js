let botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();

    const datos = Object.fromEntries(new FormData(document.querySelector("#formEnviar")))   
    console.log(datos);
    const validaciones=[];
    validaciones.nombre= validarLibro(datos.nombre);
    validaciones.autor=validarAutor(datos.autor);
    validaciones.isbn=validarIsbn(datos.isbn);
    validaciones.urlImagen=validarUrl(datos.url);
    validaciones.descripcion=validarDescripcion(datos.descripcion);
    validaciones.precio=validarPrecio(datos.precio);
    
    if (!Object.values(validaciones).every((value) => value === true)) {
        console.log("Ta mal");   
    }
});





