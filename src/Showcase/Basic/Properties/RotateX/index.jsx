import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/RotateX.module.css';
import { rotateXContent } from './data/content';

function RotateX() {
    const { title, subtitle, code, description } = rotateXContent;

    return (
        <AnimationBox
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 360 }}
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

export default RotateX;
