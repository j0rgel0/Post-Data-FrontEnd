function productosAleatorios() {
    const productos = JSON.parse(localStorage.getItem("productos"));
    for (let index = 0; index < 3; index++) {
        const numeroAleatorio = Math.floor(Math.random() * (productos.length));
        addItem(productos[numeroAleatorio]);
    }
}

function addItem(item) {
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

productosAleatorios();
