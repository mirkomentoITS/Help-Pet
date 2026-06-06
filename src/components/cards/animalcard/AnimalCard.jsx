import styles from './AnimalCard.module.css'


function AnimalCard ({ animal }) {

  return (
    <div className={styles.card}>

      <img className={styles.image} 
        src={animal.image} alt='foto animale'/>

      <h3 className={styles.name}>
        {animal.name.toUpperCase()}
      </h3>

      <p className={styles.type}>
        Tipo : {animal.type === "cane" ? "🐶" : "🐱"}
      </p>

      <p className={styles.gender}>
        Genere : {animal.gender === "maschio" ? "♂️" : "♀️"}
      </p>

      <p className={styles.age}>
        Anni : {animal.age}
      </p>

      <p className={styles.desc}>
        {animal.desc}
      </p>

    </div>
  )
}

export default AnimalCard