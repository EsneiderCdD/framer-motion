import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/Rotate.module.css';
import { rotateContent } from './data/content';

function Rotate() {
    const { title, subtitle, code, description } = rotateContent;

    return (
        <AnimationBox
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
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

export default Rotate;
