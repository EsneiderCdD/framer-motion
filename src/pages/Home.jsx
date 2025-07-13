import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import styles from './Home.module.css';
import m from '../assets/images/m.png';


const cardAnimations = {
  basicos: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  },
  gestures: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: { rotate: 5 },
    tap: { scale: 0.95 }
  },
  layout: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, rotate: -3 },
    tap: { scale: 0.95 }
  }
};

function Home() {
  return (
    <div className={styles.home}>
      <img src={m} alt="Framer Motion Logo" className={styles.logo} />
      <h1>Framer Motion Lab</h1>
      <p>Selecciona un tema para explorar:</p>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link to="/catalog/basicos">
              <Card title="Básicos" animation={cardAnimations.basicos} />
            </Link>
          </li>
          <li>
            <Link to="/catalog/gestures">
              <Card title="Gestures" animation={cardAnimations.gestures} />
            </Link>
          </li>
          <li>
            <Link to="/catalog/layout">
              <Card title="Layout" animation={cardAnimations.layout} />
            </Link>
          </li>
        </ul>
      </nav>


      
      
    </div>
  );
}

export default Home;
