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

let botonAgregar = document.querySelector("#botonAgregar");
botonAgregar.addEventListener("click", (event)=> {
    event.preventDefault();

    const form = document.querySelector("#formAgregar");
    const nombre = form.nombre.value;
    const autor = form.autor.value;
    const isbn = form.isbn.value;
    const descripcion = form.descripcion.value;
    const urlImagen = form.urlImagen.value;
    const precio = form.precio.value;

    const product = {nombre,autor,isbn,descripcion,urlImagen,precio};
    console.log(product);
});




