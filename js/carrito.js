// console.clear();
let element = document.getElementById("totalPrecio");
let tabla = document.getElementById("tablaListaCompras");
let agregar = document.getElementById("btnAgregar");
let contador = 0;
let costoTotal = 0;
let total = document.getElementById("precioTotal");
let totalEnProductos = 0;

// Arreglo global para almacenar la lista de compras.
let datosCarrito = [];

    agregar.addEventListener("click", (event) => {
    event.preventDefault();
    contador++;

    //Imprime el contador de los productos en el carrito de compras
    document.getElementById("contadorProductosNavBar").innerHTML = contador;
    localStorage.setItem("contadorProductosNavBar", contador);

    document.getElementById("contadorProductos").innerHTML = contador;
    localStorage.setItem("contadorProductos", contador);
    //

    let precio = ((Math.round((Math.random() * 50) * 100)) / 100);
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos += (cantidad < 1) ? Math.ceil(cantidad) : parseInt(cantidad);
    document.getElementById("productosTotal").innerHTML = totalEnProductos;
    localStorage.setItem("productosTotal", totalEnProductos);
    costoTotal += (precio * cantidad);
    // total.innerHTML = "$ "+costoTotal;
    total.innerHTML = `$ ${
        costoTotal.toFixed(2)
    }`;
    localStorage.setItem("precioTotal", costoTotal.toFixed(2));

    let productoCarrito = `{
        "img" : "${element.img}",
        "nombre" : "${element.nombre}",
        "autor" : "${element.autor}",
        "isbn" : "${element.isbn}",
        "precio" : "${element.precio}"
    }`;

    datosCarrito.push(JSON.parse(productoCarrito));
    localStorage.setItem("elementosTabla", JSON.stringify(datosCarrito));
    
    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td>${
        txtNombre.value
    }</td>
    <td>${
        txtNumber.value
    }</td>
    <td>${
        "$ " + precio
    }</td>
    </tr> `;

    console.log(agregar);
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value = "";
    txtNombre.value = "";
    txtNombre.focus();

});

window.addEventListener("load", function () {
    if (localStorage.getItem("contadorProductos") != null) {
        contador = parseInt(localStorage.getItem("contadorProductos"));
        document.getElementById("contadorProductos").innerHTML = contador;
    } // if  contadorProductos

    if (localStorage.getItem("contadorProductosNavBar") != null) {
        contador = parseInt(localStorage.getItem("contadorProductos"));
        document.getElementById("contadorProductosNavBar").innerHTML = contador;
    } // if  contadorProductos

    if (localStorage.getItem("productosTotal")) {
        totalEnProductos = parseInt(localStorage.getItem("productosTotal"));
        document.getElementById("productosTotal").innerHTML = totalEnProductos;
    } // if productosTotal

    if (localStorage.getItem("precioTotal")) {
        costoTotal = parseFloat(localStorage.getItem("precioTotal"));
        total.innerHTML = costoTotal;
    } // if precioTotal
    
    if (localStorage.getItem("elementosTabla") != null) {
        datos = JSON.parse(localStorage.getItem("elementosTabla"));
        datos.forEach(element => {
            cuerpoTabla[0].innerHTML += `<tr>
            <th scope="row">${element.id}</th>
            <td>${
                element.nombre
            }</td>
            <td>${
                element.cantidad
            }</td>
            <td>${
                "$ " + element.precio
            }</td>
            </tr> `;
        });

    }
});
