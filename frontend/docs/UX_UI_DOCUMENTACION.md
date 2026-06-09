# Documentación UX/UI — Club Argentino

## 1. Problema a Resolver

El Club Atlético, Biblioteca y Mutual Argentino de Marcos Juárez necesita renovar el piso de su gimnasio principal (608 m²), un espacio con más de 60 años de historia deportiva. La web existente comunica esta iniciativa y permite a la comunidad visualizar el progreso de venta de metros cuadrados, pero presentaba problemas significativos de usabilidad, accesibilidad, arquitectura de información y diseño visual que impedían una comunicación efectiva del proyecto.

### Problemas identificados en la versión original:
- **Sin propuesta de valor inmediata**: La primera vista era una carta de texto largo sin jerarquía
- **Navegación deficiente en mobile**: Sin menú hamburger, links apretados en pantallas pequeñas
- **Carga cognitiva alta**: Párrafos extensos sin escaneabilidad ni Cards
- **Sin footer**: No existía información institucional al final de la página
- **HTML no semántico**: Todo construido con `<div>`, sin `<header>`, `<main>`, `<section>`, `<footer>`
- **Accesibilidad nula**: Sin alt text descriptivos, sin focus visible, sin ARIA, sin navegación por teclado
- **Identidad visual débil**: Tipografía genérica (Arial), paleta solo rojo + blanco
- **CSS no mantenible**: 6+ breakpoints con código duplicado, uso de `!important`

---

## 2. Público Objetivo

| Segmento | Características | Necesidades |
|----------|---------------|-------------|
| **Socios del club** | Personas de todas las edades vinculadas al club | Entender qué se está haciendo y cómo pueden ayudar |
| **Familias** | Padres con hijos que practican deporte en el club | Saber que el espacio será seguro y moderno |
| **Jugadores/deportistas** | Personas activas que usan el gimnasio | Ver el progreso y sentirse parte del proyecto |
| **Sponsors/comercios** | Empresas locales de Marcos Juárez | Información clara de cómo colaborar y qué visibilidad obtienen |
| **Vecinos/comunidad** | Habitantes de Marcos Juárez | Comprender la importancia comunitaria del proyecto |

---

## 3. Personas

### Persona 1: Carlos (55 años)
- **Rol**: Socio histórico del club, padre de ex jugadores
- **Dispositivo**: Celular Android gama media
- **Objetivo**: Quiere comprar un m² pero necesita entender bien cómo funciona el pago
- **Frustración**: Textos largos, no encuentra rápidamente cómo colaborar
- **Necesita**: CTA claro, pasos simples, contacto WhatsApp directo

### Persona 2: Lucía (30 años)
- **Rol**: Madre de un chico que juega al básquet en el club
- **Dispositivo**: iPhone
- **Objetivo**: Ver el progreso del proyecto y compartir en redes
- **Frustración**: La web no se ve bien en su celular, los botones son chicos
- **Necesita**: Diseño responsive, información visual del progreso, fácil de compartir

### Persona 3: Martín (42 años)
- **Rol**: Dueño de un comercio local
- **Dispositivo**: Notebook / Desktop
- **Objetivo**: Evaluar si vale la pena ser sponsor
- **Frustración**: No encuentra información clara sobre el proyecto ni beneficios
- **Necesita**: Propuesta de valor clara, estadísticas del proyecto, credibilidad

---

## 4. Pain Points

1. **"¿Qué es esto?"** — La web no comunicaba el propósito en los primeros 5 segundos
2. **"No encuentro cómo ayudar"** — CTA débil o enterrado en texto
3. **"No entiendo el proceso"** — Sin pasos claros de compra
4. **"No se ve bien en mi celular"** — Navegación y layout roto en mobile
5. **"No sé cuánto se avanzó"** — Estadísticas sin contexto visual (sin barra de progreso)
6. **"No confío"** — Sin footer, sin datos institucionales, sin firma visible

