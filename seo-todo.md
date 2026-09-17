# SEO — Plan de acción para ser el taller #1 de Valencia/Carabobo

Meta: dominar el paquete local (Google Maps + búsqueda local) de Valencia/Carabobo. Ordenado por impacto real, no por facilidad. Las secciones 1 y 2 no requieren tocar el código — dependen de vos (o quien maneje el GBP).

---

## ✅ Ya hecho (base técnica)

- [x] Meta description + Open Graph + Twitter Card
- [x] `<link rel="canonical">`
- [x] Sitemap (`sitemap-index.xml`) + `robots.txt`
- [x] Structured data `LocalBusiness` (JSON-LD) con NAP real (dirección, teléfono, horario, rating)
- [x] OG image propia (1200×630) para previews en WhatsApp/redes
- [x] Google Analytics (GA4) instalado + tracking de clics en todos los CTA
- [x] Imágenes reales optimizadas a WebP, sin duplicados, con `alt` descriptivo
- [x] Accesibilidad: focus visible, skip-link, alt text, `prefers-reduced-motion`
- [x] Performance: sitio liviano (Astro estático), sin dependencias de un dominio externo

---

## 🔴 Prioridad 1 — Google Business Profile (el mayor peso, gratis, sin código)

- [ ] Completar el perfil al 100% (Google mismo lo marca incompleto hoy)
- [ ] Elegir categoría secundaria además de la principal
- [ ] Subir los 4 productos (ver `google-business-productos.md`)
- [ ] Subir fotos nuevas cada 2-4 semanas (ya hay +20 de buena calidad para rotar)
- [ ] Publicar un "Post" de Google cada 1-2 semanas (foto + texto corto de un trabajo reciente)
- [ ] Verificar que el teléfono, nombre y dirección coincidan exactamente con la web (ya lo igualamos: Calle 94 Cantaura, Valencia 2001, Carabobo)
- [ ] Activar mensajería de Google Business (si aceptan consultas por ahí también)

## 🔴 Prioridad 2 — Reseñas (segundo mayor peso)

- [ ] Pedir reseña a cada cliente después de instalar (mensaje de WhatsApp con el link directo a dejar reseña)
- [ ] Meta: pasar de 5 a 30-40 reseñas en los próximos meses
- [ ] Responder **todas** las reseñas, buenas y malas, en menos de 48h
- [ ] Una vez haya más reseñas reales, avisame para actualizar el `aggregateRating` en el schema del sitio con los números reales

## 🟠 Prioridad 3 — Citations (perfil consistente en otros directorios)

- [ ] Reclamar y completar **Bing Places** (clave: ChatGPT, Copilot y Alexa recomiendan negocios desde ahí, no desde Google)
- [ ] Convertir el perfil de Facebook de personal a **Página de Negocio** (hoy resta confianza)
- [ ] Registrar el negocio en Páginas Amarillas Venezuela y directorios locales de Carabobo
- [ ] Verificar que el nombre/teléfono/dirección sea idéntico en todos lados (NAP consistency)

## 🟠 Prioridad 4 — Páginas de servicio dedicadas (lo próximo en el código)

- [ ] `/techos-estacionamiento/` — contenido único, 300-500 palabras, H1 con keyword + ciudad
- [ ] `/portones/`
- [ ] `/pergolas/`
- [ ] `/puertas-de-seguridad/`
- [ ] Cada una con su propio `Service` schema anidado al `LocalBusiness`
- [ ] Actualizar las URLs del punto 1 (Google Business) para que cada producto enlace a su página propia en vez de `/#catalogo`
- [ ] Actualizar sitemap (automático una vez creadas las rutas en Astro)

## 🟡 Prioridad 5 — Backlinks locales

- [ ] Cámara de Comercio de Carabobo / Valencia (si tienen directorio de socios)
- [ ] Proveedores de materiales (lámina, aluminio) — pedir que enlacen como instalador certificado
- [ ] Gremios o asociaciones de construcción/herrería locales
- [ ] Cualquier medio local (prensa, blogs de Valencia) que quiera cubrir la historia de 30 años del taller

## 🟢 Prioridad 6 — Blog (solo si 1-4 ya están sólidos)

- [ ] 4-6 posts al año respondiendo preguntas reales de compra:
  - "¿Cuánto cuesta un techo de aluminio en Valencia?"
  - "Aluminio vs. hierro: ¿cuál conviene para tu techo de estacionamiento?"
  - "Cuánto dura la instalación de un portón a medida"
- [ ] Nada de contenido genérico de relleno — cada post debe responder algo que la gente busca antes de pedir presupuesto
- [ ] No arrancar esto si implica descuidar 1-3

---

## Qué NO hacer

- No comprar reseñas ni citations falsas — Google las detecta y penaliza
- No perseguir ranking nacional ("herrería Venezuela") antes de dominar lo local — es plata mal invertida
- No lanzar el blog sin poder sostener el ritmo — mejor no tener blog que tenerlo abandonado
