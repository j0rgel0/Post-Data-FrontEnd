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
       `<div id="contenedorProducto" class="d-flex flex-column card-deck col-md-5 col-lg-3 col-xl-2" data-toggle="modal" data-target="#isbn" onclick="cargarModal(${item.isbn})">
        <img id="imagenProducto" class="card-img-top mt-2" src="${item.img}"/>

            <div class="card-body">
                <div class="text-center">
                    <h5>${item.nombre}</h5>
                    <h6 class="text-muted"> de ${item.autor}</h6>
                </div>
            </div>

            <div class="card-footer text-muted mx-auto">
                <div class="text-center">
                    <h6>$${item.precio} MXN</h6>        
                </div>
                <button type="button" class="btn btn-outline-dark mt-auto">Ver</button>
            </div>
       </div>
       `;
   const itemsContainer = document.getElementById("list-items");
   itemsContainer.innerHTML += itemHTML;
}

function cargarModal(isbn){
    datos = JSON.parse(localStorage.getItem("productos"));
    datos.forEach(element => {
        if(element.isbn == isbn){
            document.getElementsByClassName("modalImagen")[0].src = element.img;
            document.getElementsByClassName("modalNombre")[0].innerHTML = element.nombre;
            document.getElementsByClassName("modalAutor")[0].innerHTML = "de " + element.autor;
            document.getElementsByClassName("modalISBN")[0].innerHTML = "<strong>ISBN:</strong> " + element.isbn;
            document.getElementsByClassName("modalISBNhide")[0].value = element.isbn;
            document.getElementsByClassName("modalDescripcion")[0].innerHTML ="<strong>Sinopsis: </strong>"+element.descripcion;
            document.getElementsByClassName("modalPrecio")[0].innerHTML = "$ "+element.precio+" MXN";
            }
    });
}

function cargarCarrito(isbn){
    datos = JSON.parse(localStorage.getItem("productos"));
    datos.forEach(element => {
        if(element.isbn == isbn){
          let elemento = `{
            "img" : "${element.img}",
            "nombre" : "${element.nombre}",
            "autor" : "${element.autor}",
            "isbn" : "${element.isbn}",
            "precio" : "${element.precio}"
        }`;
        datosCarrito.push(JSON.parse(elemento));
        localStorage.setItem("elementosCarrito", JSON.stringify(datosCarrito));
        }
    });
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