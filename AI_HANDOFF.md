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

## Formulario de Catering

Existe `CateringInquiryForm`, pero está marcado como no funcional.

Motivo:

- No hay endpoint validado.
- No está confirmado si el restaurante acepta solicitudes por email o solo teléfono.

No hacerlo funcional sin:

- Endpoint validado, o
- Confirmación explícita de envío por email/servicio tercero.

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

