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
     datos = JSON.parse(localStorage.getItem("productos"));
     datos.forEach(element => {
         if(element.isbn == isbn){
           let elemento = `{
             "img" : "${element.img}",
             "nombre" : "${element.nombre}",
             "autor" : "${element.autor}",
             "isbn" : "${element.isbn}",
             "precio" : "${element.precio}"
         }`;
         datosCarrito.push(JSON.parse(elemento));
         localStorage.setItem("elementosCarrito", JSON.stringify(datosCarrito));
         }
     });
   }