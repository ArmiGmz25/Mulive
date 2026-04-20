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
