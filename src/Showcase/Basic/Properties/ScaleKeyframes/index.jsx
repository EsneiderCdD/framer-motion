import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/ScaleKeyframes.module.css';
import { scaleKeyframesContent } from './data/content';

function ScaleKeyframes() {
    const { title, subtitle, code, description } = scaleKeyframesContent;

    return (
        <AnimationBox
            animate={{ scale: [1, 1.5, 0.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
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

export default ScaleKeyframes;
