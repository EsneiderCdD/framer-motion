import { useState } from 'react';
import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/SlideX.module.css';
import { slideXContent } from './data/content';
import { slideXCode } from './data/codeSnippet';
import SimpleModal from '@/components/shared/SimpleModal';
import CodeBlock from '@/components/shared/CodeBlock';

function SlideX() {
    const { title, code, description } = slideXContent;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <AnimationBox
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{
                duration: 10,
                repeat: Infinity
            }}
        >
            <h2>{title}</h2>

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

            <div className={styles.content}>
                <div className={styles.txt}>
                    {description}
                </div>
                {/* <pre className={styles.codeBlock}>
                    <code>{code}</code>
                </pre> */}
            </div>

            {isModalOpen && (
                <SimpleModal onClose={() => setIsModalOpen(false)}>
                    <CodeBlock lines={slideXCode} />
                </SimpleModal>
            )}
        </AnimationBox>
    );
}

export default SlideX;
