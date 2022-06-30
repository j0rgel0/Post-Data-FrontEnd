let botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", (event)=> {
    event.preventDefault();

    const form = document.querySelector("#formEnviar");
    const nombre = form.nombre.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const mensaje = form.mensaje.value;
   
    const successNombre = validarNombre(nombre); 
    const successEmail = validarEmail(email);
    const successTelefono = validarTelefono(telefono);
    const successMensaje = validarCadena(mensaje, "Mensaje");


    if(successNombre && successEmail && successTelefono  && successMensaje) {
        console.log("Enviando correo");
        //sendEmail();
        
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus;
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("mensaje").value = "";
       
        swal("Mensaje enviado correctamente", "Gracias por tus comentarios", "success"); //SweetAlert
    }else{
        console.log("Algo ha fallado");
    }
});
    

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "postdata.imaginedev@gmail.com",
        Password: "DB8C0541E7682650A9716528D0C3A11F0301",
        To: 'postdata.imaginedev@gmail.com', 
        From: "postdata.imaginedev@gmail.com", 
        Subject: `Contacto de usuario`,
        Body: `Correo: ${email} <br/>
          Nombre: ${nombre} <br/>
          Telefono: ${telefono} <br/>
          Mensaje:${mensaje}`,
    }).then(
        //mandar aqui el sweetalert
    );
}