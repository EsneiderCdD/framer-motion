export const variantsContent = {
    title: "Secuencias y Patrones",
    subtitle: "Uso de Variants",
    code: `
const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
/>`,
    description: (
        <>
            <p>
                En Framer Motion, los <strong>variants</strong> permiten definir múltiples estados animados con nombre. Esto permite que tus componentes tengan una animación mucho más limpia, reutilizable y fácil de controlar.
            </p>
            <p>
                En este ejemplo, definimos tres estados llamados <code>hidden</code>, <code>visible</code> y <code>exit</code>, cada uno con sus propias propiedades de animación.
            </p>
            <p>
                El componente detecta el nombre del estado que debe animarse y Framer Motion se encarga del resto.
            </p>
        </>
    )
};
