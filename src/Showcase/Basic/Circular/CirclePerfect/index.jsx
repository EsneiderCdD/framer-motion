import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/CirclePerfect.module.css';
import { generateCircleKeyframes } from '@/utils/generateCircleKeyframes';
import { circlePerfectContent } from './data/content';

const circleMotion = generateCircleKeyframes(40, 100);

function CirclePerfect() {
    const { title, subtitle, code, description } = circlePerfectContent;

    return (
        <AnimationBox
            initial={{ x: circleMotion.x[0], y: circleMotion.y[0] }}
            animate={{ x: circleMotion.x, y: circleMotion.y }}
            transition={{ duration: 10 }}
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

export default CirclePerfect;
