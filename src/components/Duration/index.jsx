import React from 'react';
import DurationComparison from './DurationComparison';
import EaseLinear from './EaseLinear';
import EaseIn from './EaseIn';
import EaseOut from './EaseOut';
import EaseInOut from './EaseInOut';
import styles from './Duration.module.css';

export default function DurationCatalog() {
  return (
    <div className={styles.container}>

      <h4 style={{fontSize: '2.5rem'}}>Otras Propiedades</h4>
      {/* <DurationComparison /> */}
      <EaseLinear />
      <EaseIn />
      <EaseOut />
      <EaseInOut />
    </div>
  );
}
