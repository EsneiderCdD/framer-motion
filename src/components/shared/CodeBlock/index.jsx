import styles from './styles/CodeBlock.module.css';

/**
 * Reusable CodeBlock component that renders structured code lines with simulated indentation.
 * 
 * @param {Array} lines - Array of objects { indent: number, tokens: [{ type: string, content: string }] }
 */
const CodeBlock = ({ lines }) => {
    return (
        <div className={styles.container}>
            {lines.map((line, index) => (
                <div
                    key={index}
                    className={styles.line}
                >
                    <span className={styles.lineNumber}>{index + 1}</span>
                    <span style={{ paddingLeft: `${line.indent * 1.35}rem`, display: 'inline-block' }}>
                        {line.tokens.map((token, tIndex) => (
                            <span
                                key={tIndex}
                                className={`${styles.token} ${styles[token.type] || styles.text}`}
                            >
                                {token.content}
                            </span>
                        ))}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default CodeBlock;
