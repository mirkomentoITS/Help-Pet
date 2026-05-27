import MapView from '../../components/mapview/MapView'
import MissingList from '../../components/lists/missinglist/MissingList'
import missingData from '../../data/missingData'
import styles from './Missing.module.css'


function Missing() {

  return (
    <section className={styles['container']}>
      <div className={styles['map']}> 
        <MapView pos={missingData}/> 
      </div>
      <div className={styles['list']}>
        <MissingList list={missingData}/>
      </div>
    </section>
  ); 
}

export default Missing