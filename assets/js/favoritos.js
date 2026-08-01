window.favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const contenedorFavoritos =
document.getElementById("contenedorFavoritos");

if (typeof mostrarFavoritos === "function") {

    mostrarFavoritos();

}

function toggleFavorito(id) {

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(f => f !== id);

    } else {

        favoritos.push(id);

    }

    window.favoritos = favoritos;

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // Si estamos en Mis Favoritos
    if (contenedorFavoritos) {

        mostrarFavoritos();

        return;

    }

    // Si estamos en Inicio
    if (typeof mostrarProductos === "function") {

        mostrarProductos();

    }

    // Si estamos en Catálogo
    if (typeof actualizarCatalogo === "function") {

        actualizarCatalogo();

    }

}

function mostrarFavoritos() {

    if (!contenedorFavoritos) return;

    contenedorFavoritos.innerHTML = "";

    const lista = productos.filter(producto =>
        favoritos.includes(producto.id)
    );

    const favoritosVacio = document.getElementById("favoritosVacio");

    if (lista.length === 0) {

        contenedorFavoritos.style.display = "none";

        if (favoritosVacio) {

            favoritosVacio.style.display = "block";

        }

        return;

    }

    contenedorFavoritos.style.display = "grid";

    if (favoritosVacio) {

        favoritosVacio.style.display = "none";

    }

    contenedorFavoritos.innerHTML = lista
        .map(producto => crearTarjeta(producto))
        .join("");

}