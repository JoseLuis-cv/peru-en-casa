// ===============================
// CATÁLOGO
// ===============================

const contenedorCatalogo = document.getElementById("contenedorCatalogo");
const totalProductos = document.getElementById("totalProductos");
const sinResultados = document.getElementById("sinResultados");

const buscador = document.getElementById("buscarCatalogo");

const categoriaRadios = document.querySelectorAll('input[name="categoria"]');
const regionRadios = document.querySelectorAll('input[name="region"]');

const ordenar = document.getElementById("ordenar");

let categoriaSeleccionada = "Todos";
let regionSeleccionada = "Todas";
let textoBusqueda = "";
let ordenSeleccionado = "nombre";

actualizarCatalogo();


// ===============================
// EVENTOS
// ===============================

buscador.addEventListener("input", e => {

    textoBusqueda = e.target.value.toLowerCase();

    actualizarCatalogo();

});

categoriaRadios.forEach(radio => {

    radio.addEventListener("change", e => {

        categoriaSeleccionada = e.target.value;

        actualizarCatalogo();

    });

});

regionRadios.forEach(radio => {

    radio.addEventListener("change", e => {

        regionSeleccionada = e.target.value;

        actualizarCatalogo();

    });

});

ordenar.addEventListener("change", e => {

    ordenSeleccionado = e.target.value;

    actualizarCatalogo();

});


// ===============================
// ACTUALIZAR CATÁLOGO
// ===============================

function actualizarCatalogo(){

    let lista = [...productos];

    // Buscar

    if(textoBusqueda !== ""){

        lista = lista.filter(producto =>

            producto.nombre.toLowerCase().includes(textoBusqueda)

        );

    }

    // Categoría

    if(categoriaSeleccionada !== "Todos"){

        lista = lista.filter(producto =>

            producto.categoria === categoriaSeleccionada

        );

    }

    // Región

    if(regionSeleccionada !== "Todas"){

        lista = lista.filter(producto =>

            producto.region === regionSeleccionada

        );

    }

    // Ordenar

    switch(ordenSeleccionado){

        case "precioAsc":

            lista.sort((a,b)=>a.precio-b.precio);

            break;

        case "precioDesc":

            lista.sort((a,b)=>b.precio-a.precio);

            break;

        case "rating":

            lista.sort((a,b)=>b.rating-a.rating);

            break;

        default:

            lista.sort((a,b)=>

                a.nombre.localeCompare(b.nombre)

            );

    }

    mostrarCatalogo(lista);

}


// ===============================
// MOSTRAR
// ===============================

function mostrarCatalogo(lista){

    contenedorCatalogo.innerHTML = "";

    if(lista.length===0){

        sinResultados.style.display="block";

        totalProductos.textContent="Mostrando 0 productos";

        return;

    }

    sinResultados.style.display="none";

    lista.forEach(producto=>{

        contenedorCatalogo.innerHTML += crearTarjeta(producto);

    });

    totalProductos.textContent =
        `Mostrando ${lista.length} producto${lista.length!==1?"s":""}`;

}

const busquedaGuardada = localStorage.getItem("busqueda");

if (busquedaGuardada) {

    buscador.value = busquedaGuardada;

    textoBusqueda = busquedaGuardada.toLowerCase();

    actualizarCatalogo();

    localStorage.removeItem("busqueda");

}