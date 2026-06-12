import { useRef } from 'react'
import styles from './AnimalForm.module.css'


function AnimalForm () {

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const result = Object.fromEntries(data)

    console.log(result);
  }

  return ( 
    <div className={styles.card}>
      <h1 className={styles.title}>Missing Pet 🐾</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.data}>
           <div className={styles.name}>
             <label htmlFor='name'>Name</label>
             <input
               type='text'
               id='name'
               name='name'
               required
               minLength={2}
               maxLength={30}/>
           </div>
           <div className={styles.type}>
             <label htmlFor='type'>Type</label>
             <select id='type' name='type'>
               <option defaultValue='dog'>dog</option>
               <option value='cat'>cat</option>
               <option value='rabbit'>rabbit</option>
             </select>
           </div>
           <div className={styles.age}>
             <label htmlFor='age'>Age</label>
             <input
               type='number'
               id='age'
               name='age'
               required
               min={0}
               max={25}/>
           </div>
           <div className={styles.image}>
             <label className={styles.fileButton} htmlFor='image'>Add Photo 🖼️</label>
             <input
               className={styles.hiddenFile}
               type='file'
               id='image'
               name='image'
               required/>
           </div>
           <div className={styles.desc}>
             <label htmlFor='desc'>Description</label>
             <textarea
               id='desc'
               name='description'
               rows='2'
               cols='70'
               required
               minLength={10}
               maxLength={300}/>
           </div>
        </div>
        <div className={styles.posizione}>
          <div className={styles.pos}>
            <label htmlFor="pos">Last Position</label>
            <input
              type="text"
              id="pos"
              name='position'
              required
              minLength={10}/>
          </div> 
          <div className={styles.lat}>
            <label htmlFor="lat">Latitude</label>
            <input
              type="number"
              id="lat"
              name='latitude'
              min={-90}
              max={90}
              step="any"/>
          </div>
          <div className={styles.lng}>
            <label htmlFor="lng">Longitude</label>
            <input
              type="number"
              id="lng"
              name='longitude'
              min={-180}
              max={180}
              step="any"/>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.number}>
            <label htmlFor="number">Number</label>
            <input
              type="text"
              id="number"
              name='number'/>
          </div>
          <div className={styles.date}>
            <label htmlFor="date">Missing Date</label>
            <input
              type="date"
              id="date"
              name='date'
              required/>
          </div>
        </div>
        <button id={styles.button} type="submit">SEND</button>
      </form>
  </div>
  )
}

export default AnimalForm