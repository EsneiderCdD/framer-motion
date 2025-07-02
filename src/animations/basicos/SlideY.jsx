// src/animations/basicos/SlideY.jsx
import AnimationBox from '../../components/AnimationBox/AnimationBox';
import styles from './Slide.module.css';
import AnimationCatalog from '../../components/Animations';

function SlideY() {
  const codeString = `<motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 1 }}
>
  Slide X
</motion.div>`;

  return (
    <AnimationBox
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ duration: 5, repeat: Infinity
      }}
      
    >
      <h2>Movimiento en el eje Y</h2> 
            <h3>Initial, Animate y Transition </h3>
            <div className={styles.content}>
              <div className={styles.txt}>
                <p>
                  Este es un ejemplo básico de movimiento en el eje X usando Framer Motion.
                  Aquí configuramos <strong>initial</strong> como <code>x: -100</code>, lo que significa que empieza 100 píxeles a la izquierda.
                </p>
                <p>
                  Luego, <strong>animate</strong> mueve el elemento a <code>x: 0</code>, su posición original,
                  y la <strong>transition</strong> define que este cambio tarda 1 segundo.
                </p>
              </div>
              <pre className={styles.codeBlock}>
                <code>{codeString}</code>
              </pre>
            </div>
      
      {/* Enlace para descargar el documento */}
      <a
        href="/documents/02.docx"
        download
        style={{ display: 'inline-block', marginTop: '1rem', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Descargar documento
      </a>

      {/* Video incrustado */}
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
      
      {/* Animation Catalog */}
      <AnimationCatalog />

    </AnimationBox>
  );
}

export default SlideY;



