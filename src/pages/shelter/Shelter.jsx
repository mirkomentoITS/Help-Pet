import { useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import ShelterList from '../../components/lists/shelterlist/ShelterList'
import styles from './Shelter.module.css'


function Shelter() {

  const [shelterData, setShelterData] = useState([])
  const [activeFilter, setActiveFilter] = useState('tutti')

  useEffect(() => {
    fetch('/api/shelters')
      .then((response) => response.json())
      .then((data) => setShelterData(data))
      .catch(() => alert('Errore nel caricamento dati'))
  }, [])

  const filterShelter = (query = '') => {
    fetch(`/api/shelters${query}`)
      .then(r => r.json())
      .then(data => setShelterData(data))
      .catch(() => alert('Errore filtro'))
  }

  return (
    <section className={styles.container}>
      <div className={styles.filter}>
        <Button
          title="TUTTI"
          variant="btn-filter"
          active={activeFilter === 'tutti'}
          handleClick={() => {
            setActiveFilter('tutti')
            filterShelter()
          }}
        />
        <Button
          title="ADOTTA"
          variant="btn-filter"
          active={activeFilter === 'adozione'}
          handleClick={() => {
            setActiveFilter('adozione')
            filterShelter('?placement=adozione')
          }}
        />
        <Button
          title="AFFIDA"
          variant="btn-filter"
          active={activeFilter === 'affido'}
          handleClick={() => {
            setActiveFilter('affido')
            filterShelter('?placement=affido')
          }}
        />
      </div>
      <div className={styles.list}>
        <ShelterList list={shelterData}/> 
      </div>
    </section>
  ); 
}

export default Shelter
