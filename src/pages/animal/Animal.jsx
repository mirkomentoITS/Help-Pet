import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ShelterCard from '../../components/cards/sheltercard/ShelterCard'
import AnimalList from '../../components/lists/animallist/AnimalList'
import styles from './Animal.module.css'


function Animal() {
 
  const { id } = useParams(); 

  const [shelter, setShelter] = useState(null)
  const [animalData, setAnimalData] = useState([])

  useEffect(() => {
    fetch(`/api/shelters/${id}`)
      .then((response) => response.json())
      .then((data) => setShelter(data))
      .catch(() => alert('Errore rifugio non trovato'))
  }, [id])

  useEffect(() => {
    fetch(`/api/animals?shelter=${id}`)
      .then((response) => response.json())
      .then((data) => setAnimalData(data))
      .catch(() => alert('Errore nel caricamento dati'))
  }, [id])


  return (
    <section className={styles.container}>
      <div className={styles.place}> 
        <div className={styles.wrapper}>
          {shelter && <ShelterCard shelter={shelter} />}
        </div>
      </div>
      <div className={styles.list}>
        <AnimalList list={animalData}/>
      </div>
    </section>
  ); 
}

export default Animal