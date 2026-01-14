import styles from './styles/AnimationCard.module.css';
import CardPreview from './components/CardPreview';
import CardFooter from './components/CardFooter';

function AnimationCard({ id, titulo, descripcion, tema, animation, animation1, animation2, random }) {
    return (
        <div className={styles.card}>
            <CardPreview
                random={random}
                animation={animation}
                animation1={animation1}
                animation2={animation2}
            />

            <CardFooter
                titulo={titulo}
                descripcion={descripcion}
                tema={tema}
                id={id}
            />
        </div>
    );
}

export default AnimationCard;
