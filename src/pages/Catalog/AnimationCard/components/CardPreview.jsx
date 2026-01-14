import { motion } from 'framer-motion';
import styles from '../styles/AnimationCard.module.css';
import m from '../../../../../../assets/images/m.png';
import RandomMotion from '../../../../../../animations/basicos/RandomMotion';

function CardPreview({ random, animation, animation1, animation2 }) {
    if (random) {
        return <RandomMotion />;
    }

    if (animation1 && animation2) {
        return (
            <div className={styles.dualImageContainer}>
                <motion.img
                    src={m}
                    alt="Animación 1"
                    className={styles.image}
                    {...animation1}
                />
                <motion.img
                    src={m}
                    alt="Animación 2"
                    className={styles.image}
                    {...animation2}
                />
            </div>
        );
    }

    return (
        <div className={styles.example}>
            <motion.img
                src={m}
                alt="Animación Framer Motion"
                className={styles.image}
                {...animation}
            />
        </div>
    );
}

export default CardPreview;
