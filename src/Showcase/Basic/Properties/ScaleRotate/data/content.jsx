
export const scaleRotateContent = {
    title: "Escala y Rotación",
    subtitle: "Combinación de dos propiedades",
    code: `<motion.div
  initial={{ scale: 0.5, rotate: 0 }}
  animate={{ scale: 1.5, rotate: 360 }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
>
  <img src={m} alt="Escala y Rotación" />
</motion.div>`,
    description: (
        <>
            <p>
                En este ejemplo combinamos dos propiedades: <strong>scale</strong> y <strong>rotate</strong>.
            </p>
            <p>
                Mientras el elemento rota completamente sobre su eje, también cambia su tamaño de forma progresiva.
            </p>
            <p>
                Esta combinación crea una sensación dinámica de expansión y giro al mismo tiempo, enriqueciendo la animación visual sin necesidad de desplazamiento en el eje X o Y.
            </p>
        </>
    )
};
