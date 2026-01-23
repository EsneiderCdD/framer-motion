import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/Size.module.css';
import { sizeContent } from './data/content';

function Size() {
    const { title, subtitle, code, description } = sizeContent;

    return (
        <AnimationBox
            initial={{ width: '100px', height: '100px' }}
            animate={{ width: '150px', height: '150px' }}
            transition={{
                duration: 10, repeat: Infinity, repeatType: 'reverse'
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

export default Size;
