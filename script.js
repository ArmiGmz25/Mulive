//NavBar
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

//Testimonios
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
    (t, index) => `
  <div class="col-12 col-lg-3 reveal" style="transition-delay: ${index * 0.15}s">
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

/* Carrousel */
const slides = [
  {
    img: "Imgs/carrousel-01.jpg",
    titulo: "Transformamos ideas en experiencias digitales",
    descripcion:
      "Diseño, tecnología y estrategia para impulsar el crecimiento de tu marca en el entorno digital",
    intervalo: 10000,
  },
  {
    img: "Imgs/carrousel-02.jpg",
    titulo: "Diseño UX/UI y desarrollo web a medida",
    descripcion:
      "Creamos interfaces modernas, intuitivas y enfocadas en resultados reales para tu negocio.",
    intervalo: 2000,
  },
  {
    img: "Imgs/carrousel-03.jpg",
    titulo: "Soluciones digitales que generan resultados",
    descripcion:
      "Ayudamos a empresas a crecer con productos digitales eficientes, escalables y centrados en el usuario.",
  },
];

// Indicators
document.getElementById("carousel-indicators").innerHTML = slides
  .map(
    (_, index) => `
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="${index}"
      ${index === 0 ? 'class="active" aria-current="true"' : ""}
      aria-label="Slide ${index + 1}"
    ></button>
  `,
  )
  .join("");

// Slides
document.getElementById("carousel-inner").innerHTML = slides
  .map(
    (slide, index) => `
    <div class="carousel-item ${index === 0 ? "active" : ""} carousel-img"
      ${slide.intervalo ? `data-bs-interval="${slide.intervalo}"` : ""}>
      <img src="${slide.img}" class="d-block w-100" alt="${slide.titulo}" />
      <div class="carousel-caption d-none d-md-block">
        <h5>${slide.titulo}</h5>
        <p>${slide.descripcion}</p>
      </div>
    </div>
  `,
  )
  .join("");

//Datos
const stats = [
  {
    numero: "150+",
    valor: 150,
    descripcion:
      "Proyectos de diseño y marketing desarrollados para distintas marcas",
  },
  {
    numero: "50+",
    valor: 50,
    descripcion: "Clientes que han confiado en nuestras soluciones digitales",
  },
  {
    numero: "5+",
    valor: 5,
    descripcion:
      "Años creando experiencias enfocadas en UX/UI y crecimiento digital",
  },
];

document.getElementById("stats-container").innerHTML = stats
  .map(
    (stat, index) => `
    <div class="col-12 col-lg-4 reveal" style="transition-delay: ${index * 0.15}s">
      <div class="stat-card text-center">
        <h3 class="fw-bold display-6 contador" data-valor="${stat.valor}" data-sufijo="+">0+</h3>
        <p class="text-muted mb-0">${stat.descripcion}</p>
      </div>
    </div>
  `,
  )
  .join("");

//Servicios
const servicios = [
  {
    titulo: "Diseño Gráfico y UX/UI",
    descripcion:
      "Interfaces modernas y centradas en el usuario para maximizar resultados.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
      <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
      <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"/>
    </svg>`,
    destacado: true,
  },
  {
    titulo: "Branding",
    descripcion: "Identidad visual que comunica y conecta con tu audiencia.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
      <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
    </svg>`,
    destacado: false,
  },
  {
    titulo: "Marketing Digital",
    descripcion: "Estrategias que generan tráfico, leads y ventas reales.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
      <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
    </svg>`,
    destacado: false,
  },
];

const destacado = servicios.find((s) => s.destacado);
const secundarios = servicios.filter((s) => !s.destacado);

