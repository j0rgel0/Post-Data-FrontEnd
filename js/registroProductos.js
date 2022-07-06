let botonEnviar = document.querySelector("#botonEnviar");
let txtNombre = document.getElementById("nombre");
let txtAutor = document.getElementById("autor");
let txtEditorial = document.getElementById("editorial");
let txtISBN = document.getElementById("isbn");
let txtURL = document.getElementById("urlImagen");
let txtDescripcion = document.getElementById("descripcion");
let txtPrecio = document.getElementById("precio");

function addItem(item){
   const itemHTML = 
       `<div id="contenedorProducto" class="col-md-5 col-lg-3 col-xl-2">
       <img id="imagenProducto" class="card-img-top p-3" src="${item.img}"/>
       <div class="card-text">
           <div class="text-center">
               <h5>${item.nombre}</h5>
               <p>$${item.precio}</p>
           </div>
       </div>
          <a id="botonAnadir" href="#">
           Agregar
           </a>
       </div>
       `;
   const itemsContainer = document.getElementById("list-items");
   itemsContainer.innerHTML += itemHTML;
}

if (localStorage.length == 0) {
   window.localStorage.setItem("productos", JSON.stringify(productos));
   window.addEventListener("load", function () {
       datos = JSON.parse(localStorage.getItem("productos"));
       datos.forEach(element => {
           addItem(element);
       });
});
}

if (localStorage.length > 0) {
   window.addEventListener("load", function () {
       datos = JSON.parse(localStorage.getItem("productos"));
       datos.forEach(element => {
           addItem(element);
       });
});
}

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
     }
    
});