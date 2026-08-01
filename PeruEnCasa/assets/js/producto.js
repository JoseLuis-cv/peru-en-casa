const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));

const producto = productos.find(p => p.id === id);

if (producto) {

    cargarProducto(producto);
    mostrarRelacionados(producto);

} else {

    document.getElementById("productoDetalle").innerHTML = `
        <h2>Producto no encontrado</h2>
    `;

}

function crearEstrellas(rating){

    let estrellas = "";

    const completas = Math.floor(rating);
    const decimal = rating - completas;

    for(let i=1;i<=5;i++){

        if(i<=completas){

            estrellas += '<i class="fa-solid fa-star"></i>';

        }else if(i===completas+1 && decimal>=0.5){

            estrellas += '<i class="fa-solid fa-star-half-stroke"></i>';

        }else{

            estrellas += '<i class="fa-regular fa-star"></i>';

        }

    }

    return estrellas;

}

function actualizarBotonFavorito(id){

    const boton = document.querySelector(".btn-favorito-producto");

    if(!boton) return;

    const favorito = (window.favoritos || []).includes(id);

    boton.classList.toggle("activo", favorito);

    boton.innerHTML = `
        <i class="${favorito ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        ${favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    `;

}

function cargarProducto(producto) {

    const esFavorito = (window.favoritos || []).includes(producto.id);

    document.getElementById("productoDetalle").innerHTML = `

<section class="producto-detalle">

    <div class="producto-imagen">

        <img
            src="../${producto.imagen}"
            alt="${producto.nombre}"
            id="imagenPrincipal">

    </div>

    <div class="producto-info">

        <p class="categoria">
            ${producto.categoria}
        </p>

        <h1>${producto.nombre}</h1>

        <div class="rating">

            <div class="producto-rating">

    <span class="rating-stars">
        ${crearEstrellas(producto.rating)}
    </span>

    <span class="rating-numero">
        ${producto.rating.toFixed(1)}
    </span>

    <span class="rating-opiniones">
        (${producto.opiniones} opiniones)
    </span>

</div>

        </div>

        <h2 class="precio">
            S/ ${producto.precio.toFixed(2)}
        </h2>

        <p>
            ${producto.descripcion}
        </p>

        <p class="stock">

            Stock:
            <strong>${producto.stock}</strong>

        </p>

        <div class="acciones">

            <button
                class="buy-btn"
                onclick="agregarAlCarrito(${producto.id})">

                <i class="fa-solid fa-cart-shopping"></i>
                Agregar al carrito

            </button>

            <button
                class="btn-favorito-producto ${esFavorito ? 'activo' : ''}"
                onclick="toggleFavorito(${producto.id}); actualizarBotonFavorito(${producto.id})">

                <i class="${esFavorito ? 'fa-solid' : 'fa-regular'} fa-heart"></i>

                ${esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}

            </button>

        </div>

    </div>

</section>

`;
}


function mostrarRelacionados(productoActual) {

    const contenedor = document.getElementById("productosRelacionados");

    if (!contenedor) return;

    const relacionados = productos
        .filter(producto =>
            producto.id !== productoActual.id &&
            producto.categoria === productoActual.categoria
        )
        .slice(0, 3);

    if (relacionados.length === 0) {

        contenedor.innerHTML = `
            <p class="sin-relacionados">
                No hay productos relacionados.
            </p>
        `;

        return;

    }

    contenedor.innerHTML = relacionados
        .map(producto => crearTarjeta(producto))
        .join("");

}