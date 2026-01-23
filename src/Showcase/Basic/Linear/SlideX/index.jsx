import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/SlideX.module.css';
import { slideXContent } from './data/content';

function SlideX() {
    const { title, code, description } = slideXContent;

    return (
        <AnimationBox
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{
                duration: 10,
                repeat: Infinity
            }}
        >
            <h2>{title}</h2>
            <div className={styles.content}>
                <div className={styles.txt}>
                    {description}
                </div>
                {/* <pre className={styles.codeBlock}>
                    <code>{code}</code>
                </pre> */}
            </div>
        </AnimationBox>
    );
}

export default SlideX;
