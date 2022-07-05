let botonEnviar = document.querySelector("#botonEnviar");
let txtNombre = document.getElementById("nombre");
let txtEmail = document.getElementById("email");
let txtContrasena = document.getElementById("contrasena");
let txtContrasenaConfirma = document.getElementById("contrasenaConfirma");
let datos=[];

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();
    const validaciones=[];
    validaciones.nombre=validarNombre(txtNombre.value);
    validaciones.email=validarEmail(txtEmail.value);
    validaciones.contraseña=validarContraseña(txtContrasena.value);
    validaciones.contraseniaValidada=validarConfirmaTuContrasena(txtContrasena.value,txtContrasenaConfirma.value);
    
    let usuario=JSON.parse(localStorage.getItem("usuario"));

    const listaUsuarios=usuario.filter(usuario => usuario.email == txtEmail.value);
    console.log(listaUsuarios);
    if (listaUsuarios[0]) {
        document.getElementById("errorValidacion").style = 'display';
        document.getElementById("errorValidacion").innerHTML = "Ya existe una cuenta con este correo.<br>";
    } else{
        document.getElementById("errorValidacion").style = 'display: none';
        if (Object.values(validaciones).every((value) => value === true) ){
    
            let elemento =  `
            {"nombre" : "${txtNombre.value}",
            "email" : "${txtEmail.value}",
            "contrasenia" : "${txtContrasena.value}"}`;
    
            datos.push(JSON.parse(elemento))
            
            swal("¡Adelante!", "Cuenta creada exitosamente", "success"); //SweetAlert
            
            // Crear un nuevo JSON
            localStorage.setItem("usuario", JSON.stringify(datos));
        
            txtNombre.value = "";
            txtNombre.focus();
    
        
            txtEmail.value = "";
            txtContrasena.value = "";
            txtContrasenaConfirma.value ="";
        }
    }
});