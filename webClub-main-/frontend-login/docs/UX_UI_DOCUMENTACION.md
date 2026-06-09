# Documentación UX/UI: Rediseño Login Administrativo

## 1. Problema a Resolver
El acceso administrativo anterior (ubicado en `frontend-login`) carecía de identidad visual, presentaba problemas de accesibilidad (WCAG) y su interfaz no era coherente con el sistema de diseño del sitio principal del Club Argentino. Además, no proporcionaba feedback adecuado durante la carga ni validación de campos clara, y no ofrecía opciones básicas de usabilidad como mostrar/ocultar la contraseña.

## 2. Público Objetivo (User Persona)
**Rol:** Administrador único del sistema del Club Argentino.
**Contexto de uso:** Accede esporádicamente para gestionar la venta de cuadrículas (Metros Cuadrados). Lo hace tanto desde una PC de escritorio en la oficina del club como desde su celular.
**Pain Points:** 
- Falta de certeza si está en el sitio correcto (antes no había logo).
- Dificultad para saber si escribió bien su contraseña.
- Confusión si el sistema está procesando su solicitud.

## 3. Decisiones de Diseño (UI/UX)

### Identidad Visual y Design System
Se implementó el mismo `Design System` utilizado en el `frontend` principal. Esto incluye:
- **Tipografía:** Se reemplazó Arial por `Inter`, garantizando mejor legibilidad en pantallas digitales.
- **Colores:** Se reemplazaron colores duros (`#f32b2b`) y genéricos (`#667eea`) por las variables corporativas (`var(--color-primary)`, `var(--color-secondary)`), alineando la percepción visual con la marca del club.
- **Micro-interacciones:** Se agregaron transiciones suaves (`var(--transition-fast)`) en hovers, focus y estados de carga.

### Estructura y Flujo de Usuario
1. **Página de Login:** 
   - Se removió el header fijo (`Encabezado`) que consumía 100px de espacio vital en mobile. El logo se integró directamente en la tarjeta de login, centrando la atención del usuario en la única acción que debe realizar.
   - Títulos más descriptivos: De "Iniciar Sesión" a "Acceso administrativo".
2. **Página Admin:**
   - Se aplicaron los tokens del design system para tarjetas (`var(--shadow-sm)`, `var(--radius-xl)`).
   - Se jerarquizaron los botones: Acción principal de crear (`var(--color-primary)`), acción secundaria de actualizar (`var(--color-secondary)`), y acción destructiva de eliminar con delineado en rojo para evitar clicks accidentales.

### Accesibilidad (A11y)
- **Atributos ARIA:** Se añadieron `aria-invalid`, `aria-describedby` y `aria-live="polite"` para los mensajes de error de validación, garantizando que los lectores de pantalla anuncien correctamente los fallos.
- **Navegación por Teclado:** Todos los elementos interactivos tienen un `:focus-visible` claro con `outline: 3px solid var(--color-accent)`.
- **Zoom:** Se eliminó la directiva `user-scalable=no` del meta viewport para permitir a los usuarios con dificultades visuales hacer zoom.

### Feedback y Prevención de Errores
- **Toggle de Contraseña:** Se agregó el botón con ícono de ojo para alternar la visibilidad de la contraseña.
- **Loading State:** El botón principal ahora muestra un `spinner` y deshabilita todo el formulario temporalmente, previniendo múltiples envíos y confirmando visualmente la acción.
- **Validación en tiempo real:** Los errores desaparecen instantáneamente en cuanto el usuario comienza a corregir su input.

## 4. Tecnologías Implementadas
- **Variables de Entorno:** Se implementó el uso de `.env` (`VITE_ADMIN_USERNAME`, `VITE_ADMIN_PASSWORD`) para evitar dejar credenciales en el código fuente.
- **CSS Vanilla Moderno:** Se utilizó CSS nativo con custom properties para el design system, eliminando dependencias externas para estilos.

## 5. Mejoras Futuras Recomendadas
1. Implementar validación JWT del lado del servidor.
2. Añadir límite de intentos fallidos (rate limiting) en el backend.
3. Incorporar un modo oscuro nativo en el design system.
