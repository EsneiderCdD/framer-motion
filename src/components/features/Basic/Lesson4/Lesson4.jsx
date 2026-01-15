import React from 'react';

import ScaleKeyframes from './Properties/ScaleKeyframes';
import RotateKeyframes from './Properties/RotateKeyframes';
import OpacityKeyframes from './Properties/OpacityKeyframes';
import CombinedKeyframes from './Properties/CombinedKeyframes';
import TimesKeyframes from './Properties/TimesKeyframes';
import EaseKeyframes from './Properties/EaseKeyframes';
import styles from './styles/Properties.module.css';

export default function Lesson4() {
  return (
    <div className={styles.container}>
      <h4 style={{ fontSize: '2.5rem' }}>Otras Propiedades</h4>
      <ScaleKeyframes />
      <RotateKeyframes />
      <OpacityKeyframes />
      <CombinedKeyframes />
      <TimesKeyframes />
      <EaseKeyframes />
    </div>
  );
}
