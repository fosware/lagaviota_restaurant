# AI Handoff - La Gaviota Mexican Restaurant

Este documento está dirigido a cualquier IA o desarrollador que continúe el proyecto. Si estás leyendo esto, úsalo como mapa principal antes de tocar código. El objetivo es evitar que la aplicación vuelva a sentirse genérica, incompleta o visualmente poco apetecible.

## Resumen del Proyecto

**Cliente:** La Gaviota Mexican Restaurant  
**Tipo:** Restaurante mexicano local, familiar, con dine-in, carryout y catering.  
**Ubicación:** 2280 S Quebec, Denver, CO 80231  
**Teléfono:** 303-368-9941  
**Correo:** lagaviotarestaurantaurora@gmail.com  
**Horario:** Monday-Sunday, 9:00 am-7:00 pm  
**Conversión principal:** llamada telefónica para ordenar o pedir catering.  

La aplicación reconstruye el sitio de La Gaviota para corregir señales de plantilla sin terminar, ordenar menú/catering/galería y hacer que la gente quiera llamar, ver la carta o pedir catering.

## Stack y Estado Técnico

- Next.js `16.2.9`
- TypeScript
- Tailwind CSS
- Componentes locales estilo shadcn/ui
- App Router
- Sitio estático, sin backend
- Imagenes locales optimizadas en WebP/AVIF
- Google Maps embed sin API key
- Schema.org `Restaurant`
- `robots.txt` y `sitemap.xml`

Comandos principales:

```bash
npm run dev
npm run typecheck
npm run build
npm run optimize:images
```

Notas:

- `npm run build` está aprobado en el entorno actual.
- Para levantar `npm run dev` puede hacer falta permiso escalado porque el sandbox puede bloquear el puerto.
- Si `npm install` falla por red/sandbox, repetir con permisos escalados.
- No uses `npm audit fix --force` sin autorización: puede cambiar dependencias de forma rompiente.

## Rutas

- `/` - Home
- `/menu` - Carta/menu
- `/catering` - Catering
- `/family-packs` - Family packs / party packages
- `/gallery` - Galería
- `/about` - Historia breve
- `/contact` - Contacto, horarios, mapa y formulario pendiente
- `/robots.txt`
- `/sitemap.xml`

## Archivos Clave

Datos centralizados:

- `lib/site.ts`

Layout y navegación:

- `app/layout.tsx`
- `components/layout/header.tsx`
- `components/layout/mobile-drawer.tsx`
- `components/layout/sticky-mobile-cta.tsx`
- `components/layout/footer.tsx`

Secciones principales:

- `components/sections/hero-section.tsx`
- `components/sections/quick-actions.tsx`
- `components/sections/menu-highlights.tsx`
- `components/sections/menu-category.tsx`
- `components/sections/catering-section.tsx`
- `components/sections/family-packs-section.tsx`
- `components/sections/gallery-grid.tsx`
- `components/sections/contact-section.tsx`
- `components/sections/faq-section.tsx`

SEO:

