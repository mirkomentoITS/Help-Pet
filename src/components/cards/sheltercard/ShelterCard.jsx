import styles from './ShelterCard.module.css'


function ShelterCard ({ shelter }) {

  return (
    <div className={styles['shelter-card']}>

      <img className={styles['shelter-img']} src={shelter.immagine} alt='foto luogo'/>

      <h3 className={styles['shelter-id']}>
        {shelter.id.toUpperCase()}
      </h3>

      <p className={styles['shelter-distance']}>
        KM {shelter.distanza}
      </p>

      <p className={styles['shelter-name']}>
        {shelter.nome}
      </p>

      <p className={styles['shelter-city']}>
        {shelter.citta}
      </p>

      <p className={styles['shelter-address']}>
        📍 {shelter.indirizzo}
      </p>

      <p className={styles['shelter-num']}>
        ☎️ {shelter.contatto}
      </p>

    </div>
  )
}

export default ShelterCard