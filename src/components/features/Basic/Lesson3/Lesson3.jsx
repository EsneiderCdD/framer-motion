import React from 'react';
import styles from './styles/Properties.module.css';

import ScaleRotateOpacity from './Properties/ScaleRotateOpacity';

export default function Lesson3() {
  return (
    <div className={styles.container}>
      <h4 style={{ fontSize: '2.5rem' }}>Sumatoria de Propiedades</h4>
      <ScaleRotateOpacity />

      {/* Aquí irán los demás ejemplos a medida que los vayas creando */}
    </div>
  );
}
