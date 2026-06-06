import { Link } from "react-router-dom";
import styles from './ShelterCard.module.css'


function ShelterCard ({ shelter }) {

  return (
    <Link 
      to={`/shelter/${shelter.id}`}
      className={styles.link}
    >
    <div className={styles.card}>

      <img className={styles.image} 
        src={shelter.image} alt='foto luogo'
      />

      <h3 className={styles.id}>
        {shelter.id.toUpperCase()}
      </h3>

      <p className={styles.distance}>
        KM {shelter.distance}
      </p>

      <p className={styles.name}>
        {shelter.name}
      </p>

      <p className={styles.city}>
        {shelter.city}
      </p>

      <p className={styles.address}>
        📍 {shelter.address}
      </p>

      <p className={styles.number}>
        ☎️ {shelter.number}
      </p>

    </div>
    </Link>
  )
}

export default ShelterCard