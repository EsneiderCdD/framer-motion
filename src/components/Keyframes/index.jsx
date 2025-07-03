import React from 'react';
import BasicMovement from './BasicMovement';
import ScaleKeyframes from './ScaleKeyframes';
import RotateKeyframes from './RotateKeyframes';
import OpacityKeyframes from './OpacityKeyframes';
import CombinedKeyframes from './CombinedKeyframes';
import TimesKeyframes from './TimesKeyframes';
import EaseKeyframes from './EaseKeyframes';
import styles from './Keyframes.module.css';
export default function KeyframesCatalog() {
  return (
    <div className={styles.container}>
      <h4 style={{fontSize: '2.5rem'}}>Otras Propiedades</h4>

      {/* <BasicMovement /> */}
      <ScaleKeyframes />
      <RotateKeyframes />
      <OpacityKeyframes />
      <CombinedKeyframes />
      <TimesKeyframes />
      <EaseKeyframes />
    </div>
  );
}
