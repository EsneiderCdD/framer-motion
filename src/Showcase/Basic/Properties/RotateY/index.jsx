import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/RotateY.module.css';
import { rotateYContent } from './data/content';

function RotateY() {
    const { title, subtitle, code, description } = rotateYContent;

    return (
        <AnimationBox
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{
                duration: 5, repeat: Infinity, repeatType: 'reverse'
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

export default RotateY;
