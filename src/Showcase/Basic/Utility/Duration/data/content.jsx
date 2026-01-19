export const durationContent = {
    title: "Duración en animaciones",
    subtitle: "Comparando duración con el mismo movimiento",
    code: `<motion.div
  initial={{ y: -100 }}
  animate={{ y: 100 }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
>
  Movimiento vertical
</motion.div>

<motion.div
  initial={{ y: -100 }}
  animate={{ y: 100 }}
  transition={{
    duration: 10,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
>
  Movimiento vertical más lento
</motion.div>`,
    description: (
        <>
            <p>
                En este ejemplo se comparan dos animaciones con el mismo recorrido vertical (de <code>y: -100</code> a <code>y: 100</code>), pero con diferentes duraciones.
            </p>
            <p>
                La primera animación tarda <strong>2.5 segundos</strong> en completar el recorrido, mientras que la segunda tarda <strong>10 segundos</strong>. Ambas se repiten de forma infinita con reversa.
            </p>
            <p>
                Esto permite observar cómo el valor de <code>duration</code> influye en la velocidad de una animación aunque el recorrido sea el mismo.
            </p>
        </>
    )
};
