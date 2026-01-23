
export const rotateYContent = {
    title: "Rotación Y",
    subtitle: "Giro sobre el eje Y (3D)",
    code: `<motion.img
  src={m}
  alt="Rotación Y"
  className={styles.circle}
  initial={{ rotateY: 0 }}
  animate={{ rotateY: 360 }}
  transition={{ 
    duration: 5, 
    repeat: Infinity, 
    repeatType: 'reverse' 
  }}
/>`,
    description: (
        <>
            <p>
                Por otro lado, <strong>rotateY</strong> realiza un giro de lado a lado sobre el eje vertical Y.
            </p>
            <p>
                Esto modifica la vista en el ancho del elemento, simulando que el objeto gira como una puerta o una moneda.
            </p>
        </>
    )
};
