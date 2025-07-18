import { motion } from 'framer-motion';
import styles from './Summation.module.css';
import m from '../../assets/images/m.png';
import { useState } from 'react';

export default function BorderExample() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.div
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
</motion.div>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <button onClick={() => setShowCode(prev => !prev)}>
          {showCode ? 'i' : '<>'}
        </button>
      </div>
      <div className={styles.item}>
        <motion.div
          className={styles.circleWrapper}
          initial={{ backgroundColor: '#F6EA11', borderRadius: '0%' }}
          animate={{ backgroundColor: '#000000', borderRadius: '50%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={m} alt="Colores" className={styles.circle} />
        </motion.div>
      </div>
      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            En Framer Motion, podemos animar el <strong>backgroundColor</strong> y el <strong>borderRadius</strong> 
            para cambiar el color y la forma de un elemento al mismo tiempo. 
            <br /><br />
            Por ejemplo, un contenedor cuadrado puede transformarse en un círculo mientras cambia de color. 
            Estas animaciones solo afectan la apariencia visual, no el espacio que ocupa el elemento.
          </p>
        )}
      </div>
    </div>
  );
}
