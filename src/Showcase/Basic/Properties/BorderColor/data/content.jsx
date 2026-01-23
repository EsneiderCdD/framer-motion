
export const borderContent = {
    title: "Borde y Color",
    subtitle: "Transformación de forma y color",
    code: `<motion.div
  initial={{ backgroundColor: '#F6EA11', borderRadius: '0%' }}
  animate={{ backgroundColor: '#000000', borderRadius: '50%' }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse'
  }}
>
  <img src={m} alt="Borde y Color" />
</motion.div>`,
    description: (
        <>
            <p>
                En Framer Motion, podemos animar el <strong>backgroundColor</strong> y el <strong>borderRadius</strong> para cambiar el color y la forma de un elemento al mismo tiempo.
            </p>
            <p>
                Por ejemplo, un contenedor cuadrado puede transformarse en un círculo mientras cambia de color.
            </p>
            <p>
                Estas animaciones solo afectan la apariencia visual, no el espacio que ocupa el elemento.
            </p>
        </>
    )
};
