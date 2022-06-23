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