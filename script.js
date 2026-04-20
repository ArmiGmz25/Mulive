const testimonios = [
  {
    nombre: "Fernando García",
    cargo: "Founder, E-commerce Brand",
    texto:
      "Desde el primer momento, el equipo de MuLive nos acompañó en todo el proceso. Escucharon nuestras ideas y las transformaron en algo mucho mejor de lo que imaginábamos.",
    fecha: "Noviembre, 2025",
    img: "Imgs/Personas/01.png",
  },
  {
    nombre: "Ana López",
    cargo: "Marketing Manager, Retail Brand",
    texto:
      "Entendieron perfectamente lo que necesitábamos. No solo mejoraron nuestro sitio, también optimizaron la experiencia del usuario y eso se reflejó en un incremento en nuestras conversiones.",
    fecha: "Octubre, 2025",
    img: "Imgs/Personas/02.png",
  },
  {
    nombre: "Carlos Méndez",
    cargo: "CEO, Tech Startup",
    texto:
      "Trabajar con MuLive fue una excelente decisión. Lograron llevar nuestra idea a un producto digital sólido, con un diseño moderno y una experiencia intuitiva que nuestros usuarios valoran muchísimo.",
    fecha: "Septiembre, 2025",
    img: "Imgs/Personas/03.png",
  },
  {
    nombre: "Luis Ramírez",
    cargo: "Founder, Digital Agency",
    texto:
      "El nivel de detalle y enfoque que tiene MuLive es impresionante. Cada interacción está pensada estratégicamente, lo que hace que el producto final sea mucho más profesional y efectivo.",
    fecha: "Agosto, 2025",
    img: "Imgs/Personas/04.png",
  },
];

const contenedor = document.getElementById("testimonios-container");

contenedor.innerHTML = testimonios
  .map(
    (t) => `
  <div class="col-12 col-lg-3">
    <div class="card testimonial-card">
      <img class="card-img-top rounded-circle" src="${t.img}" alt="${t.nombre}" />
      <div class="card-body">
        <h2 class="card-title fs-5">${t.nombre}</h2>
        <h6 class="card-subtitle mb-2 text-muted">${t.cargo}</h6>
        <p class="card-body">"${t.texto}"</p>
        <p class="card-text">
          <small class="text-body-secondary">${t.fecha}</small>
        </p>
      </div>
    </div>
  </div>
`,
  )
  .join("");
