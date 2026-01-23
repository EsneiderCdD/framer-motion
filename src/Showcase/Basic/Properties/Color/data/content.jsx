
export const colorContent = {
    title: "Color",
    subtitle: "Animación de color de fondo",
    code: `<motion.div
  initial={{ backgroundColor: '#F6EA11' }}
  animate={{ backgroundColor: '#000000' }}
  transition={{ 
    duration: 2, 
    repeat: Infinity, 
    repeatType: 'reverse' 
  }}
>
  <img src={m} alt="Colores" />
</motion.div>`,
    description: (
        <>
            <p>
                En Framer Motion también podemos animar propiedades visuales como el <strong>backgroundColor</strong>, permitiendo transiciones suaves entre colores.
            </p>
            <p>
                Con <strong>repeatType: 'reverse'</strong>, la animación rebota entre los valores iniciales y finales.
            </p>
        </>
    )
};
