contador = parseInt(localStorage.getItem("contadorProductos"));
document.getElementById("contadorProductosModal").innerHTML = contador;

// Botón que añade producto
btnAgregar.addEventListener("click", (event) => {
    event.preventDefault();
    
    // Se suma en 1
    contador++;
    //
    
    //Imprime el contador de los productos en el carrito de compras
    document.getElementById("contadorProductosNavBar").innerHTML = contador;
    document.getElementById("contadorProductosModal").innerHTML = contador;
    localStorage.setItem("contadorProductos", contador);
    //
    let isbn = document.getElementsByClassName("modalISBNhide")[0].value;
    
    cargarCarrito(isbn);
    
    });
    
    
    