import React from 'react';
import ScaleRotate from './ScaleRotate';
import styles from './Summation.module.css';
import BorderExample from './BorderShadow';
import ScaleRotateOpacity from './ScaleRotateOpacity';

export default function SummationCatalog() {
  return (
    <div className={styles.container}>
      <h4 style={{ fontSize: '2.5rem' }}>Sumatoria de Propiedades</h4>
      <ScaleRotate />
      <BorderExample />
      <ScaleRotateOpacity />
      
      {/* Aquí irán los demás ejemplos a medida que los vayas creando */}
    </div>
  );
}
