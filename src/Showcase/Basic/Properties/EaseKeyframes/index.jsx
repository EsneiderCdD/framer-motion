import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/EaseKeyframes.module.css';
import { easeKeyframesContent } from './data/content';

function EaseKeyframes() {
    const { title, subtitle, code, description } = easeKeyframesContent;

    return (
        <AnimationBox
            animate={{ x: [0, 100, -100, 0] }}
            transition={{
                duration: 4,
                ease: ['easeIn', 'easeOut', 'easeInOut'],
                repeat: Infinity
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

export default EaseKeyframes;
