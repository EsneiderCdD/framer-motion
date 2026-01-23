import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/Opacity.module.css';
import { opacityContent } from './data/content';

function Opacity() {
    const { title, subtitle, code, description } = opacityContent;

    return (
        <AnimationBox
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2, repeat: Infinity, repeatType: 'reverse'
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

export default Opacity;
