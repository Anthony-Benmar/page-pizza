const pages = {
  pizza: {
    title: "Pizza al momento, donde tú estés",
    eyebrow: "Pizza para compartir",
    summary: "Una estación de pizza recién hecha transforma cualquier encuentro en un plan memorable.",
    introTitle: "Una buena pizza reúne a todo el mundo.",
    intro: "Preparamos cada masa con tiempo y terminamos las pizzas en el lugar del evento. Elige una propuesta sencilla para una reunión íntima o un servicio completo para celebrar a lo grande.",
    features: [
      ["01", "Masa con carácter", "Una base ligera, fermentada lentamente y horneada a alta temperatura."],
      ["02", "Ingredientes de temporada", "Combinaciones equilibradas con productos frescos y opciones vegetarianas."],
      ["03", "Servicio ágil", "Organizamos el ritmo de preparación para que tus invitados disfruten sin largas esperas."]
    ],
    quote: "El horno se enciende, llegan los aromas y la fiesta encuentra su punto de encuentro.",
    cta: "Cuéntanos qué estás celebrando"
  },
  pasta: {
    title: "Pasta fresca para un evento especial",
    eyebrow: "Pasta para compartir",
    summary: "Recetas reconfortantes, ingredientes cuidados y servicio en directo para disfrutar sin prisas.",
    introTitle: "Italia en el centro de la mesa.",
    intro: "Creamos un menú de pasta pensado para tu evento: desde salsas clásicas hasta combinaciones de temporada. Adaptamos el formato al espacio y al número de invitados.",
    features: [
      ["01", "Recetas reconocibles", "Sabores italianos familiares, preparados con atención al detalle."],
      ["02", "Opciones para todos", "Alternativas vegetarianas y ajustes de menú acordados con antelación."],
      ["03", "Cocina en directo", "Un servicio cercano que convierte la preparación en parte de la experiencia."]
    ],
    quote: "Un plato sencillo, bien hecho y compartido con buena compañía.",
    cta: "Diseñemos tu menú"
  },
  inspiracion: {
    title: "Ideas para celebrar alrededor de la comida",
    eyebrow: "Inspiración",
    summary: "Encuentra el formato adecuado para tu evento, desde una fiesta al aire libre hasta una celebración de equipo.",
    introTitle: "Cada ocasión merece su propio plan.",
    intro: "La comida marca el ritmo de un encuentro. Explora propuestas flexibles para distintos espacios y grupos; combinamos cocina en directo, atención cercana y una organización clara.",
    features: [
      ["01", "Fiestas y festivales", "Un servicio dinámico para encuentros al aire libre, celebraciones y jornadas culturales."],
      ["02", "Eventos de empresa", "Una experiencia informal para reuniones, presentaciones y días de equipo."],
      ["03", "Celebraciones privadas", "Formatos acogedores para cumpleaños, aniversarios y reuniones familiares."]
    ],
    quote: "La mejor idea suele empezar con una mesa compartida.",
    cta: "Hablemos de tu idea"
  },
  historias: {
    title: "Momentos que merecen repetirse",
    eyebrow: "Historias",
    summary: "Detrás de cada servicio hay una celebración distinta, un espacio nuevo y muchas conversaciones alrededor del horno.",
    introTitle: "El recuerdo no está solo en el menú.",
    intro: "Nos gusta participar en encuentros donde la comida invita a quedarse un rato más. Aquí reunimos ejemplos de formatos que podemos adaptar a tu ocasión, sin atribuirlos a clientes reales.",
    features: [
      ["01", "Una plaza llena", "Puestos ágiles y un menú fácil de disfrutar durante una tarde de actividades."],
      ["02", "Un equipo reunido", "Una comida informal para conectar después de una jornada de trabajo."],
      ["03", "Una celebración en casa", "Un servicio cálido para que anfitriones e invitados compartan el momento."]
    ],
    quote: "Los mejores recuerdos tienen algo en común: se disfrutan en compañía.",
    cta: "Crea tu propia historia"
  },
  nosotros: {
    title: "Cocina cercana, hecha para compartir",
    eyebrow: "Sobre nosotros",
    summary: "Somos un equipo que disfruta cocinando en directo y haciendo que organizar un evento resulte sencillo.",
    introTitle: "Nos mueve la hospitalidad.",
    intro: "Creemos que una buena experiencia combina ingredientes honestos, una preparación cuidada y un equipo atento. Por eso escuchamos primero y proponemos un servicio que encaje con tu espacio y tus invitados.",
    features: [
      ["01", "Cuidamos el producto", "Elegimos ingredientes y recetas pensando en el sabor y el equilibrio."],
      ["02", "Nos adaptamos", "Acordamos con antelación los tiempos, el espacio y las necesidades del evento."],
      ["03", "Cocinamos juntos", "Nuestro equipo prepara y sirve con una actitud abierta y cercana."]
    ],
    quote: "La cocina es nuestro oficio; hacerte sentir bien recibido es nuestra manera de trabajar.",
    cta: "Conoce nuestra propuesta"
  },
  contacto: {
    title: "¿Qué estás organizando?",
    eyebrow: "Contacto",
    summary: "Cuéntanos la fecha, el lugar y el tipo de celebración. Te ayudaremos a encontrar el formato adecuado.",
    introTitle: "Empecemos por tu idea.",
    intro: "Comparte algunos datos y prepararemos un borrador en tu aplicación de correo. La página no envía información a un servidor y todavía no tiene una dirección receptora configurada.",
    contact: true
  },
  festivales: {
    title: "Comida recién hecha para días llenos de energía",
    eyebrow: "Festivales y eventos",
    summary: "Una propuesta adaptable para encuentros al aire libre, celebraciones públicas y jornadas con mucho movimiento.",
    introTitle: "Un servicio que sigue el ritmo del evento.",
    intro: "Planificamos el menú, el espacio y el flujo de atención para que el público pueda disfrutar de una pausa sabrosa. Los detalles de capacidad y logística se confirman según cada lugar.",
    features: [
      ["01", "Planificación previa", "Coordinamos horarios, acceso, necesidades eléctricas y distribución del puesto."],
      ["02", "Menú práctico", "Opciones fáciles de pedir y disfrutar mientras continúa la programación."],
      ["03", "Equipo preparado", "Acordamos el personal y el ritmo de servicio en función de la jornada."]
    ],
    quote: "Que el público disfrute del evento; nosotros nos ocupamos de la comida.",
    cta: "Cuéntanos sobre el festival"
  },
  empresas: {
    title: "Una pausa diferente para tu equipo",
    eyebrow: "Eventos corporativos",
    summary: "Cocina en directo para reuniones, jornadas de equipo, lanzamientos y celebraciones de empresa.",
    introTitle: "Un encuentro de trabajo también puede sentirse especial.",
    intro: "Diseñamos una experiencia informal que facilita conversar y compartir. Acordamos el formato con tu equipo organizador para integrarnos en el horario y el espacio del evento.",
    features: [
      ["01", "Reuniones y jornadas", "Una comida cómoda para combinar con presentaciones y actividades de equipo."],
      ["02", "Celebraciones", "Un servicio relajado para reconocer logros y disfrutar juntos."],
      ["03", "Propuestas a medida", "Definimos menú, horarios y necesidades según la sede y los asistentes."]
    ],
    quote: "Una buena comida también es una forma de reunir al equipo.",
    cta: "Planifiquemos el evento"
  }
};

