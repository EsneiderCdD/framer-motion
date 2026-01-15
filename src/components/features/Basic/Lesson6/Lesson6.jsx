import React from 'react';
import DurationComparison from './Properties/DurationComparison';
import EaseLinear from './Properties/EaseLinear';
import EaseIn from './Properties/EaseIn';
import EaseOut from './Properties/EaseOut';
import EaseInOut from './Properties/EaseInOut';
import styles from './styles/Properties.module.css';

export default function Lesson6() {
  return (
    <div className={styles.container}>

      <h4 style={{ fontSize: '2.5rem' }}>Otras Propiedades</h4>
      <EaseLinear />
      <EaseIn />
      <EaseOut />
      <EaseInOut />
    </div>
  );
}
