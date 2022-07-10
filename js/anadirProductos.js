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