import styles from './styles.module.css';
import PositionControls from './groups/PositionControls';
import TransformControls from './groups/TransformControls';
import ColorControls from './groups/ColorControls';
import TransitionControls from './groups/TransitionControls';

function MotionControls({ motionProps, transitionProps, setMotionProp, setTransitionProp }) {
  return (
    <div className={styles.controls}>
      <h3>🎛 Propiedades de Movimiento</h3>
      <PositionControls motionProps={motionProps} setMotionProp={setMotionProp} />
      <TransformControls motionProps={motionProps} setMotionProp={setMotionProp} />
      <ColorControls motionProps={motionProps} setMotionProp={setMotionProp} />

      <h3>⚙️ Transiciones</h3>
      <TransitionControls transitionProps={transitionProps} setTransitionProp={setTransitionProp} />
    </div>
  );
}

export default MotionControls;
