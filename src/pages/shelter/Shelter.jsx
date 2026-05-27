import ShelterList from '../../components/lists/shelterlist/ShelterList'
import shelterdata from '../../data/shelterData'
import styles from './Shelter.module.css'


function Shelter() {

  return (
    <section className={styles['container']}>
      <div className={styles['list']}>
        <ShelterList list={shelterdata}/> 
      </div>
    </section>
  ); 
}

export default Shelter
