import { useState, useEffect } from 'react'
import ShelterList from '../../components/lists/shelterlist/ShelterList'
import styles from './Shelter.module.css'


function Shelter() {

  const [shelterData, setShelterData] = useState([])

  useEffect(() => {
    fetch('/api/shelters')
      .then((response) => response.json())
      .then((data) => setShelterData(data))
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <ShelterList list={shelterData}/> 
      </div>
    </section>
  ); 
}

export default Shelter
