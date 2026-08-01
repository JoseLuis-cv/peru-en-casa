const pedidos = JSON.parse(

    localStorage.getItem("pedidos")

) || [];

const lista = document.getElementById(

    "listaPedidos"

);

if (lista) {

    if (pedidos.length === 0) {

        lista.innerHTML = `

            <div class="empty-cart">

                <h2>No tienes pedidos.</h2>

            </div>

        `;

    } else {

        pedidos.reverse().forEach(pedido => {

            lista.innerHTML += `

                <div class="pedido">

                    <h3>${pedido.id}</h3>

                    <p>${pedido.fecha}</p>

                    <p>${pedido.estado}</p>

                    <strong>

                        S/ ${pedido.total.toFixed(2)}

                    </strong>

                </div>

            `;

        });

    }

}