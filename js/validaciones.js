function validarCadena(valor, nombreCampo){
    let success = false;

    if (!isNaN(valor)) {
        document.getElementById(`error${nombreCampo}`).innerHTML = `Tu ${nombreCampo} no debe contener números.<br>`;
    } else if (valor.length < 3) {
        document.getElementById(`error${nombreCampo}`).innerHTML = `Tu ${nombreCampo} debe de tener más de 3 caracteres.<br>`;
    } else if (valor.length === 0) {
        document.getElementById(`error${nombreCampo}`).innerHTML = `Debes ingresar un ${nombreCampo} válido.<br>`;
    } else {
        success = true;
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