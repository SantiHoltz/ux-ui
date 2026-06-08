# Guía de Presentación — Rediseño UX/UI Club Argentino

## Estructura sugerida para la defensa del trabajo

---

## Slide 1: Portada
- **Título**: Rediseño UX/UI — Club Argentino de Marcos Juárez
- **Subtítulo**: Renovación del Gimnasio — Proyecto Comunitario
- **Materia**: Experiencia e Interfaces de Usuario
- **URL**: https://canchaargentino.vercel.app

---

## Slide 2: Introducción y problema
### ¿Qué es el proyecto?
- El Club Argentino de Marcos Juárez necesita renovar el piso de su gimnasio (608 m²)
- La web comunica el proyecto y permite que la comunidad colabore comprando metros cuadrados
- Cada m² cuesta $120.000 y el nombre del comprador queda registrado en un mapa interactivo

### ¿Cuál era el problema de la web original?
- Sin propuesta de valor clara en la primera vista
- Carga cognitiva alta (texto largo sin jerarquía)
- Navegación deficiente en mobile
- Sin accesibilidad
- Identidad visual débil

---

## Slide 3: Investigación UX

### Metodología
- Análisis heurístico de la web actual
- Evaluación de accesibilidad (WCAG 2.1)
- Análisis de arquitectura de información
- Evaluación responsive en múltiples dispositivos

### Hallazgos principales
| Heurística de Nielsen | Evaluación original |
|----------------------|-------------------|
| Visibilidad del estado del sistema | ❌ Sin feedback de loading/error |
| Consistencia y estándares | ⚠️ Paleta y tipografía inconsistentes |
| Reconocimiento antes que recuerdo | ❌ CTA no visible sin scroll |
| Diseño estético y minimalista | ❌ Texto excesivo sin jerarquía |
| Flexibilidad y eficiencia de uso | ⚠️ Sin atajos ni navegación rápida |

---

## Slide 4: Personas y mapa de empatía

### Persona principal: Carlos (55 años)
| Dimensión | Descripción |
|-----------|-------------|
| **Piensa** | "Quiero ayudar pero no sé cómo funciona esto" |
| **Siente** | Nostalgia por el club, deseo de contribuir |
| **Hace** | Usa WhatsApp, navega desde el celular |
| **Dice** | "No entiendo estas páginas modernas" |
| **Pain** | Textos largos, proceso confuso |
| **Gain** | Proceso simple, su nombre en la cancha |

### Persona secundaria: Lucía (30 años)
| Dimensión | Descripción |
|-----------|-------------|
| **Piensa** | "Quiero ver cuánto avanzó el proyecto" |
| **Siente** | Orgullo de que su hijo juegue ahí |
| **Hace** | Comparte en redes, navega en iPhone |
| **Dice** | "La web no se ve bien en mi celular" |
| **Pain** | Diseño no responsive, botones chicos |
| **Gain** | Progreso visual, fácil de compartir |

---

## Slide 5: Flujos de usuario

### Flujo principal: Colaborar
```
Hero (entiende el proyecto)
    ↓
Problema (empatiza)
    ↓
Solución (ve la propuesta)
    ↓
Beneficios (se identifica)
    ↓
CTA "Quiero colaborar"
    ↓
Página Comprar (ve precio + pasos)
    ↓
WhatsApp (contacta)
```

### Flujo secundario: Informarse
```
Hero → Problema → FAQ → Footer (cierra informado)
```

### Flujo terciario: Ver progreso
```
Nav "Progreso" → Mapa interactivo → Stats → CTA
```

---

## Slide 6: Wireframes conceptuales

### Home (Presentación)
```
┌──────────────────────────┐
│ [Logo] Club Argentino  ☰ │ ← Navbar sticky
├──────────────────────────┤
│                          │
│   RENOVACIÓN GIMNASIO    │
│   Club Argentino         │ ← Hero con gradiente
│   "No es solo un piso,   │
│    es una historia"      │
│   [Sumate] [Ver progreso]│ ← CTAs principales
│                          │
├──────────────────────────┤
│ EL DESAFÍO               │
│ ┌────┐ ┌────┐ ┌────┐    │ ← 3 Cards problema
│ │ ⚠ │ │ 👥 │ │ 📊 │    │
│ └────┘ └────┘ └────┘    │
├──────────────────────────┤
│ EL PROYECTO              │
│ 608 m² | $120k | 60+ años│ ← Stats
├──────────────────────────┤
│ BENEFICIOS               │
│ ┌──┐ ┌──┐ ┌──┐ ┌──┐     │ ← 4 Cards beneficios
│ └──┘ └──┘ └──┘ └──┘     │
├──────────────────────────┤
│ ¿Querés ser parte?       │ ← CTA section (dark)
│ [Quiero colaborar]       │
├──────────────────────────┤
│ PREGUNTAS FRECUENTES     │
│ ▶ Pregunta 1             │ ← Acordeón
│ ▶ Pregunta 2             │
│ ▶ Pregunta 3             │
├──────────────────────────┤
│ FIRMA                    │
│ Juan Pablo Holtz         │
│ Club A.B.M. Argentino    │
├──────────────────────────┤
│ FOOTER                   │
│ Club | Nav | Contacto    │
└──────────────────────────┘
```

