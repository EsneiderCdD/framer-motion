// File: components/LabMotionBuilder/MotionControls.jsx
import React from 'react';
import styles from './LabMotionBuilder.module.css';

function MotionControls({ motionProps, transitionProps, setMotionProp, setTransitionProp }) {
  return (
    <div className={styles.controls}>
      <h3>🎛 Propiedades de Movimiento</h3>

      <label>
        X:
        <input
          type="number"
          value={motionProps.x}
          onChange={e => setMotionProp('x', parseInt(e.target.value))}
        />
      </label>

      <label>
        Y:
        <input
          type="number"
          value={motionProps.y}
          onChange={e => setMotionProp('y', parseInt(e.target.value))}
        />
      </label>

      <label>
        Scale:
        <input
          type="number"
          step="0.1"
          value={motionProps.scale}
          onChange={e => setMotionProp('scale', parseFloat(e.target.value))}
        />
      </label>

      <label>
        Rotate:
        <input
          type="number"
          value={motionProps.rotate}
          onChange={e => setMotionProp('rotate', parseInt(e.target.value))}
        />
      </label>

      <label>
        Background Color:
        <input
          type="color"
          value={motionProps.backgroundColor}
          onChange={e => setMotionProp('backgroundColor', e.target.value)}
        />
      </label>

      <h3>⚙️ Transiciones</h3>

      <label>
        Duration:
        <input
          type="number"
          step="0.1"
          value={transitionProps.duration}
          onChange={e => setTransitionProp('duration', parseFloat(e.target.value))}
        />
      </label>

      <label>
        Ease:
        <select
          value={transitionProps.ease}
          onChange={e => setTransitionProp('ease', e.target.value)}
        >
          <option value="easeInOut">easeInOut</option>
          <option value="easeIn">easeIn</option>
          <option value="easeOut">easeOut</option>
          <option value="linear">linear</option>
          <option value="circIn">circIn</option>
          <option value="backOut">backOut</option>
          <option value="anticipate">anticipate</option>
        </select>
      </label>

      <label>
        Repeat:
        <input
          type="number"
          value={transitionProps.repeat}
          onChange={e => setTransitionProp('repeat', parseInt(e.target.value))}
        />
      </label>

      <label>
        Repeat Type:
        <select
          value={transitionProps.repeatType}
          onChange={e => setTransitionProp('repeatType', e.target.value)}
        >
          <option value="loop">loop</option>
          <option value="reverse">reverse</option>
          <option value="mirror">mirror</option>
        </select>
      </label>
    </div>
  );
}

export default MotionControls;
