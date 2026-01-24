
export const scaleKeyframesContent = {
    title: "Escala (Keyframes)",
    subtitle: "Ciclos de expansión y contracción",
    code: `<motion.img
  src={m}
  className={styles.circle}
  animate={{ scale: [1, 1.5, 0.5, 1] }}
  transition={{ duration: 3, repeat: Infinity }}
/>`,
    description: (
        <p>
            Al no definir <code>initial</code>, Framer Motion usa el primer valor de <code>animate</code> como punto de partida.
            En este caso, <code>scale</code> oscila entre <code>1</code>, <code>1.5</code>, <code>0.5</code> y vuelve a <code>1</code>, generando un ritmo cíclico de expansión y contracción.
        </p>
    )
};
