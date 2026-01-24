import AnimationBox from '../../../../components/shared/AnimationBox/AnimationBox';
import styles from './styles/Circle.module.css';

import { circleContent } from './data/content';

function Circle() {
    const { title, subtitle, code, description } = circleContent.initialAnimateTransition;

    return (
        <AnimationBox
            initial={{ x: 0, y: 0 }}
            animate={{
                x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
                y: [-100, -70, 0, 70, 100, 70, 0, -70, -100]
            }}
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

export default Circle;