- `components/seo/schema-restaurant.tsx`
- `components/seo/seo-head.ts`
- `components/seo/breadcrumbs.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

Estilos globales:

- `app/globals.css`

Assets:

- `public/images/*`
- `public/source-images/*`
- `public/favicon.svg`
- `public/favicon.ico`
- `scripts/optimize-images.mjs`

## Direccion de UX/UI Actual

El sitio debe sentirse como restaurante mexicano local real, no como fine dining, no como landing page SaaS y no como plantilla.

Principios actuales:

- Apetito antes que ornamento.
- Llamada clara, pero sin sensación de urgencia agresiva.
- Color cálido, fresco y local.
- Fotos visibles sin filtro amarillo ni overlay pesado.
- Móvil primero: llamada, menú y catering siempre a mano.
- Información útil arriba: teléfono, horario, ubicación, carryout.
- No inventar claims, premios, reseñas ni historia familiar.

## Paleta Actual

La primera versión usaba un rojo muy fuerte y generaba sensación de alarma. Se cambió a una paleta más suave:

- Fondo crema limpio: `#fffaf0`
- Texto oscuro: `#251713`
- Terracota/chile seco primary: `#a65f3f`
- Amarillo maíz secundario: `#ffc857`
- Turquesa/salsa fresca accent: `#087f8c`
- Muted: `#f1ead9`

Restricción importante:

- Evitar volver a rojo puro tipo emergencia.
- Evitar overlays amarillos/cinematográficos sobre comida.
- Evitar estética premium oscura.
- Evitar que todos los CTAs parezcan botones genéricos en fila.

## Estado de Diseño Actual

### Home

El hero fue iterado varias veces:

- Se quitó el fondo oscuro con overlay.
- La foto de comida ahora se ve limpia.
- El CTA principal de llamada pasó de bloque rojo a tarjeta cálida con icono terracota.
- Los CTAs secundarios son Menu y Catering con jerarquía clara.
- Debajo de la foto hay fichas de antojos: Tacos, Tamales, Micheladas, con iconos.

Punto a cuidar:

- La llamada debe destacar sin parecer alerta.
- La foto debe seguir siendo protagonista visual.
- No saturar el primer viewport con demasiadas tarjetas.

### Galería

La galería original era plana. Se rediseñó:

- Foto protagonista grande.
- Grid editorial con tamaños alternados.
- Captions sobre imagen.
- Overlay más suave.
- CTA lateral compacto.

Punto a cuidar:

- La galería no debe volver a ser una cuadrícula uniforme de cards.
- No oscurecer de más las fotos.
- El texto del label de imagen debe corresponder a la foto. No usar "salsa bar" si la imagen no muestra salsa bar.

### Carta/Menu

La carta original era solo un listado. Se rediseñó:

- Rutas rápidas por intención: tacos, platos completos, catering/party.
- Navegación horizontal por categorías.
- Categorías con iconos.
- Conteo de opciones.
- Items con divisores y badges ligeros para carryout.

Punto a cuidar:

- No publicar precios si no están validados.
- No inventar platillos.
- No convertir la carta en un dashboard frío.
- Debe ser escaneable en móvil.

## Componentes Requeridos por el Brief

Ya existen:

- `Header`
- `MobileDrawer`
- `HeroSection`
- `CallButton`
- `MenuHighlights`
- `MenuCategory`
- `CateringSection`
- `FamilyPacksSection`
- `GalleryGrid`
- `AboutSection`
- `ContactCard`
- `HoursCard`
- `MapEmbed`
- `FAQSection`
- `Footer`
- `LanguageToggle`
- `StickyMobileCTA`
- `SEOHead`
- `Breadcrumbs`
- `SchemaRestaurant`

## Restricciones de Contenido

No inventar:

- Precios
- Delivery
- Reservas online
- WhatsApp
- Testimonios
- Premios
- Fundadores
- Origen regional de recetas
- Historia migratoria/familiar no confirmada
- Redes sociales no verificadas
- Depositos, anticipación mínima o políticas de catering

Permitido:

- Dine-in
- Carryout
- Catering
- Party packages por teléfono
- Recetas familiares
- Ingredientes frescos
- Restaurante local y familiar
- Más de 15 años de experiencia
- Salsa bar, micheladas y soccer solo como información mencionada por el sitio actual; si se publica, conviene confirmar vigencia.

## Datos Confirmados

Usar estos datos exactamente salvo nueva validación:

```ts
phoneDisplay: "303-368-9941"
phoneHref: "tel:3033689941"
email: "lagaviotarestaurantaurora@gmail.com"
address: "2280 S Quebec, Denver, CO 80231"
hours: "Monday-Sunday, 9:00 am-7:00 pm"
```

## Imagenes

Hay dos carpetas:

- `public/source-images`: imagenes fuente descargadas del sitio actual.
- `public/images`: versiones optimizadas WebP/AVIF.

Comando:

```bash
npm run optimize:images
```

Importante:

- Las imágenes vienen del sitio actual de La Gaviota para trabajo local.
- El sitio actual indica que el contenido pertenece al negocio/licenciantes.
- Antes de publicar, confirmar permiso de uso.
- No usar fotos stock si hay material propio disponible.

## SEO

Mantener:

- Title base: `La Gaviota Mexican Restaurant | Mexican Food & Catering in Denver, CO`
- Meta description enfocada en Mexican food, tacos, tamales, seafood, pupusas, carryout y party catering.
- Schema.org `Restaurant`.
- NAP consistente: name, address, phone.
- URLs limpias.
- Alt text descriptivo por imagen.
- `sitemap.xml` y `robots.txt`.

No añadir `sameAs` si no hay redes verificadas.

## Accesibilidad

Mantener:

- `aria-label` en botones de llamada y drawer.
- `aria-current="page"` en nav activa.
- Drawer móvil cierra con Escape, backdrop y navegación.
- Focus visible.
- Labels reales en formularios.
- Alt text en imágenes.
- Botones con área táctil suficiente.
- Contraste suficiente.

No depender solo del color para indicar estado.

## Catering y pedidos

`CateringInquiryForm` ya no funciona como formulario pendiente de endpoint. Ahora es un bloque comercial para planear catering por teléfono.

`/order` existe como flujo propio para pedidos para recoger. El formulario no procesa pagos ni confirma automáticamente; arma el pedido y pide al comensal llamar para confirmar horario.

No convertir estos flujos en checkout real sin:

- Endpoint validado,
- confirmación explícita de envío por email/servicio tercero, o
- integración POS/backend aprobada.

## Cómo Continuar el Trabajo

Antes de editar:

1. Leer este archivo.
2. Revisar `instructions.md`.
3. Revisar el componente o página que vas a tocar.
4. Identificar si el cambio afecta mobile, SEO, accesibilidad o conversión.

Después de editar:

1. Ejecutar:

```bash
npm run typecheck
npm run build
```

2. Si el cambio es visual, generar capturas con Firefox headless si está disponible.
3. Revisar al menos:

- 390px móvil
- 1440px desktop

4. Actualizar este archivo en la sección "Seguimiento".

## Comandos de Capturas Usados

Ejemplos:

```bash
timeout 20s firefox --headless --no-remote --profile /tmp/ff-lg-desktop --window-size=1440,1200 --screenshot /tmp/lagaviota-page.png http://localhost:3000/menu
timeout 20s firefox --headless --no-remote --profile /tmp/ff-lg-mobile --window-size=390,1300 --screenshot /tmp/lagaviota-page-mobile.png http://localhost:3000/menu
```

Puede requerir permisos escalados porque accede al servidor local.

## Riesgos y Errores a Evitar

- Convertir el sitio en una landing premium que no se siente local.
- Usar rojo demasiado intenso y generar urgencia.
- Poner overlay amarillo o filtros que maten el apetito.
- Repetir tarjetas iguales sin jerarquía visual.
- Hacer del menú una lista fría y plana.
- Oscurecer demasiado la galería.
- Introducir precios sin validación.
- Agregar delivery/reservas/WhatsApp sin confirmación.
- Cambiar teléfono, correo u horario sin fuente confirmada.
- Quitar el CTA fijo móvil sin reemplazo equivalente.
- Romper el drawer móvil o el cierre con Escape.
- Usar imagen de mapa en vez de embed interactivo.

## Pendientes Antes de Publicar

- Confirmar permiso para reutilizar fotos del sitio actual.
- Confirmar menú y precios vigentes.
- Confirmar disponibilidad actual de todos los platillos listados.
- Confirmar horario.
- Confirmar si el correo sigue activo y se revisa.
- Confirmar si Rosa Romero debe aparecer públicamente.
- Confirmar si soccer, salsa bar, micheladas y beer-to-go siguen vigentes.
- Confirmar si hay redes sociales reales.
- Confirmar si existe plataforma de delivery.
- Confirmar políticas reales de catering y party packages.
- Conectar o retirar formulario de catering.

## Seguimiento

Mantén esta sección actualizada cada vez que hagas cambios relevantes.

Formato recomendado:

```md
### YYYY-MM-DD - Breve titulo

- Cambios realizados:
- Archivos tocados:
- Verificación:
- Pendientes nuevos:
```

### 2026-06-17 - Proyecto inicial

- Cambios realizados:
  - Se creó proyecto Next.js desde cero.
  - Se agregaron rutas principales, componentes reutilizables, SEO, schema, sitemap, robots y assets optimizados.
  - Se implementó navegación desktop, drawer móvil y CTA fijo móvil.
- Archivos tocados:
  - Estructura completa de `app`, `components`, `lib`, `public`, `scripts`.
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.

### 2026-06-19 - Ajuste visual tras revisión en servidor local

- Cambios realizados:
  - Se revisó `http://localhost:3000` con Firefox headless usando capturas desktop y móvil.
  - Se corrigió el hero para que no dependa de `88svh`; ahora usa mínimos responsivos más estables y evita huecos excesivos en pantallas altas/capturas largas.
  - Se forzó `loading="eager"` en la imagen principal de Catering para evitar que el bloque aparezca vacío durante revisión/carga temprana.
- Archivos principales tocados:
  - `components/sections/hero-section.tsx`
  - `components/sections/catering-section.tsx`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.

### 2026-06-19 - Logo real, favicon e iconos

- Cambios realizados:
  - Se revisó `public/images/propuesta-logo.png` como propuesta de marca.
  - Se separó el símbolo de la gaviota del nombre para usar el mark en header/favicon y mantener el texto del nombre como HTML legible.
  - Se generaron assets optimizados del logo:
    - `public/images/la-gaviota-mark.png`
    - `public/images/la-gaviota-mark.webp`
    - `public/images/la-gaviota-logo-full.webp`
  - Se regeneraron favicons e iconos de app con fondo crema:
    - `public/favicon.ico`
    - `public/favicon.svg`
    - `public/favicon-16x16.png`
    - `public/favicon-32x32.png`
    - `public/favicon-48x48.png`
    - `public/apple-touch-icon.png`
    - `public/icon-192.png`
    - `public/icon-512.png`
    - `public/site.webmanifest`
  - Header ahora usa el símbolo real de la gaviota y conserva `La Gaviota` / `Mexican Restaurant` como texto separado.
- Archivos principales tocados:
  - `components/layout/header.tsx`
  - `app/layout.tsx`
  - `app/globals.css`
  - `public/favicon.svg`
  - `public/site.webmanifest`
- Verificación:
  - Capturas con Firefox headless en desktop y móvil.
  - `npm run typecheck` OK.
  - `npm run build` OK.

### 2026-06-19 - Corrección de posicionamiento culinario

- Cambios realizados:
  - Se revisó el sitio original y se confirmó que la promesa pública es `authentic Mexican and Central America food`, no un restaurante principalmente costero.
  - Se cambió el hero de `Coastal flavor...` a una promesa fiel: comida mexicana y centroamericana en Denver.
  - Se mantuvieron mariscos como parte apetecible del menú, pero no como eje principal de marca.
  - Se actualizó copy visible, footer, about, catering, FAQ, SEO base y metadatos de páginas internas.
  - `SchemaRestaurant` ahora declara `Mexican`, `Central American`, `Salvadoran` y `Honduran` en `servesCuisine`.
- Archivos principales tocados:
  - `lib/i18n.tsx`
  - `lib/site.ts`
  - `components/seo/schema-restaurant.tsx`
  - `app/layout.tsx`
  - `app/about/page.tsx`
  - `app/catering/page.tsx`
  - `app/gallery/page.tsx`
- Verificación:
  - Capturas con Firefox headless en desktop y móvil del hero actualizado.
  - `npm run typecheck` OK.
  - `npm run build` OK.

### 2026-06-19 - Revisión de foto principal y muestras de menú

- Cambios realizados:
  - Se reemplazó la imagen principal del hero de `siete-mares.webp` a `fajitas-combinadas.webp`.
  - Motivo: `siete mares` comunica demasiado mariscos/costa; `fajitas combinadas` representa mejor una mesa amplia de comida mexicana y centroamericana.
  - Las muestras del hero ahora son:
    - `Tostadas $3.99`
    - `Pupusas $2.99`
    - `7 Mares $18.39`
  - Se compactaron las muestras del hero en móvil para evitar que la barra fija inferior tape el contenido.
  - Se revisaron asociaciones de imágenes del menú:
    - Se quitó la foto de `Tacos La Gaviota` porque no hay foto clara de tacos y usar tostadas resultaba engañoso.
    - `Breakfast Burritos` usa ahora `burrito-smothered.webp`, más cercano que chilaquiles.
    - `Extras` y `Postres` quedan sin foto al no tener una imagen honesta de la categoría.
  - `menuHighlights` ahora evita muestras con imagen/nombre inconsistentes y prioriza fajitas, pupusas, tostadas, tortas, 7 mares y chilaquiles.
- Archivos principales tocados:
  - `components/sections/hero-section.tsx`
  - `lib/i18n.tsx`
  - `lib/site.ts`
- Verificación:
  - Capturas con Firefox headless de home desktop/móvil y `/menu`.
  - `npm run typecheck` OK.
  - `npm run build` OK.
- Pendientes nuevos:
  - Validar fotos, menú, precios y datos comerciales antes de publicar.

### 2026-06-17 - Ajustes de paleta y hero

- Cambios realizados:
  - Se eliminó sensación oscura/amarilla del hero.
  - Se cambió rojo intenso por terracota/chile seco.
  - Se rediseñó CTA principal para que la llamada destaque sin parecer alerta.
  - Se agregaron fichas con iconos para Tacos, Tamales y Micheladas.
- Archivos tocados:
  - `app/globals.css`
  - `app/layout.tsx`
  - `components/sections/hero-section.tsx`
  - `public/favicon.svg`
  - `public/favicon.ico`
- Verificación:
  - `npm run optimize:images` OK cuando se actualizó favicon.
  - `npm run typecheck` OK.
  - `npm run build` OK.
  - Capturas desktop/móvil revisadas.
- Pendientes nuevos:
  - Seguir puliendo microinteracciones y composición visual según feedback.

### 2026-06-17 - Rediseño de galería y carta

- Cambios realizados:
  - Galería pasó de grid plano a composición editorial con foto protagonista, tamaños alternados y captions.
  - Carta pasó de listado a experiencia escaneable con rutas rápidas, navegación por categoría, iconos y jerarquía.
  - Se compactaron CTAs laterales y se redujo aire muerto en páginas internas.
- Archivos tocados:
  - `app/menu/page.tsx`
  - `app/gallery/page.tsx`
  - `components/sections/menu-category.tsx`
  - `components/sections/gallery-grid.tsx`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.

  - Capturas desktop/móvil de `/menu` y `/gallery` revisadas.
- Pendientes nuevos:
  - La carta aún puede mejorar si se consiguen precios y descripciones oficiales.
  - Galería mejoraría mucho con selección fotográfica aprobada y fotos más apetitosas/actuales.

### 2026-06-19 - Facelift UX/UI y limpieza de señales internas

- Cambios realizados:
  - Se cambió la imagen principal del hero de salsa bar a un plato más apetitoso.
  - Se simplificó el hero para reducir sensación de dashboard en el primer viewport.
  - Se compactaron las acciones rápidas y se bajó el uso dominante del turquesa.
  - Se eliminaron textos públicos tipo borrador, publicación pendiente o notas internas.
  - Se reemplazó el formulario de catering pendiente por un bloque comercial para planear catering por teléfono.
- Archivos tocados:
  - `components/sections/hero-section.tsx`
  - `components/sections/quick-actions.tsx`
  - `components/sections/catering-inquiry-form.tsx`
  - `components/sections/carryout-section.tsx`
  - `components/sections/about-section.tsx`
  - `components/sections/family-packs-section.tsx`
  - `app/menu/page.tsx`
  - `app/gallery/page.tsx`
  - `components/layout/footer.tsx`
  - `lib/site.ts`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.
- Pendientes nuevos:
  - Revisar visualmente home, menu y catering en móvil/escritorio cuando el navegador headless esté disponible o desde el servidor local del usuario.

### 2026-06-19 - Revolución de carta, fotos y ambiente

- Cambios realizados:
  - Se revisó el sitio original y se integró una carta extensa con categorías, precios y nombres curados desde el menú existente.
  - Se probó inicialmente el enlace de pedido online por Clover como CTA secundario; después se reemplazó por `/order` porque el enlace externo no era confiable.
  - Se descargaron fotos adicionales del sitio original y se generaron versiones WebP/AVIF.
  - Se rediseñó el hero para sentirse más La Gaviota, más festivo y menos genérico.
  - Se rediseñó `/menu` como carta amplia con stats, navegación sticky, fotos por categoría, highlights y precios visibles.
  - Se reforzó el mapa interactivo con encabezado visible de Google Maps y dirección.
  - Se amplió la galería y se asociaron fotos a platillos reales del menú.
- Archivos tocados:
  - `lib/site.ts`
  - `app/menu/page.tsx`
  - `app/page.tsx`
  - `app/gallery/page.tsx`
  - `components/sections/hero-section.tsx`
  - `components/sections/menu-category.tsx`
  - `components/sections/menu-highlights.tsx`
  - `components/sections/quick-actions.tsx`
  - `components/sections/contact-section.tsx`
  - `components/sections/map-embed.tsx`
  - `components/layout/footer.tsx`
  - `scripts/optimize-images.mjs`
  - `public/source-images/*`
  - `public/images/*`
- Verificación:
  - `npm run optimize:images` OK.
  - `npm run typecheck` OK.
  - `npm run build` OK.
- Pendientes nuevos:
  - Confirmar precios antes de publicación final, porque vienen del sitio actual y podrían estar desactualizados.
  - Confirmar permiso final de uso para las fotos del sitio original.
  - Revisar visualmente en navegador real móvil/escritorio.

### 2026-06-19 - Multilenguaje completo EN/ES en UI

- Cambios realizados:
  - Se agregó un provider de idioma con persistencia en `localStorage` y actualización de `document.documentElement.lang`.
  - Se centralizó la copy visible del sitio en `lib/i18n.tsx` para inglés y español.
  - Se eliminaron textos bilingües mezclados como `Catering for your event / Catering para tu evento`.
  - Se migraron header, drawer móvil, footer, CTA móvil, hero, home, contacto, galería, catering, FAQ y menú a textos según idioma elegido.
  - Se tradujeron labels de navegación, CTAs, notas, horarios, FAQ, captions y categorías del menú.
  - Se conservan nombres de platillos y precios como parte de la carta original.
- Archivos principales tocados:
  - `lib/i18n.tsx`
  - `app/layout.tsx`
  - `app/menu/page.tsx`
  - `app/gallery/page.tsx`
  - `components/layout/*`
  - `components/sections/*`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.
- Pendientes nuevos:
  - Revisar visualmente el cambio de idioma en navegador real, especialmente en móvil y en la carta larga.
  - Si se quiere SEO bilingüe real, el siguiente paso sería crear rutas localizadas (`/es`, `/en`) y metadata por idioma.

### 2026-06-19 - Formulario propio para ordenar

- Cambios realizados:
  - Se reemplazaron los CTAs que apuntaban al enlace externo de Clover por `/order`.
  - Se creó una página interna de pedido para recoger con formulario bilingüe.
  - El formulario recopila nombre, teléfono, hora deseada, platillos y notas.
  - Al enviar, prepara un correo al restaurante y refuerza que se debe llamar para confirmar disponibilidad y tiempo.
  - Se agregó `/order` al sitemap.
- Archivos principales tocados:
  - `app/order/page.tsx`
  - `components/sections/order-form.tsx`
  - `components/sections/hero-section.tsx`
  - `components/sections/quick-actions.tsx`
  - `components/sections/menu-page-content.tsx`
  - `components/layout/footer.tsx`
  - `lib/i18n.tsx`
  - `lib/site.ts`
  - `app/sitemap.ts`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.

### 2026-06-19 - Pulido de copy y drawer móvil

- Cambios realizados:
  - Se revisó la copy visible para eliminar textos que sonaban internos o técnicos.
  - Se reemplazaron frases como `Formulario del sitio`, `solicitud`, `checkout`, `request`, `sitio anterior` y explicaciones de implementación.
  - La copy de `/order` ahora habla al comensal: antojo, pedido para recoger, notas para cocina y llamada de confirmación.
  - El menú hamburguesa móvil se movió a un portal en `document.body` para funcionar como overlay real y evitar que empuje secciones o quede oculto detrás del header sticky.
  - Se actualizó documentación base (`instructions.md` y `README.md`) con i18n completo, `/order` y comportamiento actual del drawer.
- Archivos principales tocados:
  - `lib/i18n.tsx`
  - `app/order/page.tsx`
  - `components/sections/order-form.tsx`
  - `components/layout/mobile-drawer.tsx`
  - `instructions.md`
  - `README.md`
  - `AI_HANDOFF.md`
- Verificación:
  - `npm run typecheck` OK tras copy y drawer.
  - `npm run build` OK tras mover el drawer a portal.

### 2026-06-19 - Identidad visual costa mexicana

- Cambios realizados:
  - Se tomó la idea del sitio original de playa/gaviota y se reinterpretó sin copiar la plantilla.
  - Se cambió la paleta base hacia chile seco, maíz, turquesa costa, nopal y crema cálida.
  - Se agregó un hero con atmósfera costera, papel picado sobrio, confeti tricolor sutil y ola inferior.
  - Se creó una marca de gaviota en CSS para el logo del header sin caer en ilustración infantil.
  - Se ajustaron acciones rápidas y menú destacado con acentos tricolor discretos.
  - Se actualizó la promesa del hero para mencionar sabor de costa, tacos, mariscos y comida para compartir.
- Archivos principales tocados:
  - `app/globals.css`
  - `components/layout/header.tsx`
  - `components/sections/hero-section.tsx`
  - `components/sections/quick-actions.tsx`
  - `components/sections/menu-highlights.tsx`
  - `lib/i18n.tsx`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.
- Pendientes nuevos:
  - Revisar visualmente en móvil/escritorio para asegurar que el papel picado y confeti se sienten festivos pero no recargados.

### 2026-06-19 - Continuidad visual después de Catering

- Cambios realizados:
  - Se extendió la identidad costa mexicana más allá del hero y `Food for gatherings`.
  - Home ahora mantiene el lenguaje visual en Carryout, Galería, About, Contacto, FAQ y Footer.
  - Se agregaron fondos crema cálidos, confeti tricolor sutil, olas costeras, tiras tipo papel picado y acentos tricolor en tarjetas.
  - Contact card, horarios, mapa, galería, paquetes familiares, formulario de catering y formulario de pedido quedaron alineados con la nueva dirección visual.
  - Las páginas internas `/gallery`, `/contact`, `/catering` y `/order` recibieron wrappers y tarjetas coherentes con la marca.
- Archivos principales tocados:
  - `components/sections/carryout-section.tsx`
  - `components/sections/home-gallery-section.tsx`
  - `components/sections/about-section.tsx`
  - `components/sections/contact-section.tsx`
  - `components/sections/faq-section.tsx`
  - `components/layout/footer.tsx`
  - `components/sections/contact-card.tsx`
  - `components/sections/hours-card.tsx`
  - `components/sections/map-embed.tsx`
  - `components/sections/gallery-grid.tsx`
  - `components/sections/family-packs-section.tsx`
  - `components/sections/catering-inquiry-form.tsx`
  - `components/sections/order-form.tsx`
  - `components/sections/gallery-page-content.tsx`
  - `app/contact/page.tsx`
  - `app/catering/page.tsx`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.

### 2026-06-19 - Motivos festivos finos sin fondo romboide

- Cambios realizados:
  - Se eliminó la lectura de fondo romboide/diagonal que parecía malla ciclónica.
  - El patrón global de `grain` dejó de usar cruces lineales y ahora funciona como puntos/sutilezas de papel.
  - El `confetti-field` se rehizo como SVG fino y espaciado, con piezas pequeñas tipo confeti tricolor.
  - Se bajaron opacidades del confeti en hero, acciones rápidas, menú destacado, carryout y footer para que no compita con texto ni comida.
  - El papel picado superior se refinó con perforaciones pequeñas y caída más ligera.
  - Los encabezados de sección recibieron un acento pequeño tipo papel recortado (`fiesta-rosette`).
  - Algunas tarjetas clave ahora tienen un detalle sutil de papel picado recortado (`papel-cutout`) en la esquina.
- Archivos principales tocados:
  - `app/globals.css`
  - `components/ui/section-heading.tsx`
  - `components/sections/hero-section.tsx`
  - `components/sections/quick-actions.tsx`
  - `components/sections/menu-highlights.tsx`
  - `components/sections/carryout-section.tsx`
  - `components/layout/footer.tsx`
  - `components/sections/contact-card.tsx`
  - `components/sections/catering-inquiry-form.tsx`
  - `components/sections/family-packs-section.tsx`
- Verificación:
  - `npm run typecheck` OK.
  - `npm run build` OK.
  - Captura desktop local revisada: `/tmp/gaviota-shots/patterns-home-desktop-fixed2.png`.
  - La captura móvil con Firefox headless se colgó antes de terminar; no se dejó proceso vivo.
