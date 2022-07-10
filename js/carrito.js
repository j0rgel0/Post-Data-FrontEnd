// console.clear();
let element = document.getElementById("totalPrecio");
let tabla = document.getElementById("tablaListaCompras");
let agregar2 = document.getElementById("btnAgregar");
let contador2 = 0;
let costoTotal = 0;
let total = document.getElementById("precioTotal");
let totalEnProductos = 0;

let botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();
    if (localStorage.getItem("elementosCarrito") != null){
    swal({
        title: "¿Proceder con la compra?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((comprar) => {
        if (comprar) {
          swal("¡Compra realizada!", {
            icon: "success",
          }).then(function(){ 
            location.reload();
            localStorage.clear();
            })
        } else {
        }
      });
    }else{
        swal("Tu carrito está vacio", "", "warning"); //SweetAlert
    }
    
})
botonLimpiar.addEventListener("click", (event)=> {
    event.preventDefault();
    if (localStorage.getItem("elementosCarrito") != null){
    swal({
        title: "¿Borrar carrito de compras?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((comprar) => {
        if (comprar) {
          swal("¡Carrito borrado!", {
            icon: "success",
          }).then(function(){ 
            location.reload();
            localStorage.clear();
            })
        } else {
          
        }
      });
    }else{
        swal("Tu carrito está vacio", "", "warning"); //SweetAlert
    }
    
})

// Arreglo global para almacenar la lista de compras.
let cuerpoTabla = tabla.getElementsByTagName("tbody");

window.addEventListener("load", function () {
    document.getElementById("contadorProductos").innerHTML=contador;
    document.getElementById("productosTotal").innerHTML=contador;

    if (localStorage.getItem("contadorProductosNavBar") != null) {
        contador2 = parseInt(localStorage.getItem("contadorProductos"));
        document.getElementById("contadorProductosNavBar").innerHTML = contador2;
    } // if  contador2Productos

    if (localStorage.getItem("precioTotal")) {
        costoTotal = parseFloat(localStorage.getItem("precioTotal"));
        total.innerHTML = costoTotal;
    } // if precioTotal
    
    if (localStorage.getItem("elementosCarrito") != null) {
        total = 0;
        datos = JSON.parse(localStorage.getItem("elementosCarrito"));
        datos.forEach(element => {
            cuerpoTabla[0].innerHTML += `<tr>
            <th scope="row">${element.id}</th>
            <td>${
                element.nombre
            }</td>
            <td>${
                element.autor
            }</td>
            <td>${
                "$ " + element.precio + " MXN"
            }</td>
            </tr> `;
        }
        );
        
        datos.forEach(element => {
            total+=parseFloat(element.precio);
        }
        );
        document.getElementById("precioTotal").innerHTML ="$"+ total +" MXN";
    }
});