document.getElementById("servicios-container").innerHTML = `
  <div class="col-12 col-lg-4 order-2 order-lg-1 reveal" style="transition-delay: 0s">
    <div class="service-card color-card-pink">
      <div class="iconMain pb-3">${destacado.icono}</div>
      <h5 class="titles-secondary">${destacado.titulo}</h5>
      <p>${destacado.descripcion}</p>
    </div>
  </div>

  <div class="col-12 col-lg-8 order-1 order-lg-2">
    <div class="row g-3 h-100">
      <div class="col-12 mb-3">
        <div class="px-2">
          <h2 class="titles mb-3 reveal" style="transition-delay: 0.1s">Nuestros Servicios</h2>
          <p class="text-muted pb-2 reveal" style="transition-delay: 0.2s">
            Diseñamos experiencias digitales que convierten visitantes en clientes.
            Nos enfocamos en usabilidad, velocidad y resultados medibles.
          </p>
          <a href="#Contacto" class="text-decoration-none fw-semibold reveal" style="transition-delay: 0.3s">
            Trabajemos juntos →
          </a>
        </div>
      </div>
      ${secundarios
        .map(
          (s, index) => `
        <div class="col-12 col-md-6 reveal" style="transition-delay: ${0.3 + index * 0.15}s">
          <div class="service-card color-card-white">
            <div class="iconMain pb-3">${s.icono}</div>
            <h5 class="titles-secondary">${s.titulo}</h5>
            <p class="text-muted">${s.descripcion}</p>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  </div>
`;

/* FAQ´s */

const faqs = [
  {
    id: "collapseOne",
    pregunta: "¿Qué servicios ofrece Grupo Mulive?",
    respuesta:
      "Ofrecemos servicios de diseño gráfico, branding, diseño UX/UI, desarrollo web, creación de contenido visual y estrategias de marketing digital para ayudar a las marcas a crecer en el entorno online.",
  },
  {
    id: "collapseTwo",
    pregunta: "¿Trabajan con marcas pequeñas o solo con empresas grandes?",
    respuesta:
      "Trabajamos con negocios de distintos tamaños, desde emprendimientos y marcas personales hasta empresas que buscan renovar su presencia digital o mejorar la experiencia de sus usuarios.",
  },
  {
    id: "collapseThree",
    pregunta: "¿Pueden desarrollar un proyecto desde cero?",
    respuesta:
      "Sí. Podemos acompañarte desde la definición visual de la marca hasta el diseño de interfaces, desarrollo del sitio web y planteamiento de una estrategia digital alineada con tus objetivos.",
  },
  {
    id: "collapseFour",
    pregunta: "¿Cuánto tiempo tarda un proyecto?",
    respuesta:
      "El tiempo depende del alcance del proyecto. Una identidad visual puede tomar pocas semanas, mientras que un sitio web o una solución digital más completa puede requerir más tiempo según la complejidad y los entregables.",
  },
  {
    id: "collapseFive",
    pregunta: "¿Cómo inicio un proyecto con ustedes?",
    respuesta:
      "El primer paso es compartirnos tu idea, necesidad o meta. A partir de eso podemos definir el alcance, proponer una solución adecuada y estructurar un plan de trabajo claro para tu proyecto.",
  },
];

const acordeon = document.getElementById("accordion-Faqs");

acordeon.innerHTML = faqs
  .map(
    (faq) => `
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${faq.id}"
        aria-expanded="false"
        aria-controls="${faq.id}"
      >
        ${faq.pregunta}
      </button>
    </h2>
    <div id="${faq.id}" class="accordion-collapse collapse" data-bs-parent="#accordion-Faqs">
      <div class="accordion-body text-muted">
        ${faq.respuesta}
      </div>
    </div>
  </div>
`,
  )
  .join("");

//Footer
document.getElementById("year").textContent = new Date().getFullYear();

//Contador
function animarContador(el) {
  const valor = parseInt(el.dataset.valor);
  const sufijo = el.dataset.sufijo || "";
  const duracion = 1500;
  const pasos = 60;
  const incremento = valor / pasos;
  let actual = 0;
  let paso = 0;

  const intervalo = setInterval(() => {
    paso++;
    actual = Math.min(Math.round(incremento * paso), valor);
    el.textContent = actual + sufijo;

    if (paso >= pasos) clearInterval(intervalo);
  }, duracion / pasos);
}

/* Observer */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        entry.target.querySelectorAll(".contador").forEach(animarContador);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
