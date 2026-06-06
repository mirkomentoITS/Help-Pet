import { useState, useEffect } from 'react'
import MapView from '../../components/mapview/MapView'
import MissingList from '../../components/lists/missinglist/MissingList'
import styles from './Missing.module.css'


function Missing() {

  const [missingData, setMissingData] = useState([])

  useEffect(() => {
    fetch('api/missings')
      .then((response) => response.json())
      .then((data) => setMissingData(data))
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.map}> 
        <MapView pos={missingData}/> 
      </div>
      <div className={styles.list}>
        <MissingList list={missingData}/>
      </div>
    </section>
  ); 
}

export default Missing