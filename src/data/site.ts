export const WA_NUMBER = "584244715866";

export const waLink = (text: string) =>
  `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(text)}`;

export const imageUrl = (file: string) => `/images/${file}.webp`;

export const waGeneral = waLink("Hola! Quisiera pedir un presupuesto.");

export const navItems = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Por qué nosotros", href: "#porque" },
  { label: "El taller", href: "#taller" },
];

export const heroSlides = [
  { img: "techo-estacionamiento-casa-rosa", title: "El hierro de&nbsp;tu casa, hecho a&nbsp;mano y&nbsp;a&nbsp;tu medida" },
  { img: "porton-negro-horizontal", title: "Portones que abren&nbsp;fácil y cierran&nbsp;seguro" },
  { img: "pergola-negra-patio-piscina", title: "Pérgolas que le dan&nbsp;sombra a tu terraza" },
  { img: "instalacion-estructura-metalica-01", title: "Treinta años fabricando en&nbsp;Valencia" },
];

export const productos = [
  {
    nombre: "Techo estacionamiento", tipo: "Estacionamiento", img: imageUrl("techo-estacionamiento-casa-rosa"),
    tarifas: [
      { q: "1 vehículo", v: "Desde $1.590" },
      { q: "2 vehículos", v: "Desde $2.300" },
      { q: "De 3 vehículos en adelante", v: "Llamar para presupuesto" },
    ],
    incluye: ["Cobertura en lámina de aluminio", "Disponible en diferentes colores", "Resistente al sol y a la lluvia", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para un techo de estacionamiento."),
  },
  {
    nombre: "Puerta de seguridad", tipo: "Seguridad", img: imageUrl("puerta-seguridad-geometrica-marron"),
    tarifas: [{ q: "1 puerta", v: "Desde $790" }],
    incluye: ["Diseños modernos", "Cerradura italiana", "Disponible en diferentes colores", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para una puerta de seguridad."),
  },
  {
    nombre: "Pérgola para terraza", tipo: "Terraza", img: imageUrl("pergola-negra-patio-piscina"),
    tarifas: [{ q: "1 pérgola", v: "Desde $1.550" }],
    incluye: ["Diseños modernos", "Perfilería tratada contra el óxido", "Disponible en diferentes colores", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para una pérgola."),
  },
  {
    nombre: "Portón estacionamiento", tipo: "Acceso", img: imageUrl("porton-negro-horizontal"),
    tarifas: [{ q: "1 portón", v: "Desde $1.690" }],
    incluye: ["Diseños modernos", "Cerradura reforzada", "Disponible en diferentes colores", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para un portón."),
  },
];

export const segmentos = [
  { t: "Para tu casa", img: imageUrl("pergola-madera-marron"), d: "Techos para el carro, portones, pérgolas y puertas. Medimos, acordamos color y montamos sin dejar la casa hecha un desastre.", wa: waLink("Hola! Es para mi casa, quisiera un presupuesto.") },
  { t: "Para tu negocio", img: imageUrl("techo-estacionamiento-carport-edificio"), d: "Locales, condominios y obra nueva. Trabajamos por proyecto, con medidas repetidas y plazos coordinados con tu obra.", wa: waLink("Hola! Es un proyecto comercial, quisiera un presupuesto.") },
];

export const cifras = [
  { n: "30", t: "años en el oficio" },
  { n: "7", t: "días de instalación" },
  { n: "3", t: "ciudades atendidas" },
];

export const pilares = [
  { t: "Atención personalizada", d: "Hablas con el mismo taller de principio a fin: te asesoramos sobre medida, material y color antes de que pagues nada.", icon: "M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z|M8 9h8|M8 13h5" },
  { t: "Instalación incluida", d: "El precio que te damos ya trae fabricación, pintura y montaje. El día de la instalación no aparecen cargos nuevos.", icon: "M3 21h18|M6 21V8l7-4v17|M13 12h5v9|M9 11h1|M9 15h1" },
  { t: "Calidad garantizada", d: "Lámina de aluminio, perfilería tratada contra el óxido y cerradura italiana en puertas. Respondemos por lo que montamos.", icon: "M12 3l3 4.5h4.5L17 12l2.5 4.5H15L12 21l-3-4.5H4.5L7 12 4.5 7.5H9z" },
];

// Fotos subidas por el cliente, editadas y optimizadas a WebP.
export const galeria = [
  { file: "techo-estacionamiento-casa-rosa", alt: "Techo de estacionamiento en voladizo instalado frente a una casa en Valencia" },
  { file: "porton-negro-horizontal", alt: "Portón negro con líneas horizontales" },
  { file: "pergola-negra-patio-piscina", alt: "Pérgola negra instalada sobre patio con piscina" },
  { file: "instalacion-estructura-metalica-01", alt: "Instalación de estructura metálica para pérgola" },
  { file: "estructura-metalica-taller-03", alt: "Estructuras metálicas en fabricación en el taller" },
  { file: "techo-estacionamiento-carport-edificio", alt: "Techo de estacionamiento para varios vehículos en conjunto residencial" },
  { file: "pergola-amarilla-diseno", alt: "Pérgola con acabado en amarillo sobre terraza de madera" },
  { file: "instalacion-techo-terraza", alt: "Instalación de techo de estacionamiento en terraza" },
  { file: "puerta-seguridad-negra-lineas", alt: "Puerta de seguridad negra con líneas horizontales" },
  { file: "puerta-seguridad-gris-paneles", alt: "Puerta de seguridad gris con paneles" },
  { file: "techo-estacionamiento-terraza-ladrillo", alt: "Techo de estacionamiento en terraza de paredes de ladrillo" },
  { file: "puerta-seguridad-geometrica-marron", alt: "Puerta de seguridad marrón con diseño geométrico" },
  { file: "contenedor-metalico-naranja", alt: "Contenedor metálico a medida en color naranja" },
  { file: "estanteria-metalica-naranja", alt: "Estantería metálica a medida en color naranja" },
  { file: "contenedor-corrugado-naranja", alt: "Contenedor metálico corrugado en color naranja" },
  { file: "parrillera-diseno-negra", alt: "Parrillera de diseño en hierro negro" },
  { file: "pergola-madera-marron", alt: "Pérgola con acabado símil madera en tono marrón" },
  { file: "pergola-negra-patio-vidrio", alt: "Pérgola negra sobre patio con paredes de vidrio" },
  { file: "pergola-negra-pasillo", alt: "Pérgola negra instalada en pasillo lateral de la casa" },
  { file: "puerta-seguridad-azul-barras", alt: "Puerta de seguridad azul con barras verticales" },
  { file: "instalacion-techo-patio-enladrillado", alt: "Instalación de techo de estacionamiento en patio enladrillado" },
].map(({ file, alt }) => ({ img: imageUrl(file), alt }));

export const resenas = [
  { q: "Perfecto para cuidar mi carro.", a: "Techo de estacionamiento, Valencia" },
  { q: "Responsable, eficiente y amable.", a: "Portón, Naguanagua" },
  { q: "Excelente acabado.", a: "Puerta de seguridad, Maracay" },
];

export const faqs = [
  { q: "¿Cuánto tarda el trabajo?", a: "La mayoría de los techos, portones y puertas quedan instalados en menos de 7 días desde que cierras el presupuesto." },
  { q: "¿El presupuesto tiene costo?", a: "No. Medimos en sitio y cotizamos sin cargo." },
  { q: "¿Qué incluye el precio?", a: "Fabricación a medida, pintura en el color que elijas e instalación con nuestro equipo." },
  { q: "¿Y si tengo más de dos vehículos?", a: "Desde tres puestos el precio se calcula según la medida real del área. Escríbenos y lo revisamos contigo." },
  { q: "¿Instalan fuera de Valencia?", a: "Sí: todo Carabobo, Maracay y Caracas. Para esas zonas coordinamos la visita de medición por WhatsApp." },
  { q: "¿De qué material trabajan?", a: "Techos y pérgolas en lámina de aluminio sobre estructura metálica tratada contra el óxido." },
];
