
export const opacityContent = {
    title: "Opacidad",
    subtitle: "Control de transparencia",
    code: `<motion.img
  src={m}
  alt="Opacidad"
  className={styles.circle}
  initial={{ opacity: 0.2 }}
  animate={{ opacity: 1 }}
  transition={{ 
    duration: 2, 
    repeat: Infinity, 
    repeatType: 'reverse' 
  }}
/>`,
    description: (
        <>
            <p>
                La propiedad <strong>opacity</strong> en Framer Motion controla la transparencia de un elemento.
            </p>
            <p>
                Un valor de <strong>opacity: 0</strong> lo hace invisible y <strong>opacity: 1</strong> lo muestra totalmente.
            </p>
            <p>
                En este caso, la animación alterna entre <strong>opacity: 0.2</strong> y <strong>opacity: 1</strong>, generando un efecto continuo de aparición y desaparición.
            </p>
        </>
    )
};
