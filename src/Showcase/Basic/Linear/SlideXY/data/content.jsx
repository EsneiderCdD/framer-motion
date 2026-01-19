export const slideXYContent = {
    title: "Movimiento en el eje XY",
    subtitle: "Sumatorias de propiedades",
    code: `<motion.div
  initial={{ y: -100, x: -100 }}
  animate={{ y: 0, x: 0 }}
  transition={{ duration: 10 }}
>
  Slide XY
</motion.div>`,
    description: (
        <>
            <p>
                Hasta ahora hemos aprendido a animar elementos en el eje <code>X</code> y <code>Y</code> por separado. Para mover un elemento en diagonal, simplemente combinamos ambas propiedades: <code>x</code> e <code>y</code>.
            </p>
            <p>
                Además, no estamos limitados a combinar solo <code>x</code> e <code>y</code>; podemos animar simultáneamente cualquier conjunto de propiedades aprendidas hasta ahora —como <code>scale</code>, <code>rotate</code>, <code>opacity</code>, <code>backgroundColor</code>, y más— para enriquecer la experiencia visual.
            </p>
        </>
    )
};
