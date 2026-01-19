import AnimationBox from '@/components/shared/AnimationBox/AnimationBox';
import styles from './styles/SlideX.module.css';
import { slideXContent } from './data/content';

function SlideX() {
    const { title, subtitle, code, description } = slideXContent;

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
        </AnimationBox>
    );
}

export default SlideX;
