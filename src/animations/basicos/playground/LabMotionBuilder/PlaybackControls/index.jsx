import styles from './styles.module.css';

function PlaybackControls({ setPlaybackState }) {
  return (
    <div className={styles.controls}>
      <button onClick={() => setPlaybackState('play')}>▶️ Play</button>
      <button onClick={() => setPlaybackState('reset')}>🔄 Reset</button>
      {/* Pause puede activarse en el futuro */}
    </div>
  );
}

export default PlaybackControls;
