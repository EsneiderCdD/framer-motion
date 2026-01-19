import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/SlideY.module.css';
import Lesson2 from '@/components/features/Basic/Lesson2/Lesson2';
import { slideYContent } from './data/content';

function SlideY() {
    const { title, subtitle, code, description } = slideYContent;

    return (
        <AnimationBox
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{
                duration: 5, repeat: Infinity
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

            {/* Enlace para descargar el documento */}
            <a
                href="/documents/02.docx"
                download
                style={{ display: 'inline-block', marginTop: '1rem', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            >
                Descargar documento
            </a>

            <Lesson2 />
        </AnimationBox>
    );
}

export default SlideY;
