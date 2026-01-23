import { useState } from 'react';
import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/SlideY.module.css';
import { slideYContent } from './data/content';
import { slideYCode } from './data/codeSnippet';
import SimpleModal from '@/components/shared/SimpleModal';
import { useCatalogNavigation } from '@/hooks/useCatalogNavigation';
import CodeBlock from '@/components/shared/CodeBlock';

function SlideY() {
    const { title, description } = slideYContent;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { goToNext, goToPrev } = useCatalogNavigation('slide-y');

    return (
        <AnimationBox
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{
                duration: 5, repeat: Infinity
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
                    <CodeBlock lines={slideYCode} />
                </SimpleModal>
            )}
        </AnimationBox>
    );
}

export default SlideY;
