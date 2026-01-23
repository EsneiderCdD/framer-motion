import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/Scale.module.css';
import { scaleContent } from './data/content';

function Scale() {
    const { title, subtitle, code, description } = scaleContent;

    return (
        <AnimationBox
            initial={{ scale: 1.5 }}
            animate={{ scale: 0 }}
            transition={{
                duration: 2, repeat: Infinity
            }}
        >
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className={styles.content}>
                <div className={styles.txt}>
                    {description}
                </div>
                <pre className={styles.codeBlock}>
                    <code>{code}</code>
                </pre>
            </div>
        </AnimationBox>
    );
}

export default Scale;
