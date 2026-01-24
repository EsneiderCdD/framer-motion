import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/OpacityKeyframes.module.css';
import { opacityKeyframesContent } from './data/content';

function OpacityKeyframes() {
    const { title, subtitle, code, description } = opacityKeyframesContent;

    return (
        <AnimationBox
            animate={{ opacity: [1, 0.5, 0, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
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

export default OpacityKeyframes;
