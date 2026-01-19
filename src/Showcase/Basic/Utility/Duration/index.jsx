import AnimationDualBox from '@/components/shared/AnimationDualBox/AnimationDualBox';
import styles from './styles/Duration.module.css';
import Lesson6 from '@/components/features/Basic/Lesson6/Lesson6';
import { durationContent } from './data/content';

function Duration() {
    const { title, subtitle, code, description } = durationContent;

    return (
        <AnimationDualBox
            animation1={{
                initial: { y: -100 },
                animate: { y: 100 },
                transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }
            }}
            animation2={{
                initial: { y: -100 },
                animate: { y: 100 },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }
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

            <Lesson6 />
        </AnimationDualBox>
    );
}

export default Duration;
