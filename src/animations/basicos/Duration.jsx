import AnimationDualBox from '../../components/AnimationDualBox/AnimationDualBox';
import styles from './SlideDual.module.css';
import DurationCatalog from '../../components/Duration/index';

function Duration() {
  const codeString = `<motion.div
  initial={{ y: -100 }}
  animate={{ y: 100 }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
>
  Movimiento vertical
</motion.div>

<motion.div
  initial={{ y: -100 }}
  animate={{ y: 100 }}
  transition={{
    duration: 10,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
>
  Movimiento vertical más lento
</motion.div>`;


  return (
    <AnimationDualBox
      animation1={{
        initial: { y: -100 },
        animate: { y: 100 },
        transition: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }}
      animation2={{
        initial: { y: -100 },
        animate: { y: 100 },
        transition: {
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }}
    >
      <h2>Duración en animaciones</h2>
      <h3>Comparando duración con el mismo movimiento</h3>

      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            En este ejemplo se comparan dos animaciones con el mismo recorrido vertical (de <code>y: -100</code> a <code>y: 100</code>), pero con diferentes duraciones.
          </p>
          <p>
            La primera animación tarda <strong>2.5 segundos</strong> en completar el recorrido, mientras que la segunda tarda <strong>10 segundos</strong>. Ambas se repiten de forma infinita con reversa.
          </p>
          <p>
            Esto permite observar cómo el valor de <code>duration</code> influye en la velocidad de una animación aunque el recorrido sea el mismo.
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

      <DurationCatalog />
    </AnimationDualBox>
  );
}

export default Duration;

