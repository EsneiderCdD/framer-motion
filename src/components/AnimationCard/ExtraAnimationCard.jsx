import { useState } from 'react';
import styles from '../../animations/Animations.module.css'; 
export default function ExtraAnimationCard({ title, code, element, description }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <h4>{title}</h4>
      </div>

      <div className={styles.item} style={{ position: 'relative' }}>
        {element}

        <button
          className={styles.toggleButton}
          onClick={() => setShowCode(prev => !prev)}
          title={showCode ? 'Ver descripción' : 'Ver código'}
        >
          {showCode ? '<>' : 'i'}
        </button>
      </div>

      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{code}</code>
          </pre>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </div>
  );
}
