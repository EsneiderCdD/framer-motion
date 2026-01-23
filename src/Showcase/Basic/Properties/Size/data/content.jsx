
export const sizeContent = {
    title: "Tamaño",
    subtitle: "Cambio de dimensiones (Layout)",
    code: `<motion.img
  src={m}
  alt="Tamaño"
  className={styles.circle}
  initial={{ width: '100px', height: '100px' }}
  animate={{ width: '150px', height: '150px' }}
  transition={{ 
    duration: 10, 
    repeat: Infinity, 
    repeatType: 'reverse' 
  }}
/>`,
    description: (
        <>
            <p>
                En Framer Motion, podemos modificar el tamaño real de un elemento usando las propiedades <strong>width</strong> y <strong>height</strong>.
            </p>
            <p>
                Esto cambia directamente el espacio que ocupa en el diseño de la página.
            </p>
            <p>
                A diferencia de <strong>scale</strong>, que altera el tamaño visual sin afectar el layout, cambiar el ancho y alto sí puede influir en el flujo y disposición de otros elementos cercanos.
            </p>
        </>
    )
};
