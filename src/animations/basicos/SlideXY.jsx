
import AnimationBox from '../../components/shared/AnimationBox/AnimationBox';
import styles from './Slide.module.css';
import Lesson3 from '../../components/features/Basic/Lesson3/Lesson3';
function SlideXY() {
  const codeString = `<motion.div
  initial={{ y: -100, x: -100 }}
  animate={{ y: 0, x: 0 }}
  transition={{ duration: 10 }}
>
  Slide XY
</motion.div>`;

  return (
    <AnimationBox
      initial={{ x: -100, y: -100 }}
      animate={{ x: 0, y: 0 }}

      transition={{ duration: 7.5, repeat: Infinity }}
    >
      <h2>Movimiento en el eje XY</h2>
      <h3>Sumatorias de propiedades </h3>
      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            Hasta ahora hemos aprendido a animar elementos en el eje <code>X</code> y <code>Y</code> por separado. Para mover un elemento en diagonal, simplemente combinamos ambas propiedades: <code>x</code> e <code>y</code>.
          </p>
          <p>
            Además, no estamos limitados a combinar solo <code>x</code> e <code>y</code>; podemos animar simultáneamente cualquier conjunto de propiedades aprendidas hasta ahora —como <code>scale</code>, <code>rotate</code>, <code>opacity</code>, <code>backgroundColor</code>, y más— para enriquecer la experiencia visual.
          </p>
        </div>
        <pre className={styles.codeBlock}>
          <code>{codeString}</code>
        </pre>
      </div>
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

      {/* Enlace para descargar el documento */}
      <a
        href="/documents/01.docx"
        download
        style={{ display: 'inline-block', marginTop: '1rem', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Descargar documento
      </a>
      <Lesson3 />

    </AnimationBox>
  );
}

export default SlideXY;

