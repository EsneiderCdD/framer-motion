import { Link } from 'react-router-dom';
import styles from '../styles/AnimationCard.module.css';

function CardFooter({ titulo, descripcion, tema, id }) {
    return (
        <div className={styles.content}>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <Link to={`/catalog/${tema}/${id}`}>Ver más</Link>
        </div>
    );
}

export default CardFooter;
