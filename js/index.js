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
    let contador2=0;
    datosCarrito = JSON.parse(localStorage.getItem('elementosCarrito')) || [];
    datos = JSON.parse(localStorage.getItem("productos")) ;
    datosObjeto = JSON.parse(localStorage.getItem('objeto')) || [];
    datos.forEach(element => {
        contador2++;
          if(element.isbn == isbn){
           let elemento = `{
            "img" : "${element.img}",
            "nombre" : "${element.nombre}",
            "autor" : "${element.autor}",
            "isbn" : "${element.isbn}",
            "precio" : "${element.precio}",
            "id" : "${contador}"
        }`; 
        console.log(contador2);
        let objeto = `{
            "id" : "${contador2}"
        }`; 
        datosObjeto.forEach(element => { 
            if(element.id == contador2){
                console.log("Ya existe");
            }
        })
        datosObjeto.push(JSON.parse(objeto));
        datosCarrito.push(JSON.parse(elemento));
        localStorage.setItem("elementosCarrito", JSON.stringify(datosCarrito));
        localStorage.setItem("objeto", JSON.stringify(datosObjeto));
        console.log(datosObjeto);
        swal("Producto añadido correctamente", "", "success"); //SweetAlert
       
    }
    });
  }

let cuantosLibros = 5;

if (localStorage.length == 0) {
  window.localStorage.setItem("productos", JSON.stringify(productos));
  window.addEventListener("load", function () {
      datos = JSON.parse(localStorage.getItem("productos")).slice(-cuantosLibros);
      datos.forEach(element => {
          addItem(element);
      });
});
}

if (localStorage.length > 0) {
  window.addEventListener("load", function () {

      datos = JSON.parse(localStorage.getItem("productos")).slice(-cuantosLibros);
      datos.forEach(element => {
          addItem(element); 
      });
});
}

