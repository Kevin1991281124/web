window.onload = cargareventos;

function cargareventos() {
    document.getElementById('registerForm').addEventListener("submit", agregarUsuario, false);
    document.getElementById('loginForm').addEventListener("submit", autenticarUsuario, false);

    document.getElementById('tabRegisterBtn').addEventListener("click", mostrarRegistro, false);
    document.getElementById('tabLoginBtn').addEventListener("click", mostrarLogin, false);
}

function mostrarRegistro() {
    limpiarErrores();
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('tabRegisterBtn').classList.add('active');
    document.getElementById('tabLoginBtn').classList.remove('active');
    document.getElementById('topTitle').textContent = "Registrarse";
}

function mostrarLogin() {
    limpiarErrores();
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('tabLoginBtn').classList.add('active');
    document.getElementById('tabRegisterBtn').classList.remove('active');
    document.getElementById('topTitle').textContent = "Iniciar Sesión";
}

function mostrarError(idInput, idErr, mensaje) {
    var elemInput = document.getElementById(idInput);
    var elemErr = document.getElementById(idErr);
    
    elemInput.classList.add('input-error');
    elemErr.textContent = mensaje;
    elemErr.classList.add('visible');
}

function limpiarErrores() {
    var inputs = document.querySelectorAll('.input-group input, .input-group select');
    var msgs = document.querySelectorAll('.error-msg');
    
    inputs.forEach(function(i) {
        i.classList.remove('input-error');
    });
    
    msgs.forEach(function(m) {
        m.classList.remove('visible');
        m.textContent = '';
    });
}

function agregarUsuario(event) {
    event.preventDefault();
    limpiarErrores();

    var formularioAgregar = document.getElementById('registerForm');
    var datos = new FormData(formularioAgregar);

    var nombre = datos.get('fullname') ? datos.get('fullname').trim() : '';
    var matricula = datos.get('regnumber') ? datos.get('regnumber').trim() : '';
    var email = datos.get('email') ? datos.get('email').trim() : '';
    var carrera = datos.get('career');

    var hayError = false;

    var regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
    if (!regexNombre.test(nombre)) {
        mostrarError('fullname', 'err-fullname', 'El nombre solo debe contener letras (mínimo 3).');
        hayError = true;
    }

    var regexMatricula = /^\d{8}$/;
    if (!regexMatricula.test(matricula)) {
        mostrarError('regnumber', 'err-regnumber', 'La matrícula debe contener exactamente 8 números.');
        hayError = true;
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mostrarError('email', 'err-email', 'Ingresa un correo electrónico válido.');
        hayError = true;
    }

    if (!carrera) {
        mostrarError('career', 'err-career', 'Por favor selecciona una carrera.');
        hayError = true;
    }

    if (hayError) return;

    alert("¡Registro exitoso!\n" +
          "Usuario registrado: " + nombre + 
          "\nMatrícula: " + matricula + 
          "\nEmail: " + email + 
          "\nCarrera: " + carrera);

    formularioAgregar.reset();
}

function autenticarUsuario(event) {
    event.preventDefault();
    limpiarErrores();

    var formularioAutentificar = document.getElementById('loginForm');
    var datos = new FormData(formularioAutentificar);

    var usuario = datos.get('loginUser') ? datos.get('loginUser').trim() : '';
    var password = datos.get('loginPassword') ? datos.get('loginPassword').trim() : '';

    var hayError = false;

    if (usuario === "") {
        mostrarError('loginUser', 'err-loginUser', 'Por favor ingresa tu correo o matrícula.');
        hayError = true;
    }

    var regexEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    
    if (password.length < 6) {
        mostrarError('loginPassword', 'err-loginPassword', 'La contraseña debe contener al menos 6 caracteres.');
        hayError = true;
    } else if (!regexEspecial.test(password)) {
        mostrarError('loginPassword', 'err-loginPassword', 'Debe incluir al menos un carácter especial (ej. @, #, $).');
        hayError = true;
    }

    if (hayError) return;

    alert("¡Inicio de sesión correcto!\n" +
          "Usuario: " + usuario);

    formularioAutentificar.reset();
}