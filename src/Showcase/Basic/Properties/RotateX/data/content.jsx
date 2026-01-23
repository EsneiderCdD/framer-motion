
export const rotateXContent = {
    title: "Rotación X",
    subtitle: "Giro sobre el eje X (3D)",
    code: `<motion.img
  src={m}
  alt="Rotación X"
  className={styles.circle}
  initial={{ rotateX: 0 }}
  animate={{ rotateX: 360 }}
  transition={{ 
    duration: 5, 
    repeat: Infinity, 
    repeatType: 'reverse' 
  }}
/>`,
    description: (
        <>
            <p>
                También es posible rotar sobre el eje X con <strong>rotateX</strong>, lo que provoca un giro hacia adelante o hacia atrás.
            </p>
            <p>
                Esta transformación afecta la altura visual del objeto, creando un efecto de profundidad tridimensional al girar sobre el eje horizontal.
            </p>
        </>
    )
};
