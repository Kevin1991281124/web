window.onload = cargareventos;

function cargareventos() {
    // Escuchar el evento submit del formulario de registro
    var formRegistro = document.getElementById('registerForm');
    if (formRegistro) {
        formRegistro.addEventListener("submit", agregarUsuario, false);
    }

    // Escuchar el evento submit del formulario de inicio de sesión
    var formLogin = document.getElementById('loginForm');
    if (formLogin) {
        formLogin.addEventListener("submit", autenticarUsuario, false);
    }
}

function agregarUsuario(event) {
    event.preventDefault();
    var formularioAgregar = document.getElementById('registerForm');
    var datos = new FormData(formularioAgregar);

    alert("Usuario registrado: " + datos.get('fullname') + 
          "\nMatrícula: " + datos.get('regnumber') + 
          "\nEmail: " + datos.get('email') + 
          "\nCarrera: " + datos.get('career'));
}

function autenticarUsuario(event) {
    event.preventDefault();
    var formularioAutentificar = document.getElementById('loginForm');
    var datos = new FormData(formularioAutentificar);
    var password = datos.get('loginPassword') || '';

    alert("Usuario intentando entrar: " + datos.get('loginUser') + 
          "\nCon una contraseña que tiene " + password.length + " caracteres.");
}