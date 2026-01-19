import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/Variants.module.css';
import Lesson5 from '@/components/features/Basic/Lesson5/Lesson5';
import { variantsContent } from './data/content';

function Variants() {
    const { title, subtitle, code, description } = variantsContent;

    return (
        <AnimationBox
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
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

            <Lesson5 />
        </AnimationBox>
    );
}

export default Variants;
