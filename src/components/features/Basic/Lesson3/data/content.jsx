
export const content = {
    scaleRotate: {
        code: `<motion.div
  className={styles.circleWrapper}
  initial={{ scale: 0.5, rotate: 0 }}
  animate={{ scale: 1.5, rotate: 360 }}
  transition={{ repeat: Infinity, repeatType: 'reverse',
                duration: 4, ease: 'easeInOut' }}
>
  <img src={m} alt="Animación combinada" 
  className={styles.circle} />
</motion.div>`,
        description: (
            <p>
                En este ejemplo combinamos dos propiedades: <strong>scale</strong> y <strong>rotate</strong>.
                Mientras el elemento rota completamente sobre su eje, también cambia su tamaño de forma progresiva.
                <br /><br />
                Esta combinación crea una sensación dinámica de expansión y giro al mismo tiempo, enriqueciendo
                la animación visual sin necesidad de desplazamiento en el eje X o Y.
            </p>
        )
    },
    borderShadow: {
        code: `<motion.div
  className={styles.circleWrapper}
  initial={{ backgroundColor: '#F6EA11', 
             borderRadius: '0%' }}
  animate={{ backgroundColor: '#000000', 
             borderRadius: '50%' }}
  transition={{ repeat: Infinity, repeatType: 'reverse',
                duration: 2 }}
>
  <img src={m} 
  alt="Colores" 
  className={styles.circle} />
</motion.div>`,
        description: (
            <p>
                En Framer Motion, podemos animar el <strong>backgroundColor</strong> y el <strong>borderRadius</strong>
                para cambiar el color y la forma de un elemento al mismo tiempo.
                <br /><br />
                Por ejemplo, un contenedor cuadrado puede transformarse en un círculo mientras cambia de color.
                Estas animaciones solo afectan la apariencia visual, no el espacio que ocupa el elemento.
            </p>
        )
    },
    scaleRotateOpacity: {
        code: `<motion.img
  src={m}
  initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
  animate={{ scale: 1, rotate: 360, opacity: 1 }}
  transition={{ opacity: { duration: 3, delay: 0 },
                scale: { duration: 3, delay: 3 },
                rotate: { duration: 3, delay: 6 }
  }}
/>`,
        description: (
            <p>
                Este ejemplo muestra cómo aplicar múltiples transformaciones en secuencia.
                Usamos <strong>scale</strong>, <strong>rotate</strong> y <strong>opacity</strong> con transiciones personalizadas por propiedad, usando <code>delay</code> para encadenarlas.
                Es útil para crear entradas más rítmicas y controladas visualmente.
            </p>
        )
    }
};
