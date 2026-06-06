import AnimalCard from '../../cards/animalcard/AnimalCard'
import styles from './AnimalList.module.css'


function AnimalList ({ list }) {

  return (
    <div className={styles.list}>
      {list.map((animal) => (
        <AnimalCard key={animal.id} animal={animal}/>
      ))}
    </div>
  )
}

export default AnimalList