### Progreso
```
┌──────────────────────────┐
│ Navbar                   │
├──────────────────────────┤
│ MAPA DEL PROYECTO        │
│ ████████░░ 65% completado│ ← Progress bar
│ ┌────┐ ┌────┐ ┌────┐    │ ← Stat cards
│ │608 │ │395 │ │213 │    │
│ │tot │ │vend│ │disp│    │
│ └────┘ └────┘ └────┘    │
├──────────────────────────┤
│ ┌────────────────────┐   │
│ │  MAPA INTERACTIVO  │   │ ← Grilla 32x19
│ │  ▓▓▓░░▓▓▓░▓▓░░░   │   │
│ │  ▓░░▓▓▓░░░▓▓▓░░   │   │
│ └────────────────────┘   │
│ ■ Vendido  □ Disponible  │ ← Leyenda
├──────────────────────────┤
│ "Sumate a los que ya..." │
│ [Quiero mi m²]           │
├──────────────────────────┤
│ FOOTER                   │
└──────────────────────────┘
```

---

## Slide 7: Diseño visual UI

### Sistema de diseño

| Token | Valor | Uso |
|-------|-------|-----|
| **Primary** | `#C62828` | CTA, acentos, links activos |
| **Secondary** | `#1B2A4A` | Títulos, fondos oscuros, navbar text |
| **Accent** | `#D4A843` | CTAs destacados, focus, badges |
| **Gray scale** | 10 niveles | Fondos, bordes, texto secundario |

### Tipografía
- **Font**: Inter (Google Fonts)
- **Scale**: 12px → 48px (8 niveles)
- **Weights**: 400, 500, 600, 700, 800

### Componentes
- Botones con 4 variantes y 4 estados
- Cards con hover y shadow scale
- Navbar con drawer mobile
- FAQ accordion accesible
- Progress bar visual
- Stepper para proceso de compra

---

## Slide 8: Prototipado y pruebas

### Prototipado
- Implementación directa en código (React + Vite)
- Design system con CSS custom properties
- Componentes reutilizables

### Pruebas realizadas
- ✅ Build sin errores
- ✅ Lint sin errores
- ✅ Responsive en 375px, 768px, 1024px, 1440px
- ✅ Navegación por teclado
- ✅ HTML semántico validado

### Pruebas sugeridas (post-entrega)
1. **Test de 5 segundos**: ¿El usuario entiende el propósito?
2. **Task-based test**: ¿Puede colaborar en menos de 2 clicks?
3. **Test mobile**: ¿Navega sin problemas en celular?
4. **Lighthouse**: ¿Score ≥ 90 en Accessibility?

---

## Slide 9: Mejoras de accesibilidad

| Criterio WCAG | Implementación |
|---------------|----------------|
| 1.1.1 Contenido no textual | Alt text en todas las imágenes |
| 1.3.1 Info y relaciones | HTML semántico, ARIA roles |
| 2.1.1 Teclado | Tab, Enter, Escape funcionales |
| 2.4.1 Evitar bloques | Skip-to-content link |
| 2.4.3 Orden del foco | Flujo lógico de tabulación |
| 2.4.7 Foco visible | Outline de 3px custom |
| 3.1.1 Idioma de la página | `lang="es"` |
| 4.1.2 Nombre, rol, valor | ARIA labels en interactivos |

---

## Slide 10: Conclusión y lanzamiento

### Resultados
- Web profesional, clara y moderna
- Navegación simple e intuitiva
- CTAs visibles y comprensibles
- Mobile-first responsive
- Accesible según WCAG básico
- Documentación completa

### Métricas esperadas
- ↑ Tiempo de permanencia en la web
- ↑ Tasa de conversión (click en CTA)
- ↓ Tasa de rebote
- ↑ Accesibilidad (Lighthouse score)

### Próximos pasos
1. Agregar galería de fotos reales
2. Implementar modo oscuro
3. Optimizar imágenes (WebP/AVIF)
4. Agregar testimonios de socios
5. Implementar analytics de eventos

---

## Recursos y referencias
- Nielsen Norman Group: [10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- WCAG 2.1: [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- Google Fonts: [Inter](https://fonts.google.com/specimen/Inter)
- Repositorio del proyecto: [GitHub](https://github.com/)
- Web en producción: https://canchaargentino.vercel.app
