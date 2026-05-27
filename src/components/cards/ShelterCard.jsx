function ShelterCard ({ shelter }) {

  return (
    <div className='shelter-card'>

      <img className='shelter-img' src={shelter.immagine} alt='foto luogo'/>

      <h3 className='shelter-id'>
        {shelter.id.toUpperCase()}
      </h3>

      <p className='shelter-distance'>
        KM {shelter.distanza}
      </p>

      <p className='shelter-name'>
        {shelter.nome}
      </p>

      <p className='shelter-city'>
        {shelter.citta}
      </p>

      <p className='shelter-address'>
        📍 {shelter.indirizzo}
      </p>

      <p className='shelter-num'>
        ☎️ {shelter.contatto}
      </p>

    </div>
  )
}

export default ShelterCard