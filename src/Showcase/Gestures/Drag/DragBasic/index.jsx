import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/DragBasic.module.css';
import Lesson1 from '@/components/features/Gestures/Lesson1/Lesson1';
import { dragBasicContent } from './data/content';

function DragBasic() {
    const { title, subtitle, code, description } = dragBasicContent;

    return (
        <AnimationBox>
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

            <Lesson1 />
        </AnimationBox>
    );
}

export default DragBasic;
