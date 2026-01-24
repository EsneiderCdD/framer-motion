import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/CombinedKeyframes.module.css';
import { combinedKeyframesContent } from './data/content';

function CombinedKeyframes() {
    const { title, subtitle, code, description } = combinedKeyframesContent;

    return (
        <AnimationBox
            animate={{
                x: [0, 50, 0, -50, 0],
                scale: [1, 1.2, 1, 0.8, 1],
                opacity: [1, 0.5, 0.2, 0.5, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
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

export default CombinedKeyframes;
