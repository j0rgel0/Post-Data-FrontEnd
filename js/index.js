

function productosNovedades() {
    const productos = JSON.parse(localStorage.getItem("productos")).slice(-4);
    for (let index = 0; index < 4; index++) {
        addItem(productos[index]);
    }
}



function addItem(item) {
  const itemHTML =`<div class="col-lg-3 col-md-6 mb-3 justify-content-center)">
  <div class="card h-100">
  <div class="img-container d-flex justify-content-center h-75 p-2">
  <img src="${item.img}" alt="" class="image card-img-top" style="width: min(300px, 70%); height: min(25rem, 100%);">  
  </div>
  <div class="card-body h-25 d-flex flex-column justify-content-center align-items-center mt-3 mb-2" style="min-height: fit-content;">
  <h5 class="card-title text-center">${item.nombre}</h5>
  <h6 class="card-subtitle text-muted text-center">$${item.precio}</h6>
  </div>
  </div>
  </div>`
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

productosNovedades();

