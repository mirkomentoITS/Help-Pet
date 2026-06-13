import { useState, useEffect } from 'react'
import MapView from '../../components/mapview/MapView'
import MissingList from '../../components/lists/missinglist/MissingList'
import Button from '../../components/button/Button'
import AnimalForm from '../../components/animalform/AnimalForm'
import styles from './Missing.module.css'


function Missing() {

  const [missingData, setMissingData] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    fetch('/api/missings')
      .then((response) => response.json())
      .then((data) => setMissingData(data))
      .catch(() => alert('Errore nel caricamento dei dati'))
  }, [])

  return (
    <section className={styles.container}>                                               
      <div className={styles.map}> 
        <MapView pos={missingData}/> 
      </div>
      <div className={styles.list}>                                                                    
        <MissingList list={missingData}/>
      </div>   
      <Button title='AGGIUNGI' variant='btn-miss' handleClick={() => setToggle(prev => !prev)}/>
      {toggle && <AnimalForm onClose={() => setToggle(false)} />}
    </section>
  ); 
}

export default Missing