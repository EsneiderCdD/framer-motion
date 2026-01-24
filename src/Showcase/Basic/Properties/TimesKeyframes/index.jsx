import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/TimesKeyframes.module.css';
import { timesKeyframesContent } from './data/content';

function TimesKeyframes() {
    const { title, subtitle, code, description } = timesKeyframesContent;

    return (
        <AnimationBox
            animate={{ x: [0, 100, 0] }}
            transition={{
                duration: 3,
                times: [0, 0.3, 1],
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

export default TimesKeyframes;
