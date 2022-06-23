let botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();

    const datos = Object.fromEntries(new FormData(document.querySelector("#formEnviar")))   
    const validaciones=[];
    validaciones.nombre= validarLibro(datos.nombre);
    validaciones.autor=validarAutor(datos.autor);
    validaciones.editorial=validarEditorial(datos.editorial);
    validaciones.isbn=validarIsbn(datos.isbn);
    validaciones.urlImagen=validarUrl(datos.urlImagen);
    validaciones.descripcion=validarDescripcion(datos.descripcion);
    validaciones.precio=validarPrecio(datos.precio);
    
    if (Object.values(validaciones).every((value) => value === true)) {
        console.log(datos);  
    }else{
        console.log("Las validaciones estan mal");
    }
});


    




