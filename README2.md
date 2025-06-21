
# 📐 Propuesta de Layout y Reflexión Fase 2 – IGACA Framer Motion Lab

Este archivo contiene una propuesta estructural sobre el componente `Layout.jsx` y una serie de reflexiones prácticas de cara a la Fase 2 del proyecto, enfocada en personalización, escalabilidad visual, navegación dinámica y gestión avanzada del contenido.

---

## 🧱 ¿Qué es `Layout.jsx` y para qué sirve?

`Layout.jsx` es un componente estructural pensado para envolver todas las vistas del sistema con elementos compartidos: encabezado, navegación y pie de página. Su propósito es proporcionar una estructura visual coherente y mantener la consistencia en toda la app.

### ¿Qué debería contener el Layout?

- Un encabezado (header) con el título del proyecto o branding general.
- Un componente de navegación (`NavigationMenu`) que enlace a los temas existentes.
- Un área principal donde se renderiza la vista activa (esto se hace con el concepto de “Outlet”).
- Un pie de página con mensaje o créditos personales.
- Un contenedor general con paddings, márgenes o fondo común.

### ¿Por qué usarlo?

- Evita duplicar código en cada página (como el menú).
- Proporciona una experiencia de navegación coherente.
- Permite aplicar diseño global desde un único punto.
- Prepara el sistema para futuras funcionalidades comunes a todas las páginas (modo oscuro, login, etc.).

### ¿Dónde se usa?

`Layout.jsx` debe integrarse desde `AppRoutes.jsx` para envolver todas las rutas principales, permitiendo que todo lo que se muestre esté contenido dentro de una misma estructura visual.

---

## 🚀 Reflexión Fase 2 – Propuesta Modular de Objetivos

### 1. **Mejorar el diseño del catálogo (`Catalog.jsx`)**

- Rediseñar las tarjetas para mejorar visualmente su contenido.
- Posiblemente separar el componente de lista de tarjetas.
- Aplicar reglas de estilo consistentes.

### 2. **Agregar nuevos temas (`gestures`, `layout`, etc.)**

- Crear carpetas nuevas como `gestures/`, `layout/` con sus animaciones.
- Definir sus respectivos `meta.js`.
- Preparar un sistema dinámico de lectura por tema.

### 3. **Mostrar código fuente en `Detail.jsx`**

- Definir si se va a mostrar el código de cada animación como texto.
- Agregar un campo `codigo` en los metadatos si se decide.
- Usar un sistema de resaltado visual si se implementa.

### 4. **Agregar un layout común (`Layout.jsx`)**

- Definir y aplicar un contenedor con navegación y footer.
- Centralizar elementos comunes.
- Preparar soporte para cambios de diseño global.

### 5. **Agregar filtros o buscador en el catálogo**

- Filtrar animaciones por nombre o propiedades (`drag`, `layout`, `transition`).
- Agregar barra de búsqueda.
- Considerar estructura de etiquetas o categorías dentro de los `meta.js`.

---

## ✅ Recomendación Final

Aunque la Fase 2 no debe abordarse aún, tener esta hoja de ruta facilitará las decisiones cuando llegue el momento de expandir el sistema. Cada objetivo puede desarrollarse de forma modular, sin alterar la base ya establecida.