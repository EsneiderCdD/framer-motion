import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function SizeExample() {
  return (
    <div className={styles.box}>

      <div className={styles.item}>
        <pre>
          <code>
            {`<motion.img
  src={m}
  alt="Tamaño"
  className={styles.circle}
  initial={{ width: '100px', height: '100px' }}
  animate={{ width: '150px', height: '150px' }}
  transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
/>`}
          </code>
        </pre>
      </div>

      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Tamaño"
          className={styles.circle}
          initial={{ width: '100px', height: '100px' }}
          animate={{ width: '150px', height: '150px' }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className={styles.item}>
        <p>
          En Framer Motion, además de modificar la escala visual de un objeto, también podemos cambiar directamente su tamaño utilizando las propiedades <strong>width</strong> (ancho) y <strong>height</strong> (alto). Ambas permiten ajustar las dimensiones físicas del elemento dentro del layout. <br /><br />
          Es importante notar la diferencia con la propiedad <strong>scale</strong>: cuando usamos <strong>scale</strong>, el objeto se agranda o reduce visualmente, pero el espacio que ocupa en la página (su "caja" o área reservada) no cambia. Esto significa que un elemento puede crecer visualmente sin desplazar a los elementos vecinos. <br /><br />
          En cambio, al animar el <strong>width</strong> y el <strong>height</strong>, el tamaño real del objeto cambia y esto sí afecta la estructura del layout, puede mover o empujar otros elementos, y puede modificar el flujo de la página. <br /><br />
          Por lo tanto, aunque <strong>scale</strong> y <strong>size</strong> (ancho y alto) parecen producir un efecto similar a simple vista, en realidad tienen un impacto muy diferente sobre la disposición de los elementos dentro del contenedor.
        </p>
      </div>

    </div>
  );
}

