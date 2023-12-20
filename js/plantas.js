/* https://www.fronda.com/comprar/plantas-de-interior-con-flor */
const plantas = [
  {
    id: "flor-01",
    titulo: "Azalea Hortinno",
    imagen: "./img/flores-01.webp",
    categoria: {
      nombre: "Flores",
      id: "flores",
    },
    precio: 9.95,
  },
  {
    id: "flor-02",
    titulo: "Anthurium 'Joli Pink'",
    imagen: "./img/flores-02.webp",
    categoria: {
      nombre: "Flores",
      id: "flores",
    },
    precio: 15.95,
  },
  {
    id: "flor-03",
    titulo: "Azalea hortinno Rosa",
    imagen: "./img/flores-03.webp",
    categoria: {
      nombre: "Flores",
      id: "flores",
    },
    precio: 13.5,
  },
  {
    id: "flor-04",
    titulo: "Cala blanca",
    imagen: "./img/flores-04.webp",
    categoria: {
      nombre: "Flores",
      id: "flores",
    },
    precio: 13.5,
  },
  {
    id: "flor-05",
    titulo: "Rosa mini",
    imagen: "./img/flores-05.webp",
    categoria: {
      nombre: "Flores",
      id: "flores",
    },
    precio: 7.0,
  },
  {
    id: "flor-06",
    titulo: "Stephanotis",
    imagen: "./img/flores-06.webp",
    categoria: {
      nombre: "Flores",
      id: "flores",
    },
    precio: 17.95,
  },
  {
    id: "flor-07",
    titulo: "Kalanchoe",
    imagen: "./img/flores-07.webp",
    categoria: {
      nombre: "Flores",
      id: "flores",
    },
    precio: 2.75,
  },
  {
    id: "cactus-01",
    titulo: "Cactus cereus peruvianus",
    imagen: "./img/cactus-01.webp",
    categoria: {
      nombre: "Cactus",
      id: "cactus",
    },
    precio: 3.95,
  },
  {
    id: "cactus-02",
    titulo: "Cactus flor rosa",
    imagen: "./img/cactus-02.webp",
    categoria: {
      nombre: "Cactus",
      id: "cactus",
    },
    precio: 1.5,
  },
  {
    id: "cactus-03",
    titulo: "Cactus injerto",
    imagen: "./img/cactus-03.webp",
    categoria: {
      nombre: "Cactus",
      id: "cactus",
    },
    precio: 2.25,
  },
  {
    id: "cactus-04",
    titulo: "Cactus flor verde",
    imagen: "./img/cactus-04.webp",
    categoria: {
      nombre: "Cactus",
      id: "cactus",
    },
    precio: 1.5,
  },
  {
    id: "cactus-05",
    titulo: "Cactus flor Amarilla",
    imagen: "./img/cactus-05.webp",
    categoria: {
      nombre: "Cactus",
      id: "cactus",
    },
    precio: 1.5,
  },
  {
    id: "cactus-06",
    titulo: "Cactus Opuntia",
    imagen: "./img/cactus-06.webp",
    categoria: {
      nombre: "Cactus",
      id: "cactus",
    },
    precio: 12.5,
  },
  {
    id: "hojaverde-01",
    titulo: "Alocasia sinuata",
    imagen: "./img/hojaverde-01.webp",
    categoria: {
      nombre: "Hoja verde",
      id: "hojaverde",
    },
    precio: 14.95,
  },
  {
    id: "hojaverde-02",
    titulo: "Areca Mini",
    imagen: "./img/hojaverde-02.webp",
    categoria: {
      nombre: "Hoja verde",
      id: "hojaverde",
    },
    precio: 3.85,
  },
  {
    id: "hojaverde-03",
    titulo: "Asparagus setaceus",
    imagen: "./img/hojaverde-03.webp",
    categoria: {
      nombre: "Hoja verde",
      id: "hojaverde",
    },
    precio: 5.75,
  },
  {
    id: "hojaverde-04",
    titulo: "Aeschynanthus",
    imagen: "./img/hojaverde-04.webp",
    categoria: {
      nombre: "Hoja verde",
      id: "hojaverde",
    },
    precio: 20.95,
  },
];

/* DOM */
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(plantas) {
  contenedorProductos.innerHTML = "";
  plantas.forEach((planta) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${planta.imagen}" alt="imagen ${planta.titulo}" />
        <div class="producto-detalles">
            <h3 class="producto-titulo">${planta.titulo}</h3>
            <p class="producto-precio">$${planta.precio}</p>
            <button class="producto-agregar" id="${planta.id}">Agregar</button>
        </div>
        `;
    contenedorProductos.append(div);
    actualizarBotonesAgregar();
  });
}
//Inicializar todos los productos
cargarProductos(plantas);

//Menu sidebar y cargar productos filtrados
botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id !== "todas") {
      //Cambiar titulo
      const plantaCategoria = plantas.find(
        (planta) => planta.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = plantaCategoria.categoria.nombre;
      //Filtar por boton
      const plantasBoton = plantas.filter(
        (planta) => planta.categoria.id === e.currentTarget.id
      );
      cargarProductos(plantasBoton);
    } else {
      tituloPrincipal.innerText = "Todas las plantas";
      cargarProductos(plantas);
    }
  });
});

//Actualizar los botones en cada categoría
function actualizarBotonesAgregar() {
  botonAgregar = document.querySelectorAll(".producto-agregar");
  botonAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarCarrito);
  });
}

const plantasEnCarrito = [];
function agregarCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = plantas.find((planta) => planta.id === idBoton);
  if (plantasEnCarrito.some((planta) => planta.id === idBoton)) {
    const index = plantasEnCarrito.findIndex((planta) => planta.id === idBoton);
    plantasEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    plantasEnCarrito.push(productoAgregado);
  }
  console.log(plantasEnCarrito)
  actualizarNumerito()
}

function actualizarNumerito(){
  let nuevoNumerito = plantasEnCarrito.reduce((acumulador, planta) => acumulador + planta.cantidad, 0)
  numerito.innerText = nuevoNumerito
}