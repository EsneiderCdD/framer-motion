import { useState } from 'react';
import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/EaseInOut.module.css';
import { easeInOutContent } from './data/content';
import { easeInOutCode } from './data/codeSnippet';
import SimpleModal from '@/components/shared/SimpleModal';
import { useCatalogNavigation } from '@/hooks/useCatalogNavigation';
import CodeBlock from '@/components/shared/CodeBlock';

function EaseInOut() {
    const { title, subtitle, description } = easeInOutContent;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { goToNext, goToPrev } = useCatalogNavigation('ease-in-out-motion');

    return (
        <AnimationBox
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
            }}
        >
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

            {isModalOpen && (
                <SimpleModal onClose={() => setIsModalOpen(false)}>
                    <CodeBlock lines={easeInOutCode} />
                </SimpleModal>
            )}
        </AnimationBox>
    );
}

export default EaseInOut;
