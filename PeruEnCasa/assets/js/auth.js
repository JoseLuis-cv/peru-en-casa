// ======================================
// AUTENTICACIÓN
// ======================================

let usuarios = JSON.parse(

    localStorage.getItem("usuarios")

) || [];

let usuarioActivo = JSON.parse(

    localStorage.getItem("usuarioActivo")

) || null;

function guardarUsuarios() {

    localStorage.setItem(

        "usuarios",

        JSON.stringify(usuarios)

    );

}

function guardarSesion() {

    localStorage.setItem(

        "usuarioActivo",

        JSON.stringify(usuarioActivo)

    );

}

// ======================================
// REGISTRO
// ======================================

const formRegistro = document.getElementById("formRegistro");

if (formRegistro) {

    formRegistro.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = document
            .getElementById("registroNombre")
            .value
            .trim();

        const correo = document
            .getElementById("registroCorreo")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("registroPassword")
            .value;

        const confirmar = document
            .getElementById("registroConfirmar")
            .value;

        if (password !== confirmar) {

            alert("Las contraseñas no coinciden.");

            return;

        }

        const existe = usuarios.find(

            usuario => usuario.correo === correo

        );

        if (existe) {

            alert("Este correo ya está registrado.");

            return;

        }

        const nuevoUsuario = {

            id: Date.now(),

            nombre,

            correo,

            password,

            direccion: ""

        };

        usuarios.push(nuevoUsuario);

        guardarUsuarios();

        alert("Cuenta creada correctamente.");

        window.location.href = "login.html";

    });

}

// ======================================
// LOGIN
// ======================================

const formLogin = document.getElementById("formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", function (e) {

        e.preventDefault();

        const correo = document
            .getElementById("loginCorreo")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("loginPassword")
            .value;

        const usuario = usuarios.find(

            usuario =>

                usuario.correo === correo &&

                usuario.password === password

        );

        if (!usuario) {

            alert("Correo o contraseña incorrectos.");

            return;

        }

        usuarioActivo = usuario;

        guardarSesion();

        alert("Bienvenido " + usuario.nombre);

        window.location.href = "cuenta.html";

    });

}

// ======================================
// PROTEGER CUENTA
// ======================================

if (window.location.pathname.includes("cuenta.html")) {

    if (!usuarioActivo) {

        window.location.href = "login.html";

    }

}

// ======================================
// MOSTRAR DATOS DEL USUARIO
// ======================================

const nombreUsuario = document.getElementById("nombreUsuario");
const correoUsuario = document.getElementById("correoUsuario");
const direccionUsuario = document.getElementById("direccionUsuario");

const perfilNombre = document.getElementById("perfilNombre");
const perfilCorreo = document.getElementById("perfilCorreo");

if (

    nombreUsuario &&

    correoUsuario &&

    direccionUsuario &&

    usuarioActivo

) {

    nombreUsuario.value = usuarioActivo.nombre;

    correoUsuario.value = usuarioActivo.correo;

    direccionUsuario.value = usuarioActivo.direccion || "";

    if (perfilNombre) {

        perfilNombre.textContent = usuarioActivo.nombre;

    }

    if (perfilCorreo) {

        perfilCorreo.textContent = usuarioActivo.correo;

    }

}

// ======================================
// GUARDAR CAMBIOS
// ======================================

const passwordActual =
document.getElementById("passwordActual");

const passwordNueva =
document.getElementById("passwordNueva");

const passwordConfirmar =
document.getElementById("passwordConfirmar");

const btnGuardarCuenta = document.getElementById("btnGuardarCuenta");

if (btnGuardarCuenta) {

    btnGuardarCuenta.addEventListener("click", () => {

        // Guardar nombre y dirección

        usuarioActivo.nombre = nombreUsuario.value.trim();

        usuarioActivo.direccion = direccionUsuario.value.trim();

        // Cambiar contraseña (solo si escribió algo)

        if (

            passwordActual.value ||

            passwordNueva.value ||

            passwordConfirmar.value

        ) {

            if (passwordActual.value !== usuarioActivo.password) {

                alert("La contraseña actual es incorrecta.");

                return;

            }

            if (passwordNueva.value.length < 6) {

                alert("La nueva contraseña debe tener al menos 6 caracteres.");

                return;

            }

            if (passwordNueva.value !== passwordConfirmar.value) {

                alert("Las contraseñas no coinciden.");

                return;

            }

            usuarioActivo.password = passwordNueva.value;

        }

        guardarSesion();

        const indice = usuarios.findIndex(

            usuario => usuario.id === usuarioActivo.id

        );

        if (indice !== -1) {

            usuarios[indice] = usuarioActivo;

            guardarUsuarios();

        }

        passwordActual.value = "";
        passwordNueva.value = "";
        passwordConfirmar.value = "";

        alert("Cambios guardados correctamente.");

    });

}

// ======================================
// CERRAR SESIÓN
// ======================================

const btnCerrarSesion =
document.getElementById("btnCerrarSesion");

if (btnCerrarSesion) {

    btnCerrarSesion.addEventListener("click", () => {

        if (!confirm("¿Deseas cerrar sesión?")) {

            return;

        }

        localStorage.removeItem("usuarioActivo");

        window.location.href = "login.html";

    });

}

// ======================================
// ENLACE MI CUENTA
// ======================================

const linkCuenta = document.getElementById("linkCuenta");

if (linkCuenta) {

    if (usuarioActivo) {

        linkCuenta.href = "cuenta.html";

        linkCuenta.title = usuarioActivo.nombre;

    } else {

        linkCuenta.href = "login.html";

        linkCuenta.title = "Mi Cuenta";

    }

}