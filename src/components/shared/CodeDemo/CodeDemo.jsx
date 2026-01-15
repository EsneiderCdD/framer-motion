import { useState } from 'react';
import styles from './styles/CodeDemo.module.css';

function CodeDemo({ code, description, children }) {
    const [showCode, setShowCode] = useState(false);

    return (
        <div className={styles.box}>
            {/* Toggle */}
            <div className={styles.item}>
                <button
                    className={styles.toggleButton}
                    onClick={() => setShowCode(prev => !prev)}
                >
                    {showCode ? 'i' : '<>'}
                </button>
            </div>

            {/* Visual */}
            <div className={styles.item}>
                {children}
            </div>

            {/*description or code*/}
            <div className={styles.item}>
                {showCode ? (
                    <pre className={styles.codeBlock}>
                        <code>{code}</code>
                    </pre>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CodeDemo;
