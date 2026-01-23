import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/RotateX.module.css';
import { rotateXContent } from './data/content';

function RotateX() {
    const { title, description } = rotateXContent;

    return (
        <AnimationBox
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 360 }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        >
            <h2>{title}</h2>
            <div className={styles.content}>
                <div className={styles.txt}>
                    {description}
                </div>
            </div>
        </AnimationBox>
    );
}

export default RotateX;