---

## 5. Flujos de Usuario

### Flujo principal: Colaborar con el proyecto
```
Landing (Hero) → Comprende el proyecto → Ve el progreso → Decide colaborar → Contacta por WhatsApp
```

### Flujo secundario: Informarse
```
Landing → Lee sobre el problema → Ve beneficios → FAQ → Cierra informado
```

### Flujo terciario: Ver progreso
```
Landing → Navega a Progreso → Interactúa con el mapa → Ve estadísticas → Decide colaborar
```

---

## 6. Cambios Realizados

### 6.1 Arquitectura de Información

| Antes | Después | Justificación |
|-------|---------|---------------|
| 3 páginas sin jerarquía clara | 3 páginas con secciones bien definidas | Organización por tareas del usuario |
| Home = carta de texto | Home = Hero + Problema + Solución + Beneficios + CTA + FAQ + Firma | Información progresiva y escaneable |
| Sin footer | Footer con datos del club, navegación y contacto | Credibilidad y cierre institucional |
| Nav con links planos | Nav con estados activos y hamburger mobile | Navegación clara en todo dispositivo |

### 6.2 Diseño Visual (UI)

| Cambio | Detalle | Principio UX |
|--------|---------|--------------|
| **Tipografía** | Arial → Inter (Google Fonts) | Legibilidad, profesionalismo |
| **Paleta** | Solo rojo + blanco → Rojo #C62828 + Gris #1B2A4A + Dorado #D4A843 | Identidad deportiva sobria |
| **Design tokens** | CSS custom properties en `:root` | Consistencia, mantenibilidad |
| **Spacing scale** | Valores arbitrarios → Escala de 4px | Ritmo visual coherente |
| **Shadows** | Sombras inconsistentes → Escala de sombras | Profundidad predecible |
| **Botones** | Sin estados → hover, active, focus, disabled | Feedback al usuario |
| **Cards** | Sin cards → Cards para info, beneficios, FAQ | Agrupación cognitiva |
| **Hero** | No existía → Gradiente con CTA claro | Primera impresión, propuesta de valor |
| **Progress bar** | No existía → Barra visual de progreso | Comunicar avance del proyecto |

### 6.3 Componentes Creados

| Componente | Función | Reutilizable |
|-----------|---------|-------------|
| `Navbar` | Navegación con hamburger mobile | ✅ Global |
| `Footer` | Datos del club y contacto | ✅ Global |
| Botones (`.btn`) | Variantes: primary, outline, accent, ghost | ✅ CSS utility |
| Section headers | Título + subtítulo + label | ✅ CSS pattern |
| FAQ accordion | Preguntas frecuentes expandibles | ✅ En Presentación |
| Progress bar | Barra de progreso visual | ✅ En Progreso |
| Stat cards | Tarjetas de estadísticas | ✅ CSS pattern |
| Stepper | Pasos visuales del proceso de compra | ✅ En Comprar |

### 6.4 Responsive / Mobile First

| Aspecto | Antes | Después |
|---------|-------|---------|
| **Enfoque** | Desktop-first con 6+ breakpoints | Mobile-first con 2 breakpoints (768px, 1024px) |
| **Menú mobile** | Links apretados horizontales | Drawer lateral con overlay |
| **Touch targets** | Tamaño variable | Mínimo 44px en todos los interactivos |
| **Contenido** | Igual en todos los tamaños | Adaptado a cada breakpoint |
| **CSS** | ~1600 líneas con duplicación | ~900 líneas sin duplicación |

### 6.5 Accesibilidad

