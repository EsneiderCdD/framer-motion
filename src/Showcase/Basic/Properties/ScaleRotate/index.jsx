import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/ScaleRotate.module.css';
import { scaleRotateContent } from './data/content';
import m from '@/assets/images/m.svg';
import { motion } from 'framer-motion';

function ScaleRotate() {
    const { title, subtitle, code, description } = scaleRotateContent;

    return (
        <AnimationBox
            initial={{ scale: 0.5, rotate: 0 }}
            animate={{ scale: 1.5, rotate: 360 }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
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

export default ScaleRotate;
