export const slideYContent = {
    title: "Movimiento en el eje Y",
    subtitle: "Scale, Rotate, Opacity. Height, Width, backgroundColor y borderRadius",
    code: `<motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 1 }}
>
  Slide Y
</motion.div>`,
    description: (
        <>
            <p>
                Ya vimos cómo funciona el movimiento en el eje X. Para animar en el eje Y, seguimos exactamente el mismo principio, simplemente cambiando la propiedad de <code>x</code> a <code>y</code>.
            </p>
            <p>
                Continuamos utilizando <strong>initial</strong> para definir el punto de partida, <strong>animate</strong> para indicar el destino, y <strong>transition</strong> para controlar cómo ocurre el cambio.
            </p>
            <p>
                Ahora que entendemos la estructura básica, vamos a profundizar un poco más en otras propiedades que podemos animar.
            </p>
        </>
    )
};
