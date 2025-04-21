document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("lista-carrito")) {
        actualizarCarrito();
    }
});

function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(nombre + " agregado al carrito.");
}

function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let listaCarrito = document.getElementById("lista-carrito");
    let totalElemento = document.getElementById("total");
    let total = 0;

    if (listaCarrito) {
        listaCarrito.innerHTML = "";
        carrito.forEach((producto, index) => {
            let item = document.createElement("div");
            item.innerHTML = `${producto.nombre} - Q${producto.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
            listaCarrito.appendChild(item);
            total += producto.precio;
        });
        totalElemento.textContent = total.toFixed(2);
    }
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function finalizarCompra(event) {
    event.preventDefault();
    alert("Gracias por su compra");
    localStorage.removeItem("carrito");
    actualizarCarrito();
}
