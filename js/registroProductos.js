let botonEnviar = document.querySelector("#botonEnviar");
let txtNombre = document.getElementById("nombre");
let txtAutor = document.getElementById("autor");
let txtEditorial = document.getElementById("editorial");
let txtISBN = document.getElementById("isbn");
let txtURL = document.getElementById("urlImagen");
let txtDescripcion = document.getElementById("descripcion");
let txtPrecio = document.getElementById("precio");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();
    const validaciones=[];
     validaciones.nombre= validarLibro(txtNombre.value);
     validaciones.autor=validarAutor(txtAutor.value);
     validaciones.editorial=validarEditorial(txtEditorial.value);
     validaciones.isbn=validarIsbn(txtISBN.value);
     validaciones.img=validarUrl(txtURL.value);
     validaciones.descripcion=validarDescripcion(txtDescripcion.value);
    validaciones.precio=validarPrecio(txtPrecio.value);
     if (Object.values(validaciones).every((value) => value === true) ){
         console.log("Hola");
     }
    let elemento =  `
    {"nombre" : "${txtNombre.value}",
    "autor" : "${txtAutor.value}",
    "img" : "${txtURL.value}",
    "editorial" : "${txtEditorial.value}",
    "descripcion" : "${txtDescripcion.value}",
    "isbn" : "${txtISBN.value}",
    "precio" : "${txtPrecio.value}"}`;
    
    //JSON a JS
    datos = JSON.parse(localStorage.getItem("productos"));
    datos.push(JSON.parse(elemento));

    // Crear de nuevo JSON
    localStorage.setItem("productos", JSON.stringify(datos));

    txtNombre.value = "";
    txtNombre.focus();
    txtAutor.value = "";
    txtEditorial.value = "";
    txtISBN.value = "";
    txtURL.value = "";
    txtDescripcion.value = "";
    txtPrecio.value = "";
});