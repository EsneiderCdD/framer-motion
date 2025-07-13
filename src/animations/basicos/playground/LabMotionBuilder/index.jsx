import MotionControls from './MotionControls/MotionControls';
import MotionPreview from './MotionPreview/MotionPreview';
import styles from './styles.module.css';
import { useMotionConfig } from './useMotionConfig';

function LabMotionBuilder() {
  const {
    motionProps,
    transitionProps,
    updateMotionProp,
    updateTransitionProp,
  } = useMotionConfig();

  return (
    <div className={styles.builderContainer}>
      <h2 className={styles.title}>🧪 Motion Builder</h2>
      <div className={styles.layout}>
        <MotionControls
          motionProps={motionProps}
          transitionProps={transitionProps}
          setMotionProp={updateMotionProp}
          setTransitionProp={updateTransitionProp}
        />
        <MotionPreview
          motionProps={motionProps}
          transitionProps={transitionProps}
        />
      </div>
    </div>
  );
}

export default LabMotionBuilder;