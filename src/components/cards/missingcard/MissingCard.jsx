import { useState } from 'react'
import styles from './MissingCard.module.css'


function MissingCard ({ missing }) {

  const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles.card}>
      {!flipped ? (

        <div className={styles.front}>
          <img className={styles.image} 
            src={missing.image} alt='foto animale'
          />

          <h3 className={styles.name}>
            {missing.name.toUpperCase()}
          </h3>

          <p className={styles.type}>
            Tipo : {missing.type === "cane" ? "🐶" : "🐱"}
          </p>

          <p className={styles.age}>
            Anni : {missing.age}
          </p>

          <p className={styles.desc}>
            {missing.desc}
          </p>

          <button className={styles.details} onClick={() => setFlipped(true)}>
            DETTAGLI
          </button>
        </div>

      ) : (

        <div className={styles.back}>
          <p className={styles.position}>
            📍 : {missing.lastPos}
          </p>

          <p className={styles.number}>
            ☎️ : {missing.number}
          </p>

          <p className={styles.date}>
            📅 : {missing.reportDate}
          </p>

          <button className={styles.details} onClick={() => setFlipped(false)}>
            NASCONDI
          </button>
        </div>
      )}
    </div>
  )
}

export default MissingCard