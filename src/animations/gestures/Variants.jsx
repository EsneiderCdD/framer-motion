// src/animations/gestures/Variants.jsx

import AnimationBox from '../../components/AnimationBox/AnimationBox';
import styles from './styles.module.css';
import VariantsCatalog from '../../components/Variants/index';

function Variants() {
  const codeString = `
const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
/>`;

  return (
    <AnimationBox
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h2>Secuencias y Patrones</h2>
      <h3>Uso de Variants</h3>

      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            En Framer Motion, los <strong>variants</strong> permiten definir múltiples estados animados con nombre. Esto permite que tus componentes tengan una animación mucho más limpia, reutilizable y fácil de controlar.
          </p>
          <p>
            En este ejemplo, definimos tres estados llamados <code>hidden</code>, <code>visible</code> y <code>exit</code>, cada uno con sus propias propiedades de animación.
          </p>
          <p>
            El componente detecta el nombre del estado que debe animarse y Framer Motion se encarga del resto.
          </p>
        </div>

        <pre className={styles.codeBlock}>
          <code>{codeString}</code>
        </pre>
      </div>

      {/* Enlace de descarga */}
      <a
        href="/documents/drag.docx"
        download
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          color: 'blue',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
      >
        Descargar documento
      </a>

      {/* Video explicativo */}
      <div style={{ marginTop: '2rem' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2V1WK-3HQNk?si=AUDDMUo3-SFDyO8D"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Subtemas */}
      <VariantsCatalog />
    </AnimationBox>
  );
}

export default Variants;
