function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    document.getElementById("resultado").innerHTML = "Nombre: " + nombre + "<br>Correo electrónico: " + email;
  }