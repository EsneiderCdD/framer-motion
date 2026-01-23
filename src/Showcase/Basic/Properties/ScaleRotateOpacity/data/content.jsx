
export const combinedContent = {
    title: "Escala, Rotación y Opacidad",
    subtitle: "Secuencia de transformaciones",
    code: `<motion.img
  src={m}
  className={styles.circle}
  initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
  animate={{ scale: 1, rotate: 360, opacity: 1 }}
  transition={{
    opacity: { duration: 3, delay: 0 },
    scale: { duration: 3, delay: 3 },
    rotate: { duration: 3, delay: 6 }
  }}
/>`,
    description: (
        <>
            <p>
                Este ejemplo muestra cómo aplicar múltiples transformaciones en secuencia.
            </p>
            <p>
                Usamos <strong>scale</strong>, <strong>rotate</strong> y <strong>opacity</strong> con transiciones personalizadas por propiedad, usando <strong>delay</strong> para encadenarlas.
            </p>
            <p>
                Es útil para crear entradas más rítmicas y controladas visualmente.
            </p>
        </>
    )
};
