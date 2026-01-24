
export const timesKeyframesContent = {
    title: "Tiempos (Keyframes)",
    subtitle: "Control de ritmo con times",
    code: `<motion.img
  src={m}
  className={styles.circle}
  animate={{ x: [0, 100, 0] }}
  transition={{ 
    duration: 3, 
    times: [0, 0.3, 1], 
    repeat: Infinity 
  }}
/>`,
    description: (
        <p>
            Esta animación mueve el elemento horizontalmente desde <code>0</code> hasta <code>100</code> y de vuelta a <code>0</code>.
            La propiedad <code>times</code> controla el ritmo con que se alcanzan esos valores: en este caso, el segundo valor se alcanza al 30% del tiempo total, acelerando el regreso.
            Así, en lugar de transiciones equidistantes, se genera un tempo desigual más expresivo.
        </p>
    )
};
