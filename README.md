# Arquitectura y Mapa de Desarrollo – IGACA Framer Motion Lab

Este proyecto nace con el objetivo de crear un espacio visual e interactivo para aprender, experimentar y documentar animaciones en ReactJS utilizando Framer Motion. La estructura está pensada para escalar: poder organizar múltiples temas, animaciones y niveles de detalle de forma clara, reutilizable y mantenible.

---

## 📁 Estructura de Carpetas Sugerida

```
src/
│
├── animations/
│   ├── basicos/
│   │   ├── FadeIn.jsx
│   │   ├── SlideX.jsx
│   │   └── meta.js
│
├── components/
│   ├── AnimationCard.jsx
│   ├── Layout.jsx
│   └── NavigationMenu.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Catalog.jsx
│   └── Detail.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── styles/
│   └── globals.module.css
│
└── main.jsx
```

---

## 🧭 Plan de Desarrollo: Paso a Paso

El primer paso esencial será definir la navegación. Como la aplicación se organiza en niveles (inicio → catálogo → detalle), la estructura con React Router DOM permitirá controlar cada vista según su profundidad. Aunque aún no haya contenido visual, es clave tener las rutas base funcionando, pues de esto dependerá toda la experiencia de navegación.

Una vez configuradas las rutas, el siguiente paso será crear los componentes que sirven como base estructural del sistema. El más importante es AnimationCard, ya que se usará para poblar todos los catálogos visuales. Esta tarjeta tendrá un diseño uniforme, con un contenedor reutilizable, espacio para animación visual embebida y un área de texto para descripción.

Posteriormente, se implementará el sistema de grilla dentro de la vista Catalog. Aquí, las AnimationCard se organizarán de forma modular y simple, utilizando CSS Grid dentro de estilos encapsulados por CSS Modules. A pesar de que no se necesita responsividad por ahora, la grilla debe mantener una estructura visual ordenada.

El Home será la puerta de entrada al sistema. Aquí se desplegarán los temas disponibles como opciones interactivas. La navegación debe llevar al catálogo correspondiente, activando las rutas ya configuradas. Esta vista debe ser simple, pero funcional: botones, enlaces o tarjetas que representen visualmente los temas (por ejemplo, Básicos, Gestures, Layout).

Dentro del directorio `animations`, cada tema tendrá su subcarpeta con las animaciones como componentes React. Cada componente de animación será autocontenible. Además, cada carpeta incluirá un archivo `meta.js` que exporta un arreglo con objetos de metadatos por animación: nombre, id, descripción y componente asociado. Esto permitirá poblar automáticamente los catálogos sin escribir datos a mano.

En el archivo `Catalog.jsx`, se cargará dinámicamente el conjunto de animaciones según el tema en ruta. Se renderizarán las AnimationCard pasando los props definidos en los metadatos.

En la vista `Detail.jsx`, se mostrará la animación seleccionada en tamaño completo, acompañada de un texto explicativo, fragmento de código (en una futura fase) y descripción técnica. Esta vista se enlazará desde cada tarjeta del catálogo por medio de navegación basada en ID.

La arquitectura modular y la separación semántica de carpetas permitirán que cada nueva animación sea simplemente un nuevo archivo y una entrada de metadatos. Este sistema será escalable sin complejidad.

---

## 🧠 Sobre los Metadatos

Cada animación exportará su componente y un objeto de metadatos. En lugar de escribir manualmente cada entrada del catálogo, el archivo `meta.js` servirá como índice del tema. Este archivo puede tener una estructura como esta:

```js
import FadeIn from './FadeIn'
import SlideX from './SlideX'

export const animations = [
  {
    id: 'fade-in',
    nombre: 'Fade In',
    descripcion: 'Transición suave de opacidad desde 0 a 1.',
    componente: FadeIn,
  },
  {
    id: 'slide-x',
    nombre: 'Slide X',
    descripcion: 'Desplazamiento horizontal con animación de entrada.',
    componente: SlideX,
  }
]
```

Esto será importado en `Catalog.jsx` para renderizar el contenido de forma automática según el tema.

---

## ✅ Estado Inicial Esperado

Con esta estructura terminada, ya puedes realizar una prueba con dos animaciones simples:

- `FadeIn`: Uso de `initial`, `animate` y `transition` para modificar la opacidad.
- `SlideX`: Uso de `x` para desplazar horizontalmente con duración controlada.

Estas dos animaciones se cargarán desde la carpeta `animations/basicos/`, sus metadatos estarán definidos, y se visualizarán en la grilla del catálogo básico. Esto servirá para verificar que:

- Las rutas funcionan correctamente.
- Los metadatos cargan y se renderizan.
- Las animaciones se reproducen dentro del componente reutilizable.

Una vez logrado esto, el sistema estará listo para crecer hacia nuevos temas y nuevas capas de profundidad (como la explicación detallada en `Detail.jsx`).

---