
export const rotateKeyframesContent = {
    title: "Rotación (Keyframes)",
    subtitle: "Rotación por etapas en espejo",
    code: `<motion.img
  src={m}
  className={styles.circle}
  animate={{ rotate: [0, 90, 180, 270, 360] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: 'mirror'
  }}
/>`,
    description: (
        <p>
            La imagen rota de <code>0°</code> a <code>360°</code> en cinco pasos durante 4 segundos, avanzando 90° por segundo.
            Con <code>repeatType: 'mirror'</code>, la animación se reproduce en reversa temporalmente.
            A diferencia de <code>'reverse'</code>, que invierte el array, <code>'mirror'</code> invierte la dirección del tiempo.
        </p>
    )
};
