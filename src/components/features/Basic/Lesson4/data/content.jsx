
export const content = {
    scale: {
        code: `<motion.img
  src={m}
  alt="Scale Keyframes"
  className={styles.circle}
  animate={{ scale: [1, 1.5, 1, 0.5, 1] }}
  transition={{ duration: 3, repeat: Infinity }}
/>`,
        description: (
            <p>
                Al no definir <code>initial</code>, Framer Motion usa el primer valor de <code>animate</code> como punto de partida.
                En este caso, <code>scale</code> oscila entre <code>1</code>, <code>1.5</code>, <code>0.5</code> y vuelve a <code>1</code>, generando un ritmo cíclico de expansión y contracción.
            </p>
        )
    },
    rotate: {
        code: `<motion.img
  src={m}
  alt="Rotate Keyframes"
  className={styles.circle}
  animate={{ rotate: [0, 90, 180, 270, 360] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: 'mirror'
  }}
/>`,
        description: (
            <p>
                La imagen rota de <code>0°</code> a <code>360°</code> en cinco pasos durante 4 segundos, avanzando 90° por segundo.
                Con <code>repeatType: 'mirror'</code>, la animación se reproduce en reversa temporalmente.
                A diferencia de <code>'reverse'</code>, que invierte el array, <code>'mirror'</code> invierte la dirección del tiempo.
            </p>
        )
    },
    opacity: {
        code: `<motion.img
  src={m}
  alt="Opacity Keyframes"
  className={styles.circle}
  animate={{ opacity: [1, 0.5, 0, 0.5, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
/>`,
        description: (
            <p>
                Esta animación modifica la propiedad <code>opacity</code> usando una secuencia de valores: de <code>1</code> a <code>0</code> y viceversa, pasando por transiciones intermedias.
                En 2 segundos recorre los cinco pasos, creando un parpadeo suave y continuo.
            </p>
        )
    },
    combined: {
        code: `<motion.img
  src={m}
  alt="Combined Keyframes"
  className={styles.circle}
  animate={{
    x: [0, 50, 0, -50, 0],
    scale: [1, 1.2, 1, 0.8, 1],
    opacity: [1, 0.5, 0.2, 0.5, 1]
  }}
  transition={{ duration: 4, repeat: Infinity }}
/>`,
        description: (
            <p>
                Esta animación combina tres propiedades clave: <code>x</code> para desplazar el elemento lateralmente, <code>scale</code> para hacerlo crecer y encoger, y <code>opacity</code> para hacerlo más o menos visible.
                El resultado es un movimiento dinámico, que en 4 segundos recorre cinco pasos creando un ritmo cíclico continuo.
            </p>
        )
    },
    times: {
        code: `<motion.img
  src={m}
  alt="Times Keyframes"
  className={styles.circle}
  animate={{ x: [0, 100, 0] }}
  transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity }}
/>`,
        description: (
            <p>
                Esta animación mueve el elemento horizontalmente desde <code>0</code> hasta <code>100</code> y de vuelta a <code>0</code>.
                La propiedad <code>times</code> controla el ritmo con que se alcanzan esos valores: en este caso, el segundo valor se alcanza al 30% del tiempo total, acelerando el regreso.
                Así, en lugar de transiciones equidistantes, se genera un tempo desigual más expresivo.
            </p>
        )
    },
    ease: {
        code: `<motion.img
  src={m}
  alt="Ease Keyframes"
  className={styles.circle}
  animate={{ x: [0, 100, -100, 0] }}
  transition={{ 
    duration: 4, 
    ease: ['easeIn', 'easeOut', 'easeInOut'], 
    repeat: Infinity 
  }}
/>`,
        description: (
            <p>
                Esta animación recorre diferentes valores de la propiedad <code>x</code>, generando un movimiento lateral en cuatro fases.
                Utiliza una combinación de curvas de aceleración <code>easeIn</code>, <code>easeOut</code> y <code>easeInOut</code>, que afectan la forma en que cambia la velocidad entre cada paso.
                Esto crea un desplazamiento más orgánico y fluido.
            </p>
        )
    }
};
