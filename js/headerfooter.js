function header(){
    const headerHTML = 
        `<img class="navbar-brand logo" src="./img/logo.png" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav mr-auto">
    
            <!-- Liga a página de Inicio -->
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Inicio <span class="sr-only">(current)</span></a>
            </li>
    
            <!-- Liga a página de Nosotros -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nosotros</a>
                
                <!-- Para generar otro enlace en el menú crea otro contenedor div. -->
                <div class="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="./acerca.html">Acerca de Nosotros</a>
                  <a class="dropdown-item" href="./conocenos/">Sobre el proyecto</a>
                </div>
            </li>
    
            <!-- Liga a página de Productos -->
            <li class="nav-item">
              <a class="nav-link" href="./productos.html">Productos</a>
            </li>
    
            <!-- Liga a página de contacto -->
            <li class="nav-item">
              <a class="nav-link" href="./contacto.html">Contacto</a>
            </li>
    
            <!-- Liga a página de Login y Registro -->
            <li class="nav-item dropdown">
                <a class="nav-item dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img id="imagenUserMenu" src="./img/user.png"></a>
                
                <!-- Para generar otro enlace en el menú crea otro contenedor div. -->
                <div class="dropdown-menu dropdown" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="./login.html">Inicio de sesión</a>
                  <a class="dropdown-item" href="./registro_cuenta.html">Registro</a>
                </div>
            </li>

            <!-- Apartado Shopping Cart -->
            <div class="d-flex">
              <a id="carritoNavbar" class="nav-link" href="./carrito.html">
                <button class="btn btn-outline-dark carrito">
                    <i class="bi-cart-fill me-1"></i>
                    <span id="contadorProductosNavBar" class="badge bg-dark text-white ms-1 ">0</span>
                </button>
              </a>
            </div>
            <!-- Apartado Shopping Cart -->

            </li>
          </ul>
        </div>
        
        `;
    const itemsContainer = document.getElementById("header");
    itemsContainer.innerHTML += headerHTML;
}

function footer(){
    const footerHTML = 
        `      <img id="logoFooter" src="./img/logo.png">

        <div style="text-align: center;">
          <a class="enlacesFooter" href="./contacto.html" style="color: #405bf5">Contacto</a>
          <a class="enlacesFooter" href="./acerca.html" style="color: #405bf5">Sobre nosotros</a>
        </div>
  
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a href="https://www.facebook.com/"><img src="./img/facebook.png" hspace="20" width="20" height="20"></a>
          </li>
          <li class="nav-item">
            <a href="https://www.twitter.com/"><img src="./img/twitter.png" hspace="20" width="20" height="20"></a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/"><img src="./img/instagram.png" hspace="20" width="20" height="20"></a>
          </li>
  
        </ul>
        `;
    const itemsContainer = document.getElementById("footer");
    itemsContainer.innerHTML += footerHTML;
}

header();
footer();

let contador = 0;
let agregar = document.getElementById("btnAgregar");
let datosCarrito = [];

//Cargando se actualiza el número de productos añadidos.
if (localStorage.getItem("contadorProductos")<=0) {
  contador=0;
  localStorage.setItem("contadorProductos", contador)
} // if  contadorProductos

contador = parseInt(localStorage.getItem("contadorProductos"));
document.getElementById("contadorProductosNavBar").innerHTML = contador;
// document.getElementById("contadorProductosModal").innerHTML = contador;
//