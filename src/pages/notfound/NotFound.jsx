import { Link } from 'react-router-dom'
import sadAnimals from '../../assets/sadAnimals.png'
import styles from './NotFound.module.css'


function NotFound() {

  return (
    <div className={styles.wrapper}>

      <div className={styles.error}>
      
        <img className={styles.image}
          src={sadAnimals} 
          alt="animali tristi"
        />
      
        <h1 className={styles.code}>
          404
        </h1>

        <p className={styles.message}>
          OPS! Sembra che questa pagina si sia persa. 
          Torna alla home e aiutaci a ritrovarla!
        </p>

        <Link to="/" className={styles.link}>
          Torna alla home
        </Link>

      </div>

    </div>
  ); 
}

export default NotFound