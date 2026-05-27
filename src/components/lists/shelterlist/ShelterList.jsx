import Shelter from '../../cards/sheltercard/ShelterCard'
import styles from './ShelterList.module.css'


function ShelterList ({ list }) {

  return (
    <div className={styles['shelter-list']}>
      {list.map((shelter) => (
        <Shelter key={shelter.id} shelter={shelter} />
      ))}
    </div>
  )
}

export default ShelterList