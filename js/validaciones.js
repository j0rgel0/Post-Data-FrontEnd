function validarCadena(valor, nombreCampo){
    let success = false;

    if ((valor.length < 3) || !isNaN(valor) ){
        document.getElementById(`error${nombreCampo}`).innerHTML = `Tu ${nombreCampo} no es correcto .<br>`;
    }

    return success;
}
// Función utilizando expresiones regulares para validar email
function validarEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const success = regex.test(email); 
    if(!success) {
        document.getElementById("errorEmail").innerHTML = "El correo no está correcto.<br>";
    } 
    return success;
}

function validarTelefono(telefono) {
    let regex = /^[(]{0,1}[0-9]{2}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/;
    const success = regex.test(telefono); 
    if(!success) {
        document.getElementById("errorTelefono").innerHTML = "El telefono no está correcto.<br>";
    } 
    return success;
}

function validarLibro(libro) {
    let regex = /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/;
    const success = regex.test(libro); 
    if(!success) {
        document.getElementById("errorLibro").innerHTML = "El libro no está correcto.<br>";
    } else{
        document.getElementById("errorLibro").innerHTML = "";}
    return success;
}

function validarAutor(autor) {
    let regex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
    const success = regex.test(autor); 
    if(!success) {
        document.getElementById("errorAutor").innerHTML = "El Autor no está correcto.<br>";
    } else{
    document.getElementById("errorAutor").innerHTML = "";}

    return success;
}

function validarIsbn(isbn) {
    let regex = /((?:[\dX]{13})|(?:[\d\-X]{17})|(?:[\dX]{10})|(?:[\d\-X]{13}))/;
    const success = regex.test(isbn); 
    if(!success) {
        document.getElementById("errorisbn").innerHTML = "El ISBN no está correcto.<br>";
    } else{
        document.getElementById("errorisbn").innerHTML = "";}
    return success;
}


function validarUrl(url) {
    let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
    const success = regex.test(url); 
    if(!success) {
        document.getElementById("errorImagen").innerHTML = "El URL no está correcto.<br>";
    } else{
        document.getElementById("errorImagen").innerHTML = "";}
    return success;
}

function validarDescripcion(descripcion) {
    let regex = /[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]/;
    const success = regex.test(descripcion); 
    if(!success) {
        document.getElementById("errorDescripcion").innerHTML = "La descripción no está correcta.<br>";
    } else{
        document.getElementById("errorDescripcion").innerHTML = "";}
    return success;
}

function validarPrecio(precio) {
    let regex = /^[0-9]+([\,]?[\s, \d]?[0-9]+)?(\.[0-9]{1,2})?$/;
    const success = regex.test(precio); 
    if(!success) {
        document.getElementById("errorPrecio").innerHTML = "El precio no está correcto.<br>";
    } else{
        document.getElementById("errorPrecio").innerHTML = "";}
    return success;
}




