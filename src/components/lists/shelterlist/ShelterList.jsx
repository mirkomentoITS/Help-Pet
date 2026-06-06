import ShelterCard from '../../cards/sheltercard/ShelterCard'
import styles from './ShelterList.module.css'


function ShelterList ({ list }) {

  return (
    <div className={styles.list}>
      {list.map((shelter) => (
        <ShelterCard key={shelter.id} shelter={shelter}/>
      ))}
    </div>
  )
}

export default ShelterList