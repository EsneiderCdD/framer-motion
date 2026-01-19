// LabMotionBuilder/index.jsx
import MotionControls from './MotionControls';
import MotionPreview from './MotionPreview';
import PlaybackControls from './PlaybackControls';
import { useMotionConfig } from './useMotionConfig';
import styles from './styles.module.css';
import { useState } from 'react';

function LabMotionBuilder() {
  const {
    motionProps,
    transitionProps,
    updateMotionProp,
    updateTransitionProp,
  } = useMotionConfig();

  const [playbackState, setPlaybackState] = useState('idle');

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
        <div>
          <MotionPreview
            motionProps={motionProps}
            transitionProps={transitionProps}
            playbackState={playbackState}
          />
          <PlaybackControls setPlaybackState={setPlaybackState} />
        </div>
      </div>
    </div>
  );
}

export default LabMotionBuilder;
