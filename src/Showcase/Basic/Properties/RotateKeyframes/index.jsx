import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/RotateKeyframes.module.css';
import { rotateKeyframesContent } from './data/content';

function RotateKeyframes() {
    const { title, subtitle, code, description } = rotateKeyframesContent;

    return (
        <AnimationBox
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'mirror'
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

export default RotateKeyframes;
