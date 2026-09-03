export const WA_NUMBER = "584244715866";

export const waLink = (text: string) =>
  `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(text)}`;

export const imageUrl = (file: string) =>
  `https://tallerherreriavalencia.com/assets/images/${file}.jpg?v=1c370da3`;

export const waGeneral = waLink("Hola! Quisiera pedir un presupuesto.");

export const navItems = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Por qué nosotros", href: "#porque" },
  { label: "El taller", href: "#taller" },
];

export const heroSlides = [
  { img: "image17", title: "El hierro de&nbsp;tu casa, hecho a&nbsp;mano y&nbsp;a&nbsp;tu medida" },
  { img: "image13", title: "Portones que abren&nbsp;fácil y cierran&nbsp;seguro" },
  { img: "image16", title: "Pérgolas que le dan&nbsp;sombra a tu terraza" },
  { img: "image23", title: "Treinta años fabricando en&nbsp;Valencia" },
];

export const productos = [
  {
    nombre: "Techo estacionamiento", tipo: "Estacionamiento", img: imageUrl("image14"),
    tarifas: [
      { q: "1 vehículo", v: "Desde $1.590" },
      { q: "2 vehículos", v: "Desde $2.300" },
      { q: "De 3 vehículos en adelante", v: "Llamar para presupuesto" },
    ],
    incluye: ["Cobertura en lámina de aluminio", "Disponible en diferentes colores", "Resistente al sol y a la lluvia", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para un techo de estacionamiento."),
  },
  {
    nombre: "Puerta de seguridad", tipo: "Seguridad", img: imageUrl("image15"),
    tarifas: [{ q: "1 puerta", v: "Desde $790" }],
    incluye: ["Diseños modernos", "Cerradura italiana", "Disponible en diferentes colores", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para una puerta de seguridad."),
  },
  {
    nombre: "Pérgola para terraza", tipo: "Terraza", img: imageUrl("image16"),
    tarifas: [{ q: "1 pérgola", v: "Desde $1.550" }],
    incluye: ["Diseños modernos", "Perfilería tratada contra el óxido", "Disponible en diferentes colores", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para una pérgola."),
  },
  {
    nombre: "Portón estacionamiento", tipo: "Acceso", img: imageUrl("image13"),
    tarifas: [{ q: "1 portón", v: "Desde $1.690" }],
    incluye: ["Diseños modernos", "Cerradura reforzada", "Disponible en diferentes colores", "Instalación", "Pintura", "Instalación en menos de 7 días"],
    wa: waLink("Hola! Quisiera un presupuesto para un portón."),
  },
];

export const segmentos = [
  { t: "Para tu casa", img: imageUrl("image20"), d: "Techos para el carro, portones, pérgolas y puertas. Medimos, acordamos color y montamos sin dejar la casa hecha un desastre.", wa: waLink("Hola! Es para mi casa, quisiera un presupuesto.") },
  { t: "Para tu negocio", img: imageUrl("image24"), d: "Locales, condominios y obra nueva. Trabajamos por proyecto, con medidas repetidas y plazos coordinados con tu obra.", wa: waLink("Hola! Es un proyecto comercial, quisiera un presupuesto.") },
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

export const galeria = [
  "image17", "image19", "image18", "image20", "image23", "image24", "image25", "image21", "image22", "image26",
  "image11", "image06", "image03", "image07", "image01", "image09", "image12", "image08", "image10", "image04", "image05",
].map(imageUrl);

export const resenas = [
  { q: "Perfecto para cuidar mi carro.", a: "Cliente · Techo de estacionamiento, Valencia" },
  { q: "Responsable, eficiente y amable.", a: "Cliente · Portón, Naguanagua" },
  { q: "Excelente acabado.", a: "Cliente · Puerta de seguridad, Maracay" },
];

export const faqs = [
  { q: "¿Cuánto tarda el trabajo?", a: "La mayoría de los techos, portones y puertas quedan instalados en menos de 7 días desde que cierras el presupuesto." },
  { q: "¿El presupuesto tiene costo?", a: "No. Medimos en sitio y cotizamos sin cargo." },
  { q: "¿Qué incluye el precio?", a: "Fabricación a medida, pintura en el color que elijas e instalación con nuestro equipo." },
  { q: "¿Y si tengo más de dos vehículos?", a: "Desde tres puestos el precio se calcula según la medida real del área. Escríbenos y lo revisamos contigo." },
  { q: "¿Instalan fuera de Valencia?", a: "Sí: todo Carabobo, Maracay y Caracas. Para esas zonas coordinamos la visita de medición por WhatsApp." },
  { q: "¿De qué material trabajan?", a: "Techos y pérgolas en lámina de aluminio sobre estructura metálica tratada contra el óxido." },
];
