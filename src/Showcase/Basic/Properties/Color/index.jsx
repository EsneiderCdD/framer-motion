import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/Color.module.css';
import { colorContent } from './data/content';

function Color() {
    const { title, subtitle, code, description } = colorContent;

    return (
        <AnimationBox
            initial={{ backgroundColor: '#F6EA11' }}
            animate={{ backgroundColor: '#000000' }}
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

export default Color;
