import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/SlideXY.module.css';
import Lesson3 from '@/components/features/Basic/Lesson3/Lesson3';
import { slideXYContent } from './data/content';

function SlideXY() {
    const { title, subtitle, code, description } = slideXYContent;

    return (
        <AnimationBox
            initial={{ x: -100, y: -100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 7.5, repeat: Infinity }}
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

            {/* Enlace para descargar el documento */}
            <a
                href="/documents/01.docx"
                download
                style={{ display: 'inline-block', marginTop: '1rem', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            >
                Descargar documento
            </a>
            <Lesson3 />
        </AnimationBox>
    );
}

export default SlideXY;
