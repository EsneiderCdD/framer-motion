import styles from './styles/SimpleModal.module.css';

function SimpleModal({ onClose, children }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.trafficLights}>
                        <span className={`${styles.dot} ${styles.red}`}></span>
                        <span className={`${styles.dot} ${styles.yellow}`}></span>
                        <span className={`${styles.dot} ${styles.green}`}></span>
                    </div>
                    <button className={styles.closeButton} onClick={onClose}>
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default SimpleModal;
