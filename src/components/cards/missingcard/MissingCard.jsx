import { useState } from 'react'
import styles from './MissingCard.module.css'


function MissingCard ({ animal }) {

  const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles['missing-card']}>
      {!flipped ? (

        <div className={styles['missing-front']}>
          <img className={styles['missing-img']} src={animal.foto} alt='foto animale'/>

          <h3 className={styles['missing-name']}>
            {animal.nome.toUpperCase()}
          </h3>

          <p className={styles['missing-type']}>
            Tipo : {animal.tipo === "cane" ? "🐶" : "🐱"}
          </p>

          <p className={styles['missing-age']}>
            Anni : {animal.anni}
          </p>

          <p className={styles['missing-desc']}>
            {animal.descrizione}
          </p>

          <button className={styles['missing-details']} onClick={() => setFlipped(true)}>
            DETTAGLI
          </button>
        </div>

      ) : (

        <div className={styles['missing-back']}>
          <p className={styles['missing-pos']}>
            📍 : {animal.ultimaPosizione}
          </p>

          <p className={styles['missing-num']}>
            ☎️ : {animal.contatto}
          </p>

          <p className={styles['missing-date']}>
            📅 : {animal.dataSegnalazione}
          </p>

          <button className={styles['missing-details']} onClick={() => setFlipped(false)}>
            NASCONDI
          </button>
        </div>
      )}
    </div>
  )
}

export default MissingCard