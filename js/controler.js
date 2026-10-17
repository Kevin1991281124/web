window.onload = cargareventos;

function cargareventos() {
    // Eventos para envio de formularios
    document.getElementById('registerForm').addEventListener("submit", agregarUsuario, false);
    document.getElementById('loginForm').addEventListener("submit", autenticarUsuario, false);

    // Eventos para cambiar de pestaña entre Registro e Iniciar Sesión
    document.getElementById('tabRegisterBtn').addEventListener("click", mostrarRegistro, false);
    document.getElementById('tabLoginBtn').addEventListener("click", mostrarLogin, false);
}

function mostrarRegistro() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('tabRegisterBtn').classList.add('active');
    document.getElementById('tabLoginBtn').classList.remove('active');
    document.getElementById('topTitle').textContent = "Registrarse";
}

function mostrarLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('tabLoginBtn').classList.add('active');
    document.getElementById('tabRegisterBtn').classList.remove('active');
    document.getElementById('topTitle').textContent = "Iniciar Sesión";
}

function agregarUsuario(event) {
    event.preventDefault();
    var formularioAgregar = document.getElementById('registerForm');
    var datos = new FormData(formularioAgregar);

    alert("usuario registrado: " + datos.get('fullname') + 
          "\nEmail: " + datos.get('email') + 
          "\nMatrícula: " + datos.get('regnumber') + 
          "\nCarrera: " + datos.get('career'));
}

function autenticarUsuario(event) {
    event.preventDefault();
    var formularioAutentificar = document.getElementById('loginForm');
    var datos = new FormData(formularioAutentificar);
    var password = datos.get('loginPassword') || '';

    alert("usuario intentando entrar: " + datos.get('loginUser') + 
          "\ncon una contraseña que tiene " + password.length + " caracteres.");
}