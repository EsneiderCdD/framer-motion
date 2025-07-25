# 🗺️ Roadmap de Aprendizaje – Framer Motion

## 🟢 Principiante:



- **Tema 3: Hover y Tap (Interacción)**  
  Uso de `whileHover` y `whileTap` para animaciones responsivas al usuario.

- **Tema 4: Elementos arrastrables (`drag`)**  
  Aprende a hacer que un elemento sea arrastrable y cómo limitar sus ejes.

- **Tema 5: Animaciones simples (fade, slide, scale)**  
  Practica efectos comunes como desvanecer, escalar o deslizar componentes.

---

## 🟡 Intermedio:

- **Tema 6: Variants**  
  Aprende a usar `variants` para agrupar múltiples animaciones y reutilizarlas.

- **Tema 7: AnimatePresence**  
  Permite animar la salida de un componente del DOM (como modales o listas).

- **Tema 8: Animaciones condicionales**  
  Usa estados booleanos o props para animar según condiciones dinámicas.

- **Tema 9: Animaciones de listas**  
  Aprende a animar elementos cuando se agregan, reordenan o eliminan.

- **Tema 10: Coordinación de múltiples componentes**  
  Coordina varias animaciones entre padres e hijos con `custom` y `variants`.

---

## 🔵 Avanzado:

- **Tema 11: Layout animations (`layout`)**  
  Aprende a animar el cambio de tamaño o posición automáticamente.

- **Tema 12: Transiciones compartidas (`layoutId`)**  
  Anima transiciones fluidas entre pantallas o componentes relacionados.

- **Tema 13: useAnimation y animation controls**  
  Controla las animaciones manualmente con funciones.

- **Tema 14: useCycle**  
  Alterna entre múltiples estados animados de forma cíclica.

- **Tema 15: useScroll y useInView**  
  Desencadena animaciones con base en el scroll y visibilidad.

- **Tema 16: Motion Values (`useMotionValue`, `useTransform`)**  
  Anima propiedades en tiempo real y enlaza transformaciones.

- **Tema 17: Custom transitions (`spring`, `tween`, `inertia`)**  
  Domina el control fino sobre cómo se comporta la animación.

---
**TEMAS EXTRAS**
| Propiedad         | Uso                                         |
| ----------------- | ------------------------------------------- |
| `repeat`          | Repite la animación (`Infinity`, `2`, etc.) |
| `repeatType`      | `'loop'`, `'reverse'`, `'mirror'`           |
| `repeatDelay`     | Espera entre repeticiones                   |
| `staggerChildren` | Retardo entre hijos (en `motion.ul`)        |









# 🚀 Framer Motion Masterclass Series – Roadmap Completo

Aprende a dominar **Framer Motion** desde cero con esta serie de mini masterclasses en React.  
Cada archivo `.jsx` es una lección práctica y explicativa.  
El contenido se organiza por niveles para guiar tu aprendizaje paso a paso.

---

## 🟢 Nivel Básico – Fundamentos

| Archivo           | Concepto                                                                 |
|-------------------|--------------------------------------------------------------------------|
| `intro.jsx`       | ¿Qué es Framer Motion? Instalación, setup inicial y primeros pasos.     |
| `motion.jsx`      | Uso básico de `motion.div` y otros componentes animables.               |
| `props.jsx`       | Uso de `initial`, `animate` y `exit` para crear animaciones simples.    |
| `transition.jsx`  | Configurar transiciones: duración, tipo (`spring`, `tween`), delays.    |
| `hoverTap.jsx`    | Animaciones en interacción: `whileHover`, `whileTap`.                   |
| `drag.jsx`        | Arrastrar elementos (`drag`, límites, rebote, snap).                    |
| `styleAnim.jsx`   | Animar estilos: opacidad, escala, rotación, colores.                    |

---

## 🟡 Nivel Intermedio – Composición y Control

