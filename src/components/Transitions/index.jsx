import React from 'react';
import RepeatExample from './RepeatExample';
import RepeatTypeExample from './RepeatTypeExample';
import DelayExample from './DelayExample';
import EaseExample from './EaseExample';
import styles from './Transitions.module.css';

export default function TransitionsCatalog() {
  return (
    <div className={styles.container}>
      <RepeatExample />
      <RepeatTypeExample />
      <DelayExample />
      
      <EaseExample />
      {/* 
       */}
    </div>
  );
}
