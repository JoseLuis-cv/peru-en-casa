    let descuento = 0;
    // ======================================
    // CARRITO
    // ======================================

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    actualizarContador();

    // ============================
    // Agregar al carrito
    // ============================

    function agregarAlCarrito(id) {

        const producto = productos.find(p => p.id === id);

        if (!producto) return;

        const existe = carrito.find(p => p.id === id);

        if (existe) {

            existe.cantidad++;

        } else {

            carrito.push({

                ...producto,
                cantidad: 1

            });

        }

        guardarCarrito();

        actualizarContador();

        if (typeof mostrarCarrito === "function") {

            mostrarCarrito();

        }

        if (typeof mostrarRecomendados === "function") {

            mostrarRecomendados();

        }

        mostrarMensaje(producto.nombre);

    }

    // ============================
    // LocalStorage
    // ============================

    function guardarCarrito() {

        localStorage.setItem(

            "carrito",

            JSON.stringify(carrito)

        );

    }

    // ============================
    // Contador
    // ============================

    function actualizarContador() {

        const contador = document.querySelector(".cart-count");

        if (!contador) return;

        contador.textContent = carrito.reduce(

            (total, producto) => total + producto.cantidad,

            0

        );

    }

    // ============================
    // Toast
    // ============================

    function mostrarMensaje(nombre) {

        const toast = document.createElement("div");

        toast.className = "toast";

        toast.innerHTML = `✅ ${nombre} agregado al carrito`;

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.classList.add("mostrar");

        }, 100);

        setTimeout(() => {

            toast.remove();

        }, 2500);

    }

    // ======================================
    // CARRITO.HTML
    // ======================================


        const contenedorCarrito = document.getElementById("listaCarrito");
        const mensajeCarritoVacio = document.getElementById("carritoVacio");
        const totalResumen = document.getElementById("totalCarrito");
        const botonVaciar = document.getElementById("btnVaciar");
        const resumenCompra = document.querySelector(".resumen-compra");

        function mostrarCarrito() {

            if (!contenedorCarrito) return;

                if (carrito.length === 0) {

                    mensajeCarritoVacio.innerHTML = `
                        <div class="empty-cart">

                        <div class="empty-icon">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>

                        <h2>Tu carrito está vacío</h2>

                            <p>
                                Agrega productos desde el catálogo para comenzar tu compra.
                            </p>

                            <a href="catalogo.html" class="view-btn">

                                Ir al catálogo

                            </a>

                        </div>
                    `;

                    contenedorCarrito.innerHTML = "";

                    totalResumen.textContent = "S/ 0.00";

                    if (resumenCompra) {

                        resumenCompra.style.display = "none";

                    }

                    if (botonVaciar) {

                        botonVaciar.style.display = "none";

                    }

                    return;

                }

                mensajeCarritoVacio.innerHTML = "";

                if (resumenCompra) {

                    resumenCompra.style.display = "block";

                }

                if (botonVaciar) {

                    botonVaciar.style.display = "block";

                }

                contenedorCarrito.innerHTML = "";

                carrito.forEach(producto => {

                    contenedorCarrito.innerHTML += `

                    <div class="item-carrito">

                        <div class="imagen-item">

                            <img src="../${producto.imagen}" alt="${producto.nombre}">

                        </div>

                        <div class="info-item">

                            <h3>${producto.nombre}</h3>

                            <p class="categoria-item">
                                ${producto.categoria}
                            </p>

                            <div class="rating-item">
                                ⭐ ${producto.rating}
                                <span>(${producto.opiniones})</span>
                            </div>

                            <div class="precio-unitario">

                                <span>Precio unitario</span>

                                <strong>
                                    S/ ${producto.precio.toFixed(2)}
                                </strong>

                            </div>

                            <div class="cantidad">

                                <button onclick="restarCantidad(${producto.id})">−</button>

                                <span>${producto.cantidad}</span>

                                <button onclick="sumarCantidad(${producto.id})">+</button>

                            </div>

                        </div>

                        <div class="acciones-item">

                            <span class="subtotal-label">

                                Subtotal

                            </span>

                            <strong class="subtotal-precio">

                                S/ ${(producto.precio * producto.cantidad).toFixed(2)}

                            </strong>

                            <button
                                class="delete-btn"
                                onclick="eliminarProducto(${producto.id})"
                                aria-label="Eliminar producto">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <polyline points="3 6 5 6 21 6"></polyline>

                                    <path d="M19 6l-1 14H6L5 6"></path>

                                    <path d="M10 11v6"></path>

                                    <path d="M14 11v6"></path>

                                    <path d="M9 6V4h6v2"></path>

                                </svg>

                                <span>Eliminar</span>

                            </button>

                        </div>

                    </div>

                    `;

                });

                calcularTotal();

            }

            function calcularTotal() {

                const subtotal = carrito.reduce(

                    (suma, producto) =>

                        suma + producto.precio * producto.cantidad,

                    0

                );

                const total = subtotal - descuento;

                const cantidad = carrito.reduce(

                    (suma, producto) =>

                        suma + producto.cantidad,

                    0

                );

                document.getElementById("subtotalCarrito").textContent =
                    `S/ ${subtotal.toFixed(2)}`;

                document.getElementById("totalCarrito").textContent =
                    `S/ ${total.toFixed(2)}`;

                document.getElementById("cantidadProductos").textContent =
                    cantidad;

                document.getElementById("descuentoCarrito").textContent =
                    `-S/ ${descuento.toFixed(2)}`;

            }

            window.sumarCantidad = function(id) {

                const producto = carrito.find(p => p.id === id);

                if (!producto) return;

                producto.cantidad++;

                guardarCarrito();

                actualizarContador();

                mostrarCarrito();

            }

            window.restarCantidad = function(id) {

                const producto = carrito.find(p => p.id === id);

                if (!producto) return;

                if (producto.cantidad > 1) {

                    producto.cantidad--;

                } else {

                    carrito = carrito.filter(p => p.id !== id);

                }

                guardarCarrito();

                actualizarContador();

                mostrarCarrito();

            }

            window.eliminarProducto = function(id) {

                carrito = carrito.filter(

                    p => p.id !== id

                );

                guardarCarrito();

                actualizarContador();

                mostrarCarrito();

            }

            if (botonVaciar) {

                botonVaciar.addEventListener("click", () => {

                    if (!confirm("¿Vaciar el carrito?")) return;

                    carrito = [];

                    guardarCarrito();

                    actualizarContador();

                    mostrarCarrito();

                });

            }

        if (contenedorCarrito) {

    mostrarCarrito();

}


    // ===============================
    // PRODUCTOS RECOMENDADOS
    // ===============================

    const contenedorRecomendados =
    document.getElementById("productosRecomendados");

    if (contenedorRecomendados) {

        mostrarRecomendados();

    }

    function mostrarRecomendados() {

        const idsCarrito = carrito.map(

            p => p.id

        );

        const recomendados = productos

            .filter(

                producto =>

                !idsCarrito.includes(producto.id)

            )

            .sort(() => Math.random() - 0.5)

            .slice(0,3);

        contenedorRecomendados.innerHTML = "";

        recomendados.forEach(producto => {

            contenedorRecomendados.innerHTML +=

            crearTarjeta(producto);

        });

    }

    // ===============================
    // FINALIZAR COMPRA
    // ===============================

    const btnFinalizar = document.getElementById("btnFinalizar");

    const modalCompra = document.getElementById("modalCompra");

    const btnSeguirComprando = document.getElementById("btnSeguirComprando");

    const numeroPedido = document.getElementById("numeroPedido");

    if(btnFinalizar){

        btnFinalizar.addEventListener("click",()=>{

            if(carrito.length===0){

                alert("Tu carrito está vacío.");

                return;

            }

            const pedido="PEC-"+Math.floor(

                100000+Math.random()*900000

            );

            numeroPedido.textContent=

            "Pedido: "+pedido;

            modalCompra.classList.add("activo");

            const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

            const nuevoPedido = {

                id: pedido,

                fecha: new Date().toLocaleString("es-PE"),

                estado: "Completado",

                total: carrito.reduce(
                    (suma, producto) =>
                        suma + producto.precio * producto.cantidad,
                    0
                ) - descuento,

                descuento: descuento,
                productos: [...carrito]

            };

            pedidos.push(nuevoPedido);

            localStorage.setItem(

                "pedidos",

                JSON.stringify(pedidos)

            );

            carrito=[];

            guardarCarrito();

            actualizarContador();

            mostrarCarrito();

            descuento = 0;

            document.getElementById("codigoCupon").value = "";

            document.getElementById("mensajeCupon").textContent = "";

        });

    }

    if (btnSeguirComprando) {

        btnSeguirComprando.addEventListener("click", () => {

            modalCompra.classList.remove("activo");

            window.location.href = "catalogo.html";

        });

    }

    const btnCupon = document.getElementById("btnAplicarCupon");

    if(btnCupon){

        btnCupon.addEventListener("click",()=>{

            const input =
            document.getElementById("codigoCupon");

            const mensaje =
            document.getElementById("mensajeCupon");

            const codigo =
            input.value.trim().toUpperCase();

            descuento = 0;

            switch(codigo){

                case "PERU10":

                    descuento = 10;

                    break;

                case "ARTESANIA15":

                    descuento = 15;

                    break;

                case "BIENVENIDO":

                    descuento = 20;

                    break;

                default:

                    mensaje.style.color="red";

                    mensaje.textContent=
                    "Código no válido.";

                    calcularTotal();

                    return;

            }

            mensaje.style.color="green";

            mensaje.textContent=
            `Cupón aplicado: -S/ ${descuento.toFixed(2)}`;

            calcularTotal();

        });

    }