const pageKey = new URLSearchParams(location.search).get("pagina") || "pizza";
const page = pages[pageKey] || pages.pizza;
const pageContent = document.querySelector("#page-content");
const title = page.title;
document.title = `${title} | Amici`;
document.querySelector('meta[name="description"]').content = page.summary;

const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

const cards = (page.features || []).map(([number, heading, body]) => `
  <article class="feature-card">
    <span class="feature-number">${escapeHtml(number)}</span>
    <h3>${escapeHtml(heading)}</h3>
    <p>${escapeHtml(body)}</p>
  </article>
`).join("");

const contactSection = page.contact ? `
  <section class="content-section">
    <div class="contact-layout">
      <div class="contact-details">
        <p class="eyebrow">Cuéntanos lo esencial</p>
        <h2 class="section-heading" style="text-align:left;margin:0 0 24px">Una fecha, una idea y empezamos.</h2>
        <p>Al enviar el formulario se abrirá un borrador en tu correo con los datos que hayas escrito. No se guardan en esta página.</p>
      </div>
      <form class="contact-form" id="contact-form">
        <div class="form-field"><label for="name">Nombre</label><input id="name" name="name" autocomplete="name" required></div>
        <div class="form-field"><label for="email">Correo electrónico</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        <div class="form-field"><label for="date">Fecha aproximada</label><input id="date" name="date" type="date"></div>
        <div class="form-field"><label for="guests">Número de invitados</label><input id="guests" name="guests" type="number" min="1" inputmode="numeric"></div>
        <div class="form-field is-wide"><label for="message">Cuéntanos sobre el evento</label><textarea id="message" name="message" required></textarea></div>
        <p class="form-note">Al continuar se abrirá un borrador de correo con estos datos. Añade la dirección de destino; esta página no transmite ni almacena la información.</p>
        <button class="button-link form-submit" type="submit">Preparar correo <span aria-hidden="true">↗</span></button>
        <p class="form-result" id="form-result" aria-live="polite"></p>
      </form>
    </div>
  </section>
` : `
  <section class="content-section">
    <div class="feature-grid">${cards}</div>
  </section>
  <section class="content-section quote-section">
    <blockquote>${escapeHtml(page.quote)}</blockquote>
    <p>Una experiencia pensada para compartir.</p>
  </section>
  ${page.features ? `
    <section class="content-section cta-section">
      <h2>${escapeHtml(page.cta)}</h2>
      <a class="button-link" href="paginas.html?pagina=contacto">Hablemos <span aria-hidden="true">↗</span></a>
    </section>
  ` : ""}
`;

