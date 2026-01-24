import { useState } from 'react';
import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/Opacity.module.css';
import { opacityContent } from './data/content';
import { opacityCode } from './data/codeSnippet';
import SimpleModal from '@/components/shared/SimpleModal';
import { useCatalogNavigation } from '@/hooks/useCatalogNavigation';
import CodeBlock from '@/components/shared/CodeBlock';

function Opacity() {
    const { title, description } = opacityContent;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { goToNext, goToPrev } = useCatalogNavigation('opacity-motion');

    return (
        <AnimationBox
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        >
            <h2>{title}</h2>

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
                    <CodeBlock lines={opacityCode} />
                </SimpleModal>
            )}
        </AnimationBox>
    );
}

export default Opacity;
