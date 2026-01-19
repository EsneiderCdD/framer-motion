# 🧪 Motion Builder — Planning & Features

## 🔧 PANEL DE CONTROL: Lluvia de ideas para enriquecerlo

### 🎯 1. Propiedades de Movimiento

Estas son propiedades que afectan el estado visual o posición del objeto animado.

- **Posición:**

  - `x`, `y`

- **Escala:**

  - `scale`, `scaleX`, `scaleY`

- **Rotación:**

  - `rotate`, `rotateX`, `rotateY`, `rotateZ`

- **Estilos visuales:**

  - `opacity`
  - `backgroundColor`
  - `borderRadius`
  - `boxShadow`
  - `zIndex` (si aplica)

- **Dimensiones:**

  - `width`, `height`

- **Otros:**

  - `transformOrigin`

**Para cada propiedad:**

- Valor inicial (`initial`)
- Valor final (`animate`)
- Toggle de activación/desactivación

---

### ⏱ 2. Propiedades de Transición

Controlan cómo se mueve el objeto entre `initial` y `animate`.

- `duration`
- `delay`
- `ease` (visualizable si se desea)
- `repeat`
- `repeatType`
- `stagger` (útil con múltiples elementos)
- `type`:
  - `spring`
  - `tween`
  - `inertia`

---

### ▶️ 3. Controles de Reproducción

Interacción básica del usuario con la animación.

- `Play`
- `Pause`
- `Reset`
- Reproducción en bucle (toggle)
- Avance fotograma a fotograma (modo debug)
- Velocidad global de animación

---

### 💾 4. Otras funcionalidades posibles

- Guardar configuración como **preset**
- Exportar configuración como **JSX/JSON**
- Importar preset
- Vista del **código generado** dinámicamente
- **Timeline visual** (para animaciones avanzadas)
- Soporte para múltiples elementos animables simultáneamente

---

## 🧩 ARQUITECTURA: ¿Es buen momento para reorganizar?

**Sí.** Estamos en un momento ideal para reestructurar con escalabilidad en mente.

### 🎯 Propuesta de arquitectura modular

```
src/
  components/
    LabMotionBuilder/
      index.jsx            // Entry point principal
      styles.module.css
      MotionControls/
        index.jsx
        styles.module.css
        groups/
          PositionControls.jsx
          TransformControls.jsx
          ColorControls.jsx
          TransitionControls.jsx
      MotionPreview/
        index.jsx
        styles.module.css
      PlaybackControls/
        index.jsx
        styles.module.css
      useMotionConfig.js
```

### 📦 Modelo MVC sugerido

- **Models**: lógica pura (hooks, presets, validaciones)
- **Views**: elementos UI (inputs, sliders, selectores)
- **Controllers**: lógica de interacción (LabMotionBuilder.jsx como orquestador)

**Ventajas:**

- Escalabilidad
- Separación de responsabilidades
- Mantenibilidad y testeo
- Reusabilidad

---

## 🔄 Lógica de "Antes / Después"

Esta mejora permitirá simular animaciones completas:

- `initial`: estado antes de la animación
- `animate`: estado objetivo
- `transition`: forma de transicionar entre ambos

### 🎬 Ejemplo conceptual:

```jsx
initial: { x: 0 },
animate: { x: 300 },
transition: { duration: 1 }
```

UI propuesta:

- Inputs dobles por propiedad (`Initial` y `Final`)
- "Play" para ejecutar la transición entre ambos
- Soporte visual en tiempo real

---

✅ Esta planificación servirá como base sólida para dividir el proyecto en tareas, desarrollar iterativamente y mantener una arquitectura limpia y escalable.



LabMotionBuilder/index.jsx
Componente principal. Orquesta el builder: estado global, lógica de interacción y render de controles y preview.

LabMotionBuilder/styles.module.css
Estilos generales del builder (layout, espaciado, fondo, etc.).

MotionControls/index.jsx
Panel lateral con los grupos de propiedades animables.

MotionControls/styles.module.css
Estilos del panel de control (inputs, secciones, disposición).

groups/PositionControls.jsx
Inputs x e y con valores initial y animate.

groups/TransformControls.jsx
scale, rotate, transformOrigin. Inputs dobles y toggles.

groups/ColorControls.jsx
backgroundColor, opacity, borderRadius, boxShadow.

groups/TransitionControls.jsx
Controles de transición: duration, delay, ease, etc.

MotionPreview/index.jsx
Renderiza el motion.div con initial, animate y transition.

MotionPreview/styles.module.css
Estilos del área de preview y el elemento animado.

PlaybackControls/index.jsx
Botones de reproducción: Play, Pause, Reset, Loop, velocidad.

PlaybackControls/styles.module.css
Estilos de controles (disposición, estado activo, íconos).

useMotionConfig.js
Hook central. Maneja el estado de animación (motionProps, transitionProps), presets y sincronización con