pageContent.innerHTML = `
  <section class="page-hero ${page.contact ? "is-contact" : ""}">
    <div class="hero-copy">
      <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
      <h1>${escapeHtml(title)}</h1>
      <p class="hero-summary">${escapeHtml(page.summary)}</p>
      ${page.contact ? "" : '<a class="button-link" href="paginas.html?pagina=contacto">Hablemos de tu evento <span aria-hidden="true">↗</span></a>'}
    </div>
  </section>
  <section class="intro-section">
    <h2>${escapeHtml(page.introTitle)}</h2>
    <div class="intro-copy"><p>${escapeHtml(page.intro)}</p></div>
  </section>
  ${pageKey === "inspiracion" ? `
    <section class="content-section">
      <div class="event-grid">
        <article class="event-card"><span class="feature-number">IDEA 01</span><h3>Festivales y eventos</h3><p>Un servicio flexible para jornadas al aire libre y celebraciones públicas.</p><a class="text-link" href="paginas.html?pagina=festivales">Descubrir propuesta ↗</a></article>
        <article class="event-card"><span class="feature-number">IDEA 02</span><h3>Eventos corporativos</h3><p>Una comida informal para reuniones, lanzamientos y equipos.</p><a class="text-link" href="paginas.html?pagina=empresas">Descubrir propuesta ↗</a></article>
      </div>
    </section>
    <section class="content-section cta-section"><h2>${escapeHtml(page.cta)}</h2><a class="button-link" href="paginas.html?pagina=contacto">Hablemos <span aria-hidden="true">↗</span></a></section>
  ` : contactSection}
`;

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  nav.classList.toggle("is-open", !isExpanded);
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a") && window.matchMedia("(max-width: 900px)").matches) {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Consulta para evento - ${data.get("name")}`;
    const body = [
      `Nombre: ${data.get("name")}`,
      `Correo: ${data.get("email")}`,
      `Fecha: ${data.get("date") || "Por definir"}`,
      `Invitados: ${data.get("guests") || "Por definir"}`,
      "",
      data.get("message")
    ].join("\n");
    document.querySelector("#form-result").textContent = "Abriendo tu aplicación de correo…";
    location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
