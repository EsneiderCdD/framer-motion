
export const content = {
    repeat: {
        code: `<motion.img
  src={m}
  alt="Repeat"
  className={styles.circle}
  initial={{ x: 0 }}
  animate={{ x: 150 }}
  transition={{ 
    duration: 1, 
    repeat: Infinity 
  }}
/>`,
        description: (
            <p>
                La propiedad <strong>repeat: Infinity</strong> hace que la animación se reproduzca en bucle indefinidamente.
                Es ideal para loaders, indicadores o efectos de fondo continuos.
            </p>
        )
    },
    repeatType: {
        code: `<motion.img
  src={m}
  alt="Repeat Type"
  className={styles.circle}
  initial={{ y: 0 }}
  animate={{ y: 150 }}
  transition={{ 
    duration: 1, 
    repeat: Infinity, 
    repeatType: 'mirror' 
  }}
/>`,
        description: (
            <p>
                <strong>repeatType</strong> define cómo se repite la animación.
                Con <strong>'mirror'</strong>, la animación va y viene suavemente.
                Otros valores son <strong>'loop'</strong> (reinicia desde el principio) y <strong>'reverse'</strong> (invierte cada ciclo).
            </p>
        )
    },
    delay: {
        code: `<motion.img
  src={m}
  alt="Delay"
  className={styles.circle}
  initial={{ scale: 1 }}
  animate={{ scale: 1.5 }}
  transition={{ 
    duration: 1, 
    delay: 1 
  }}
/>`,
        description: (
            <p>
                La propiedad <strong>delay</strong> introduce una pausa antes de iniciar la animación.
                Es muy útil para escalonar animaciones o esperar a que ocurran otros eventos visuales.
            </p>
        )
    },
    ease: {
        code: `<motion.img
  src={m}
  alt="Ease"
  className={styles.circle}
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ 
    duration: 2, 
    ease: 'easeInOut', 
    repeat: Infinity 
  }}
/>`,
        description: (
            <p>
                La propiedad <strong>ease</strong> suaviza la aceleración y desaceleración de la animación.
                Valores como <strong>'easeInOut'</strong> hacen que el movimiento se sienta más natural y menos robótico.
            </p>
        )
    }
};
