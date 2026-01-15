
export const content = {
    scale: {
        code: `<motion.img
  src={m}
  alt="Escala"
  className={styles.circle}
  initial={{ scale: 1.5 }}
  animate={{ scale: 0 }}
  transition={{ duration: 2, repeat: Infinity }}
/>`,
        description: (
            <p>
                La propiedad <strong>scale</strong> en Framer Motion permite modificar el tamaño de un elemento de forma proporcional en ambos ejes, X (horizontal) y Y (vertical). Al aplicar un valor como <strong>scale: 1.5</strong>, el objeto se agranda al 150% de su tamaño original. Cuando usamos <strong>scale: 0</strong>, el objeto se reduce hasta desaparecer. También es posible controlar la escala de manera independiente en cada eje mediante <strong>scaleX</strong> para ajustar el ancho y <strong>scaleY</strong> para modificar la altura. Esto permite realizar transformaciones específicas sobre cada dirección.
            </p>
        )
    },
    rotate: {
        code: `<motion.img
  src={m}
  alt="Rotación"
  className={styles.circle}
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, repeatType: 'reverse',
                duration: 5
  }}
/>

<motion.img
  src={m}
  alt="Rotación X"
  className={styles.circle}
  initial={{ rotateX: 0 }}
  animate={{ rotateX: 360 }}
  transition={{ repeat: Infinity, repeatType: 'reverse',
                duration: 5
  }}
/>

<motion.img
  src={m}
  alt="Rotación Y"
  className={styles.circle}
  initial={{ rotateY: 0 }}
  animate={{ rotateY: 360 }}
  transition={{ repeat: Infinity, repeatType: 'reverse'
                duration: 5,
  }}
/>`,
        description: (
            <p>
                La propiedad <strong>rotate</strong> en Framer Motion permite girar un elemento sobre su eje Z, es decir, rotar en su propio plano. Por ejemplo, animar de <strong>rotate: 0</strong> a <strong>rotate: 360</strong> genera una vuelta completa sobre sí mismo. <br />
                También es posible rotar sobre el eje X con <strong>rotateX</strong>, lo que provoca un giro hacia adelante o hacia atrás, afectando la altura visual del objeto. Por otro lado, <strong>rotateY</strong> realiza un giro de lado a lado, modificando la vista en el ancho.
            </p>
        )
    },
    opacity: {
        code: `<motion.img
  src={m}
  alt="Opacidad"
  className={styles.circle}
  initial={{ opacity: 0.2 }}
  animate={{ opacity: 1 }}
  transition={{ repeat: Infinity , repeatType: 'reverse',
                duration: 2
  }}
/>`,
        description: (
            <p>
                La propiedad <strong>opacity</strong> en Framer Motion controla la transparencia de un elemento. Un valor de <strong>opacity: 0</strong> lo hace invisible y <strong>opacity: 1</strong> lo muestra totalmente. En este caso, la animación alterna entre <strong>opacity: 0.2</strong> y <strong>opacity: 1</strong>, generando un efecto continuo de aparición y desaparición.
            </p>
        )
    },
    size: {
        code: `<motion.img
  src={m}
  alt="Tamaño"
  className={styles.circle}
  initial={{ width: '100px', height: '100px' }}
  animate={{ width: '150px', height: '150px' }}
  transition={{ repeat: Infinity, repeatType: 'reverse'
                duration: 10
  }}
/>`,
        description: (
            <p>
                En Framer Motion, podemos modificar el tamaño real de un elemento usando las propiedades <strong>width</strong> y <strong>height</strong>. Esto cambia directamente el espacio que ocupa en el diseño de la página.
                <br /><br />
                A diferencia de <strong>scale</strong>, que altera el tamaño visual sin afectar el layout, cambiar el ancho y alto sí puede influir en el flujo y disposición de otros elementos cercanos.
            </p>
        )
    },
    color: {
        code: `<motion.div
  className={styles.circleWrapper}
  initial={{ backgroundColor: '#F6EA11' }}
  animate={{ backgroundColor: '#000000' }}
  transition={{ repeat: Infinity, repeatType: 'reverse',
                duration: 2
  }}
>
  <img src={m} 
  alt="Colores" 
  className={styles.circle} />
</motion.div>`,
        description: (
            <p>
                En Framer Motion también podemos animar propiedades visuales como el <strong>backgroundColor</strong>, permitiendo transiciones suaves entre colores. Con <strong>repeatType: 'reverse'</strong>, la animación rebota entre los valores iniciales y finales.
            </p>
        )
    }
};
