function validarCadena(valor, nombreCampo){
    let success = (valor.length < 3) || !isNaN(valor) ? false : true;
    if (!success){
        document.getElementById(`error${nombreCampo}`).style = 'display';
        document.getElementById(`error${nombreCampo}`).innerHTML = `Tu ${nombreCampo} no es correcto .<br>`;
    } else {
        document.getElementById(`error${nombreCampo}`).style = 'display:none';
    }
    return success;
}
// Función utilizando expresiones regulares para validar email
function validarEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const success = regex.test(email); 
    if(!success) {
        document.getElementById("errorEmail").style = 'display';
        document.getElementById("errorEmail").innerHTML = "El correo no está correcto.<br>";
    } else {
        document.getElementById("errorEmail").style = 'display:none';
    }
    return success;
}

function validarTelefono(telefono) {
    let regex = /^[(]{0,1}[0-9]{2}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/;
    const success = regex.test(telefono); 
    if(!success) {
        document.getElementById("errorTelefono").style = 'display';
        document.getElementById("errorTelefono").innerHTML = "El telefono no está correcto.<br>";
    } else {
        document.getElementById("errorTelefono").style = 'display:none';
    }
    return success;
}

function validarLibro(libro) {
    let regex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
    const success = regex.test(libro); 
    if(!success) {
        document.getElementById("errorLibro").style= "display";
        document.getElementById("errorLibro").innerHTML = "El libro no está correcto.<br>";
    } else{
        document.getElementById("errorLibro").style= "display: none";
    }
    return success;
}

function validarAutor(autor) {
    let regex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
    const success = regex.test(autor); 
    if(!success) {
        document.getElementById("errorAutor").style = "display";
        document.getElementById("errorAutor").innerHTML = "El Autor no está correcto.<br>";
    } else{
        document.getElementById("errorAutor").style = "display: none";
        }

    return success;
}

function validarEditorial(editorial) {
    let regex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
    const success = regex.test(editorial); 
    if(!success) {
        document.getElementById("errorEditorial").style = "display";
        document.getElementById("errorEditorial").innerHTML = "La editorial no está correcta.<br>";
    } else{
        document.getElementById("errorEditorial").style = "display: none";
    }

    return success;
}

function validarIsbn(isbn) {
    let regex = /((?:[\dX]{13})|(?:[\d\-X]{17})|(?:[\dX]{10})|(?:[\d\-X]{13}))/;
    const success = regex.test(isbn); 
    if(!success) {
        document.getElementById("errorisbn").style = "display";
        document.getElementById("errorisbn").innerHTML = "El ISBN no está correcto.<br>";
    } else{
        document.getElementById("errorisbn").style = "display: none";
    }
    return success;
}


function validarUrl(url) {
    let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
    const success = regex.test(url); 
    if(!success) {
        document.getElementById("errorImagen").style = "display";
        document.getElementById("errorImagen").innerHTML = "El URL no está correcto.<br>";
    } else{
        document.getElementById("errorImagen").style = "display: none";
    }
    return success;
}

function validarDescripcion(descripcion) {
    let regex = /[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]/;
    const success = regex.test(descripcion); 
    if(!success) {
        document.getElementById("errorDescripcion").style = "display";
        document.getElementById("errorDescripcion").innerHTML = "La descripción no está correcta.<br>";
    } else{
        document.getElementById("errorDescripcion").style = "display: none";
    }
    return success;
}

function validarPrecio(precio) {
    let regex = /^[0-9]+([\,]?[\s, \d]?[0-9]+)?(\.[0-9]{1,2})?$/;
    const success = regex.test(precio); 
    if(!success) {
        document.getElementById("errorPrecio").style = "display";
        document.getElementById("errorPrecio").innerHTML = "El precio no está correcto.<br>";
    } else{
        document.getElementById("errorPrecio").style = "display: none";
    }
    return success;
}

function validarNombre(nombre) {
    let regex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
    const success = regex.test(nombre); 
    if(!success) {
        document.getElementById("errorNombre").style = 'display';
        document.getElementById("errorNombre").innerHTML = "El nombre no está correcto.<br>";
    } else {
        document.getElementById("errorNombre").style = 'display:none';
    }
    return success;
}

function validarUsuario(usuario) {
    let regex = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/;
    const success = regex.test(usuario); 
    if(!success) {
        document.getElementById("errorAutor").style = 'display';
        document.getElementById("errorAutor").innerHTML = "El usuario no está correcto.<br>";
    } else{
        document.getElementById("errorNombre").style = 'display:none';
    }
    return success;
}
 
function validarContraseña(contraseña) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const success = regex.test(contraseña); 
    if(!success) {
        document.getElementById("errorContrasena").style = 'display';
        document.getElementById("errorContrasena").innerHTML = "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número.<br>";
    } else{
        document.getElementById("errorContrasena").style = 'display:none';
    }
    return success;
}

function validarConfirmaTuContrasena(contrasena,repiteContrasena){
    const success = contrasena === repiteContrasena ? true : false;
    if(!success) {
        document.getElementById("errorContrasenaConfirma").style = 'display';
        document.getElementById("errorContrasenaConfirma").innerHTML = "Las contraseñas no coinciden.<br>";
    } else{
        document.getElementById("errorContrasenaConfirma").style = 'display: none';
    }
    return success;
}




