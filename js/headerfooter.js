function header(){
    const headerHTML = 
        `<img class="navbar-brand logo" src="./img/logo.png" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
    
            <!-- Liga a página de Inicio -->
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Inicio <span class="sr-only">(current)</span></a>
            </li>
    
            <!-- Liga a página de Nosotros -->
            <li class="nav-item">
              <a class="nav-link" href="./acerca.html">Nosotros</a>
            </li>

            <!-- Liga a página de Conócenos -->
            <li class="nav-item">
              <a class="nav-link" href="./conocenos/">Conócenos</a>
            </li>
    
            <!-- Liga a página de Productos -->
            <li class="nav-item">
              <a class="nav-link" href="./productos.html">Productos</a>
            </li>
    
            <!-- Liga a página de contacto -->
            <li class="nav-item">
              <a class="nav-link" href="./contacto.html">Contacto</a>
            </li>
    
            <!-- Liga a página de login -->
            <li class="nav-item">
              <a class="nav-link" href="./login.html">Login</a>
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