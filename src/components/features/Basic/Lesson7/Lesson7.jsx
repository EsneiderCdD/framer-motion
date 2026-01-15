import React from 'react';
import RepeatExample from './Properties/RepeatExample';
import RepeatTypeExample from './Properties/RepeatTypeExample';
import DelayExample from './Properties/DelayExample';
import EaseExample from './Properties/EaseExample';
import styles from './styles/Properties.module.css';

export default function Lesson7() {
  return (
    <div className={styles.container}>

      <h4 style={{ fontSize: '2.5rem' }}>Otras Propiedades</h4>

      <RepeatExample />
      <RepeatTypeExample />
      <DelayExample />

      <EaseExample />
      {/* 
       */}
    </div>
  );
}
