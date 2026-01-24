import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Duration.module.css';
import { durationContent } from './data/content';
import { durationCode } from './data/codeSnippet';
import SimpleModal from '@/components/shared/SimpleModal';
import { useCatalogNavigation } from '@/hooks/useCatalogNavigation';
import CodeBlock from '@/components/shared/CodeBlock';
import m from '@/assets/images/m.png';

function Duration() {
    const { title, subtitle, description } = durationContent;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { goToNext, goToPrev } = useCatalogNavigation('comparacion-slide-x-y');

    const animation1 = {
        initial: { y: -100 },
        animate: { y: 100 },
        transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
        }
    };

    const animation2 = {
        initial: { y: -100 },
        animate: { y: 100 },
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
        }
    };

    return (
        <div className={styles.animationContainer}>
            <div className={styles.container}>
                <motion.div
                    initial={animation1.initial}
                    animate={animation1.animate}
                    transition={animation1.transition}
                    className={styles.motionBox}
                >
                    <img src={m} alt="Framer Motion Logo" className={styles.logo} />
                </motion.div>
                <motion.div
                    initial={animation2.initial}
                    animate={animation2.animate}
                    transition={animation2.transition}
                    className={styles.motionBox}
                >
                    <img src={m} alt="Framer Motion Logo" className={styles.logo} />
                </motion.div>
            </div>

            <div className={styles.description}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>

                <div className={styles.controlsWrapper}>
                    <button
                        className={styles.navButton}
                        onClick={goToPrev}
                        title="Anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={styles.codeButton}
                        title="Ver código"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </button>

                    <button
                        className={styles.navButton}
                        onClick={goToNext}
                        title="Siguiente"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className={styles.content}>
                    <div className={styles.txt}>
                        {description}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <SimpleModal onClose={() => setIsModalOpen(false)}>
                    <CodeBlock lines={durationCode} />
                </SimpleModal>
            )}
        </div>
    );
}

export default Duration;