| Mejora | Detalle |
|--------|---------|
| **HTML semántico** | `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<address>` |
| **Skip to content** | Link accesible para saltar al contenido principal |
| **ARIA labels** | En todos los elementos interactivos y regiones |
| **Alt text** | Descriptivos en todas las imágenes |
| **Focus visible** | Outline de 3px con color de acento |
| **Teclado** | Escape cierra menú, Tab navega, Enter activa |
| **Roles** | `role="banner"`, `role="main"`, `role="contentinfo"`, `role="progressbar"`, `role="grid"`, etc. |
| **Reduced motion** | Media query para respetar `prefers-reduced-motion` |
| **No user-scalable=no** | Removido para permitir zoom |
| **Contraste** | Paleta verificada para cumplir WCAG AA |
| **Links descriptivos** | "Sumate al proyecto" en vez de "click acá" |

---

## 7. Checklist de Accesibilidad

- [x] HTML semántico (`header`, `nav`, `main`, `section`, `footer`)
- [x] Skip-to-content link
- [x] Todos los `<img>` tienen `alt` descriptivo
- [x] ARIA labels en elementos interactivos
- [x] `aria-expanded` en hamburger y FAQ
- [x] `role="progressbar"` con `aria-valuenow`
- [x] Focus visible con outline personalizado
- [x] Navegación por teclado (Tab, Enter, Escape)
- [x] No se impide zoom (`user-scalable` removido)
- [x] Contraste mínimo AA en textos
- [x] No se depende solo del color (leyenda + texto)
- [x] `prefers-reduced-motion` respetado
- [x] Labels en elementos de formulario/botón
- [x] `lang="es"` en HTML
- [x] Links con texto descriptivo

---

## 8. Checklist Responsive

- [x] Diseñado mobile-first (base = móvil)
- [x] Breakpoints: 768px (tablet), 1024px (desktop)
- [x] Touch targets mínimo 44px
- [x] Menú hamburger en mobile (<768px)
- [x] Grids adaptativos (1 col → 2 col → 3-4 col)
- [x] Imágenes con `max-width: 100%` y `height: auto`
- [x] Sin overflow horizontal
- [x] Tipografía escalada por breakpoint
- [x] Espaciado proporcional por breakpoint
- [x] Footer responsive (1 col → 3 col)

---

## 9. Pruebas de Usabilidad Sugeridas

### Test 1: Comprensión rápida
- **Método**: Test de 5 segundos
- **Pregunta**: "¿De qué trata esta web?"
- **Criterio**: 80% de usuarios responden correctamente

### Test 2: Encontrabilidad del CTA
- **Método**: Task-based usability test
- **Tarea**: "Quiero ayudar al club, ¿cómo lo hago?"
- **Criterio**: El usuario llega a /comprar en menos de 2 clicks

### Test 3: Navegación mobile
- **Método**: Test de usuario real en celular
- **Tareas**: Abrir menú, navegar entre páginas, ver progreso
- **Criterio**: Sin errores ni confusiones

### Test 4: Comprensión del proceso de compra
- **Método**: Think-aloud protocol
- **Tarea**: "Explicame cómo comprar un m²"
- **Criterio**: El usuario describe los 4 pasos correctamente

### Test 5: Accesibilidad
- **Método**: Test con Lighthouse + navegación por teclado
- **Criterio**: Score ≥ 90 en Accessibility, Tab navega correctamente

---

## 10. Mejoras Futuras

1. **Galería de fotos**: Agregar imágenes reales del gimnasio y el proceso de renovación
2. **Animaciones de scroll**: Intersection Observer para reveal-on-scroll
3. **Modo oscuro**: Implementar toggle de tema con CSS custom properties
4. **i18n**: Centralizar textos en archivos JSON para futura traducción
5. **PWA**: Service worker para acceso offline y notificaciones
6. **Analytics mejorado**: Eventos custom para tracking de CTAs
7. **Testimonios**: Sección con quotes de socios y deportistas
8. **Blog/Noticias**: Actualizaciones del progreso de la obra
9. **Mapa con geolocalización**: Ubicación del club con Google Maps embed
10. **Optimización de imágenes**: Conversión a WebP/AVIF con `<picture>`
