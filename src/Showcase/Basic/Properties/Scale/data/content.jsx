
export const scaleContent = {
    title: "Escala",
    subtitle: "Transformación de tamaño proporcional",
    code: `<motion.img
  src={m}
  alt="Escala"
  className={styles.circle}
  initial={{ scale: 1.5 }}
  animate={{ scale: 0 }}
  transition={{ duration: 2, repeat: Infinity }}
/>`,
    description: (
        <>
            <p>
                La propiedad <strong>scale</strong> en Framer Motion permite modificar el tamaño de un elemento de forma proporcional en ambos ejes, X (horizontal) y Y (vertical).
            </p>
            <p>
                Al aplicar un valor como <strong>scale: 1.5</strong>, el objeto se agranda al 150% de su tamaño original. Cuando usamos <strong>scale: 0</strong>, el objeto se reduce hasta desaparecer.
            </p>
            <p>
                También es posible controlar la escala de manera independiente en cada eje mediante <strong>scaleX</strong> para ajustar el ancho y <strong>scaleY</strong> para modificar la altura. Esto permite realizar transformaciones específicas sobre cada dirección.
            </p>
        </>
    )
};
