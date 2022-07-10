let botonEnviar = document.querySelector("#botonEnviar");
let txtEmail = document.getElementById("email");
let txtContrasena = document.getElementById("contrasena");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();
    const validaciones=[];
    validaciones.email=validarEmail(txtEmail.value);
    validaciones.contraseña=validarContraseña(txtContrasena.value);

    // let usuario=localStorage.getItem("usuario")
    // console.log(usuario);
     let usuario=JSON.parse(localStorage.getItem("usuario"));
     const listaUsuarios=usuario.filter(usuario => usuario.email === txtEmail.value && usuario.contrasenia=== txtContrasena.value);
    console.log(listaUsuarios);
    
    if (listaUsuarios[0]) {
        console.log("Chi chenol");
        document.getElementById("errorValidacion").style = 'display: none';
        window.location.href= "index.html"

    }else{
        document.getElementById("errorValidacion").style = 'display';
        document.getElementById("errorValidacion").innerHTML = "El correo o la contraseña son incorrectos.<br>";
    }
    // console.log(usuario2);

});