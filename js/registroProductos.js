let botonEnviar = document.querySelector("#botonEnviar");
let txtNombre = document.getElementById("nombre");
let txtAutor = document.getElementById("autor");
let txtEditorial = document.getElementById("editorial");
let txtISBN = document.getElementById("isbn");
let txtURL = document.getElementById("urlImagen");
let txtDescripcion = document.getElementById("descripcion");
let txtPrecio = document.getElementById("precio");

// Añadir libro
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
        let elemento =  `
        {"nombre" : "${txtNombre.value}",
        "autor" : "${txtAutor.value}",
        "url_imagen" : "${txtURL.value}",
        "editorial" : "${txtEditorial.value}",
        "descripcion" : "${txtDescripcion.value}",
        "isbn" : "${txtISBN.value}",
        "precio" : "${txtPrecio.value}"}`;
        
        /* //Se comenta este codigo como futura referencia, 
            era para guardar en el local storage 
        //JSON a JS
        //datos = JSON.parse(localStorage.getItem("productos"));
        //datos.push(JSON.parse(elemento));
    
        // Crear de nuevo JSON
        //localStorage.setItem("productos", JSON.stringify(datos));
        //swal("Producto añadido correctamente", "", "success"); //SweetAlert
        */

        createProduct(elemento);
        txtNombre.value = "";
        txtNombre.focus();
        txtAutor.value = "";
        txtEditorial.value = "";
        txtISBN.value = "";
        txtURL.value = "";
        txtDescripcion.value = "";
        txtPrecio.value = "";
     }
});

const createProduct = (producto) => {

   fetch('http://localhost:8081/api/products', 
   {
      body: producto,
      method: 'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"}
   })
   .then(response => {
      console.log(response)
      if(response.status != 200) {
         swal("Ocurrio un error al registrar el producto", "", "danger");
      } else {
         swal("Producto añadido correctamente", "", "success");
      }
   })
   .catch(error => {
      swal("Ocurrio un error al registrar el producto", "", "danger");
   });
}