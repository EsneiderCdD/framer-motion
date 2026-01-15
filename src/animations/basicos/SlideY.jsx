// src/animations/basicos/SlideY.jsx
import AnimationBox from '../../components/shared/AnimationBox/AnimationBox';
import styles from './Slide.module.css';
import Lesson2 from '../../components/features/Basic/Lesson2/Lesson2';

function SlideY() {
  const codeString = `<motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 1 }}
>
  Slide Y
</motion.div>`;

  return (
    <AnimationBox
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{
        duration: 5, repeat: Infinity
      }}

    >
      <h2>Movimiento en el eje Y</h2>
      <h3>Scale, Rotate, Opacity. Height, Width, backgroundColor y borderRadius </h3>
      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            Ya vimos cómo funciona el movimiento en el eje X. Para animar en el eje Y, seguimos exactamente el mismo principio, simplemente cambiando la propiedad de <code>x</code> a <code>y</code>.
          </p>
          <p>
            Continuamos utilizando <strong>initial</strong> para definir el punto de partida, <strong>animate</strong> para indicar el destino, y <strong>transition</strong> para controlar cómo ocurre el cambio.
          </p>
          <p>
            Ahora que entendemos la estructura básica, vamos a profundizar un poco más en otras propiedades que podemos animar.
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
      <Lesson2 />

    </AnimationBox>
  );
}

export default SlideY;



