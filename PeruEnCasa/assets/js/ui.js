function crearRating(rating, opiniones) {

    let estrellas = "";

    const completas = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {

        if (i <= completas) {

            estrellas += '<i class="fa-solid fa-star"></i>';

        } else {

            estrellas += '<i class="fa-regular fa-star"></i>';

        }

    }

    return `

        <div class="rating">

            <span class="rating-stars">

                ${estrellas}

            </span>

            <span class="rating-text">

                ${rating.toFixed(1)} (${opiniones})

            </span>

        </div>

    `;

}

function crearTarjeta(producto) {

    return `

    <article class="card">

        ${producto.nuevo ? '<span class="badge">Nuevo</span>' : ''}

        <button
            class="favorite-btn"
            onclick="toggleFavorito(${producto.id})">

            ${(window.favoritos || []).includes(producto.id)
            ? '<i class="fa-solid fa-heart"></i>'
            : '<i class="fa-regular fa-heart"></i>'}

        </button>

        <img
            src="../${producto.imagen}"
            alt="${producto.nombre}"
            loading="lazy">

        <div class="card-body">

            ${crearRating(producto.rating, producto.opiniones)}

            <h3>${producto.nombre}</h3>

            <p class="categoria">
                ${producto.categoria}
            </p>

            <p class="precio">
                S/ ${producto.precio.toFixed(2)}
            </p>

            <p class="envio">
                <i class="fa-solid fa-truck-fast"></i> Envío gratis
            </p>

            <div class="card-buttons">

                <button
                    class="btn btn-primary"
                    onclick="agregarAlCarrito(${producto.id})">

                    <i class="fa-solid fa-cart-plus"></i>
                    Agregar

                </button>

                <button
                    class="btn btn-outline"
                    onclick="abrirProducto(${producto.id})">

                    <i class="fa-solid fa-eye"></i>
                    Ver producto

                </button>

            </div>

        </div>

    </article>

    `;

}

/**
 * Abre la página del producto.
 */
function abrirProducto(id) {

    window.location.href = `producto.html?id=${id}`;

}