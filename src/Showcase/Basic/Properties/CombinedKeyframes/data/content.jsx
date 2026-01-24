
export const combinedKeyframesContent = {
    title: "Combinado (Keyframes)",
    subtitle: "Múltiples propiedades simultáneas",
    code: `<motion.img
  src={m}
  className={styles.circle}
  animate={{
    x: [0, 50, 0, -50, 0],
    scale: [1, 1.2, 1, 0.8, 1],
    opacity: [1, 0.5, 0.2, 0.5, 1]
  }}
  transition={{ duration: 4, repeat: Infinity }}
/>`,
    description: (
        <p>
            Esta animación combina tres propiedades clave: <code>x</code> para desplazar el elemento lateralmente, <code>scale</code> para hacerlo crecer y encoger, y <code>opacity</code> para hacerlo más o menos visible.
            El resultado es un movimiento dinámico, que en 4 segundos recorre cinco pasos creando un ritmo cíclico continuo.
        </p>
    )
};
