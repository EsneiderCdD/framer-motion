export const circleContent = {
    initialAnimateTransition: {
        title: "Vuelta",
        subtitle: "Initial, Animate y Transition",
        code: `<motion.div
  initial={{ x: 0, y: 0 }}
  animate={{
        x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
        y: [-100, -70, 0, 70, 100, 70, 0, -70, -100]
      }}
  transition={{ duration: 10 }}
>
  Circle
</motion.div>`,
        description: (
            <>
                <p>
                    En esta sección introducimos el uso de <strong>keyframes</strong> en Framer Motion, una técnica que permite definir secuencias de valores para una propiedad, generando movimientos más complejos y fluidos. En lugar de animar de un punto A a un punto B, especificamos una lista de valores intermedios que el elemento recorrerá en orden, creando trayectorias como curvas, zigzags o ciclos.
                </p>
                <p>
                    El siguiente ejemplo aplica esta técnica sobre los ejes <code>x</code> y <code>y</code>. Definimos una lista de valores para cada uno, creando una animación que simula un recorrido circular. Esta secuencia se controla mediante la propiedad <code>transition</code>, especificando su duración total.
                </p>
            </>
        )
    }
};
