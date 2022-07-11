const botonBuscar = document.querySelector("#botonBuscar");
const txtId = document.getElementById("IdLibro");
const itemsContainer = document.getElementById("list-items");

botonBuscar.addEventListener("click", (event) => {
    event.preventDefault();

    const cadenaProductos = localStorage.getItem('productos');
    if (cadenaProductos && cadenaProductos.length > 0) {
        const productos = JSON.parse(cadenaProductos);
        let producto = null;
        for (let i = 0; i < productos.length; i++) {
            const recuperado = productos[i];
            if (recuperado["id"] == txtId.value) {
                producto = recuperado;
                break;
            }
        }
        if (producto) {
            addItem(producto);
        } else {
            console.log('No existe el producto!!!!');
            itemsContainer.innerHTML = null;
        }
        txtId.value = null;
    }
});


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
            Eliminar
            </a>
        </div>
        `;
    itemsContainer.innerHTML = itemHTML;
}
