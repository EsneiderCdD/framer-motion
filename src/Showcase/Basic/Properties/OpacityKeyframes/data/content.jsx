
export const opacityKeyframesContent = {
    title: "Opacidad (Keyframes)",
    subtitle: "Parpadeo suave",
    code: `<motion.img
  src={m}
  className={styles.circle}
  animate={{ opacity: [1, 0.5, 0, 0.5, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
/>`,
    description: (
        <p>
            Esta animación modifica la propiedad <code>opacity</code> usando una secuencia de valores: de <code>1</code> a <code>0</code> y viceversa, pasando por transiciones intermedias.
            En 2 segundos recorre los cinco pasos, creando un parpadeo suave y continuo.
        </p>
    )
};
