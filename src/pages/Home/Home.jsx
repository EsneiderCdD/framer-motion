import { Link } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import styles from './styles/Home.module.css';
import m from '../../assets/images/m.png';
import { homeItems } from './data/home';

function Home() {
    return (
        <div className={styles.home}>
            {/* logo image */}
            <img src={m} alt="Framer Motion Logo" className={styles.logo} />

            <h1>Framer Motion Lab</h1>
            <p>Selecciona un tema para explorar:</p>

            {/* navigation menu */}
            <nav className={styles.menu}>
                <ul>
                    {homeItems.map((item) => (
                        <li key={item.id}>
                            <Link to={item.path}>
                                <Card title={item.title} animation={item.animation} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Home;
