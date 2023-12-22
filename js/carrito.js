let plantasEnCarrito = localStorage.getItem("plantas-en-carrito");
plantasEnCarrito = JSON.parse(plantasEnCarrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar")

function cargarPlantasCarrito() {
  if (plantasEnCarrito && plantasEnCarrito.length > 0) {
    //Estado del carrito dependiedo de la clases css
    carritoVacio.classList.add("disabled");
    carritoProductos.classList.remove("disabled");
    carritoAcciones.classList.remove("disabled");
    carritoComprado.classList.add("disabled");

    carritoProductos.innerHTML = "";

    //Agregar plantas en carrito
    plantasEnCarrito.forEach((planta) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
                <img
                    class="carrito-producto-imagen"
                    src="${planta.imagen}"
                    alt="Imagen ${planta.titulo}"
                  />
                    <div class="carrito-producto-titulo">
                        <small>Título</small>
                        <h3>${planta.titulo}</h3>
                    </div>
                  <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${planta.cantidad}</p>
                  </div>
                  <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${planta.precio}</p>
                  </div>
                  <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${planta.precio * planta.cantidad}</p>
                  </div>
                  <button id="${planta.id}" class="carrito-producto-eliminar">
                    <i class="bi bi-trash-fill"></i>
                  </button>
            `;
      carritoProductos.append(div);
    });
  } else {
    carritoVacio.classList.remove("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.add("disabled");
  }
  actualizarBotonesEliminar();
  actualizarTotal();
}

cargarPlantasCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
  botonesEliminar.forEach((botones) => {
    botones.addEventListener("click", eliminarPlanta);
  });
}

function eliminarPlanta(e) {
  let idBoton = e.currentTarget.id;
  const index = plantasEnCarrito.findIndex((planta) => planta.id === idBoton);
  plantasEnCarrito.splice(index, 1);
  cargarPlantasCarrito();
  localStorage.setItem("plantas-en-carrito", JSON.stringify(plantasEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  plantasEnCarrito.length = 0;
  localStorage.setItem("plantas-en-carrito", JSON.stringify(plantasEnCarrito));
  cargarPlantasCarrito();
}

function actualizarTotal() {
  const totalCalculado = plantasEnCarrito.reduce(
    (acumulador, planta) => acumulador + planta.precio * planta.cantidad,
    0
  );
  contenedorTotal.innerHTML = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito)
function comprarCarrito(){
  plantasEnCarrito.length = 0
  localStorage.setItem("plantas-en-carrito", JSON.stringify(plantasEnCarrito));
    carritoVacio.classList.add("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.remove("disabled");
}
