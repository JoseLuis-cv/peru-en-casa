function abrirVistaRapida(id){

    const producto = productos.find(p => p.id === id);

    const modal = document.getElementById("modalProducto");

    modal.innerHTML = `

        <div class="modal-contenido">

            <span class="cerrar-modal">&times;</span>

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="modal-info">

                <h2>${producto.nombre}</h2>

                <p class="modal-rating">
                    ⭐ ${producto.rating} (${producto.opiniones} opiniones)
                </p>

                <h3>S/ ${producto.precio.toFixed(2)}</h3>

                <p>${producto.descripcion}</p>

                <p><strong>Stock:</strong> ${producto.stock}</p>

                <button
                    class="buy-btn"
                    onclick="agregarAlCarrito(${producto.id})">

                    🛒 Agregar al carrito

                </button>

            </div>

        </div>

    `;

    modal.classList.add("activo");

    modal.querySelector(".cerrar-modal")
        .onclick = () => modal.classList.remove("activo");

    modal.onclick = e => {
        if(e.target === modal){
            modal.classList.remove("activo");
        }
    };

}