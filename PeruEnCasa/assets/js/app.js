const contenedor =
document.getElementById("productosDestacados");

mostrarProductos(productos);

function mostrarProductos(lista = productos){

    if(!contenedor) return;

    contenedor.innerHTML = "";

    const destacados = [...lista]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    destacados.forEach(producto => {

        contenedor.innerHTML += crearTarjeta(producto);

    });

}