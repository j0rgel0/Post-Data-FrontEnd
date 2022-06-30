let botonEnviar = document.querySelector("#botonEnviar");
let txtNombre = document.getElementById("nombre");
let txtEmail = document.getElementById("email");
let txtContrasena = document.getElementById("contrasena");
let txtContrasenaConfirma = document.getElementById("contrasenaConfirma");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();
    const validaciones=[];
    validaciones.nombre=validarNombre(txtNombre.value);
    validaciones.email=validarEmail(txtEmail.value);
    validaciones.contraseña=validarContraseña(txtContrasena.value);
    validaciones.contraseniaValidada=validarConfirmaTuContrasena(txtContrasena.value,txtContrasenaConfirma.value);
    console.log(validaciones);

    if (Object.values(validaciones).every((value) => value === true) ){
        let datos =  `
        {"nombre" : "${txtNombre.value}",
        "email" : "${txtEmail.value}",
        "contrasenia" : "${txtContrasena.value}"}`;
        
<<<<<<< HEAD
=======
        swal("¡Adelante!", "Cuenta creada exitosamente", "success"); //SweetAlert
        
>>>>>>> a3564ec (Se añadio Sweetalert a contacto y registro usuario)
        // Crear un nuevo JSON
        localStorage.setItem("usuario", JSON.stringify(datos));
    
        txtNombre.value = "";
        txtNombre.focus();

    
        txtEmail.value = "";
        txtContrasena.value = "";
        txtContrasenaConfirma.value ="";
    }

});