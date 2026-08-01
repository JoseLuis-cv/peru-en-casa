document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.querySelector(".search-box");

    if (!buscador) return;

    const input = buscador.querySelector("input");
    const boton = buscador.querySelector("button");

    if (!input || !boton) return;

    function buscar() {

        const texto = input.value.trim();

        if (!texto) return;

        localStorage.setItem("busqueda", texto);

        if (!location.pathname.endsWith("catalogo.html")) {

            location.href = "catalogo.html";

        } else {

            input.dispatchEvent(new Event("input"));

        }

    }

    boton.onclick = buscar;

    input.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            buscar();

        }

    });

});