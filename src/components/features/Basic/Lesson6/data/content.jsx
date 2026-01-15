
export const content = {
    easeLinear: {
        code: `<motion.img
  src={m}
  alt="Ease Linear"
  className={styles.circle}
  initial={{ x: -100 }}
  animate={{ x: 100 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'linear'
  }}
/>`,
        description: (
            <p>
                Esta animación aplica un movimiento horizontal de <strong>x: -100</strong> a <strong>x: 100</strong> usando la función de <strong>ease: 'linear'</strong>, lo que significa que el cambio de posición ocurre a una velocidad constante, sin aceleración ni desaceleración. Es útil cuando se busca una animación mecánica o uniforme.
            </p>
        )
    },
    easeIn: {
        code: `<motion.img
  src={m}
  alt="Ease In"
  className={styles.circle}
  initial={{ x: -100 }}
  animate={{ x: 100 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeIn'
  }}
/>`,
        description: (
            <p>
                En esta animación el elemento se mueve horizontalmente de <strong>x: -100</strong> a <strong>x: 100</strong> utilizando la función de easing <strong>easeIn</strong>.<br /><br />
                Esto significa que comienza de forma lenta y luego acelera progresivamente, creando un efecto suave al inicio y más rápido hacia el final de cada recorrido.
            </p>
        )
    },
    easeOut: {
        code: `<motion.img
  src={m}
  alt="Ease Out"
  className={styles.circle}
  initial={{ x: -100 }}
  animate={{ x: 100 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeOut'
  }}
/>`,
        description: (
            <p>
                En esta animación el elemento se mueve horizontalmente de <strong>x: -100</strong> a <strong>x: 100</strong> utilizando la función de easing <strong>easeOut</strong>.<br /><br />
                Esto significa que comienza rápido y decelera al final, creando una frenada suave. Es muy natural para entradas de elementos.
            </p>
        )
    },
    easeInOut: {
        code: `<motion.img
  src={m}
  alt="Ease InOut"
  className={styles.circle}
  initial={{ x: -100 }}
  animate={{ x: 100 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
/>`,
        description: (
            <p>
                En esta animación el elemento se mueve horizontalmente de <strong>x: -100</strong> a <strong>x: 100</strong> utilizando la función de easing <strong>easeInOut</strong>.<br /><br />
                Combina las dos anteriores: empieza lento, acelera en el medio y frena al final. Es el tipo de animación más usada por sentirse orgánica.
            </p>
        )
    }
};
