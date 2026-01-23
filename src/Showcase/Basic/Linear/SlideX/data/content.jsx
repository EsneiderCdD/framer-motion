export const slideXContent = {
    title: "Movimiento en el eje X",
   
    code: `<motion.div
initial={{ x: -100 }}
animate={{ x: 0 }}
transition={{ duration: 1 }}
>
Slide X
</motion.div>`,
    description: (
        <>
            <p>
                Este es un ejemplo básico de movimiento en el eje X usando Framer Motion.
                Aquí configuramos <strong>initial</strong> como <code>x: -100</code>, lo que significa que empieza 100 píxeles a la izquierda.
            </p>
            <p>
                Luego, <strong>animate</strong> mueve el elemento a <code>x: 0</code>, su posición original,
                y la <strong>transition</strong> define que este cambio tarda 1 segundo.
            </p>
        </>
    )
};
