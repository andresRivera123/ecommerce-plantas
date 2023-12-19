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
];

/* DOM */
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

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
  });
}

cargarProductos(plantas);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id !== "todas") {
        //Cambiar titulo
      const plantaCategoria = plantas.find(
        (planta) => planta.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = plantaCategoria.categoria.nombre
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
