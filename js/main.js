let botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();

    const form = document.querySelector("#formEnviar");
    const nombre = form.nombre.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const mensaje = form.mensaje.value;
    const error = document.querySelectorAll(".error");

   const successNombre = validarCadena(nombre, "Nombre"); 
   const successEmail = validarEmail(email);
   const successTelefono = validarTelefono(telefono);
   const successMensaje = validarCadena(mensaje, "Mensaje");

 
    if(successNombre && successEmail && successTelefono && successAsunto && successMensaje) {
        console.log("Enviando correo");
        sendEmail();
    } else {
        setTimeout(
            function(){
                error.forEach(elem => elem.innerHTML="");
            },
            10000
        );
    
    }    
});
    

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "postdata.imaginedev@gmail.com",
        Password: "DB8C0541E7682650A9716528D0C3A11F0301",
        To: 'postdata.imaginedev@gmail.com', 
        From: "postdata.imaginedev@gmail.com", 
        Subject: `${asunto}`,
        Body: `Correo: ${email} <br/>
          Nombre: ${nombre} <br/>
          Telefono: ${telefono} <br/>
          Mensaje:${mensaje}`,
    }).then(
        alert("Correo enviado satisfactoriamente (0.0)./")
    );
}