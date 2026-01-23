import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/BorderColor.module.css';
import { borderContent } from './data/content';

function BorderColor() {
    const { title, subtitle, code, description } = borderContent;

    return (
        <AnimationBox
            initial={{ backgroundColor: '#F6EA11', borderRadius: '0%' }}
            animate={{ backgroundColor: '#000000', borderRadius: '50%' }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
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

export default BorderColor;