| Archivo             | Concepto                                                                      |
|----------------------|-------------------------------------------------------------------------------|
| `presence.jsx`       | Animar entrada y salida de componentes con `AnimatePresence`.                |
| `layout.jsx`         | Transiciones automáticas al cambiar layout con `layout` y `layoutId`.        |
| `variants.jsx`       | Crear y aplicar variantes para estados múltiples de animación.               |
| `variantsChild.jsx`  | Coordinar variantes entre componentes padre e hijos.                         |
| `controls.jsx`       | Controlar animaciones manualmente con `useAnimation`.                        |
| `sequence.jsx`       | Ejecutar animaciones en secuencia o con lógica personalizada.                |
| `keyframes.jsx`      | Animaciones con múltiples pasos usando arrays (`keyframes`).                 |
| `easing.jsx`         | Personalizar transiciones con curvas de easing (`ease`, `spring`, etc).      |

---

## 🔴 Nivel Avanzado – Interactividad y Escalabilidad

| Archivo            | Concepto                                                                            |
|---------------------|-------------------------------------------------------------------------------------|
| `useScroll.jsx`     | Crear animaciones que responden al desplazamiento (`useScroll`, scroll progress).  |
| `useInView.jsx`     | Disparar animaciones al entrar en el viewport (`useInView`).                        |
| `motionValue.jsx`   | Control fino del estado animado con `useMotionValue`.                               |
| `transform.jsx`     | Derivar valores con `useTransform` y mapear inputs de animación.                    |
| `rangeInput.jsx`    | Conectar inputs o sliders a valores animados en tiempo real.                        |
| `sharedLayout.jsx`  | Coordinar animaciones entre elementos con `AnimateSharedLayout`.                    |
| `modalsMenus.jsx`   | Crear transiciones fluidas en modales, overlays y menús desplegables.               |
| `performance.jsx`   | Buenas prácticas de rendimiento y optimización de animaciones.                      |
| `withNext.jsx`      | Integrar Framer Motion en apps Next.js con SSR.                                     |
| `withThree.jsx`     | Introducción a la integración con escenas 3D usando Three.js.                       |

---

✅ Cada archivo está diseñado para ser una mini masterclass completa.  
💡 Asegúrate de dominar cada nivel antes de avanzar al siguiente para un aprendizaje progresivo y efectivo.

---






🟢 BÁSICOS
Estos temas cubren lo esencial para comenzar con Framer Motion y entender su filosofía declarativa para animaciones.

✅ Temas a abordar:
Introducción a Framer Motion

¿Qué es Framer Motion?
Ventajas frente a otras librerías (como GSAP, React Spring)
motion Components
Uso de <motion.div> y otros elementos (motion.button, etc.)
Diferencias con elementos HTML normales
Propiedades de animación (animate, initial, exit)
Uso básico
Cómo definir el estado inicial y el destino
Variants vs valores individuales
Transiciones (transition)
Tipos de transición: tween, spring, inertia
Duración, retardo, easing
Control de fricción y rebote con spring
Variants
Definición de variantes de estado
Uso en componentes anidados
Coordinación entre hijos y padres
Keyframes
Uso de arrays para animaciones secuenciales
Aplicación de transition.times
AnimatePresence
Animaciones de entrada/salida
Uso con exit y claves de React
Animaciones condicionales

🟡 GESTURES (gestos)
Aquí se explora la interacción con el usuario a través de movimientos del mouse o táctiles.

✅ Temas a abordar:
whileHover y whileTap
Efectos visuales al pasar el mouse o hacer clic
Combinación con variants
drag
Activar arrastre en un elemento
dragConstraints (limitación del área de arrastre)
dragElastic, dragMomentum
onDragStart, onDragEnd, etc.
Eventos del ciclo de vida del drag
Registro de movimiento o detección de direcciones
Gestos personalizados
Uso de useMotionValue y useTransform para reacciones complejas
Animaciones basadas en desplazamiento
hover, tap, focus states con useCycle o variants
Alternancia de estados mediante interacciones

🔵 LAYOUT (animaciones de disposición)
Esta categoría aborda animaciones relacionadas con cambios en la disposición de los elementos.

✅ Temas a abordar:
layout Prop
Animación automática de cambios en tamaño o posición
Reordenamiento animado de elementos
layoutId y Shared Layout Transitions
Transiciones entre páginas o secciones
Ejemplo típico: galería -> vista de detalle
Layout Animations + AnimatePresence
Animaciones suaves en transiciones de rutas o componentes dinámicos
Gestión de stacks y z-index (positionTransition)
Animación de cambio de posición relativa
Apilamiento dinámico de componentes
Uso avanzado de motion.div layoutScroll (si aplica)
Animaciones dependientes del scroll (experimental)

