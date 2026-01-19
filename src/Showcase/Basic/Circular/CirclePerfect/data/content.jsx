export const circlePerfectContent = {
    title: "Movimiento en el eje XY",
    subtitle: "Trigonometria y Animaciones",
    code: `<motion.div
  initial={{ x: circleMotion.x[0], y: circleMotion.y[0] }}
  animate={{ x: circleMotion.x, y: circleMotion.y }}
  transition={{ duration: 10 }}
>
  Slide X
</motion.div>`,
    description: (
        <>
            <p>
                Hasta ahora exploramos animaciones lineales y secuenciales usando valores fijos o secuencias definidas con keyframes.
                Pero ¿qué sucede si queremos lograr un movimiento circular perfecto? Aquí es donde entra en juego un enfoque diferente:
                generar dinámicamente los valores de <code>x</code> y <code>y</code> para trazar el círculo a través del tiempo.
            </p>
            <p>
                En este ejemplo usamos una función que calcula coordenadas en un círculo, y Framer Motion las interpreta como una animación continua en dos ejes.
                Es el primer paso hacia animaciones personalizadas más avanzadas y con mayor control que los keyframes simples.
            </p>
        </>
    )
};
