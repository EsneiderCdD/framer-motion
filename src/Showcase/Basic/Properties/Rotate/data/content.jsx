
export const rotateContent = {
    title: "Rotación",
    subtitle: "Giro sobre el eje Z (plano 2D)",
    code: `<motion.img
  src={m}
  alt="Rotación"
  className={styles.circle}
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ 
    duration: 5, 
    repeat: Infinity, 
    repeatType: 'reverse' 
  }}
/>`,
    description: (
        <>
            <p>
                La propiedad <strong>rotate</strong> en Framer Motion permite girar un elemento sobre su eje Z, es decir, rotar en su propio plano.
            </p>
            <p>
                Por ejemplo, animar de <strong>rotate: 0</strong> a <strong>rotate: 360</strong> genera una vuelta completa sobre sí mismo.
            </p>
        </>
    )
};
