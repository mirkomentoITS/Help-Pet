import { useState } from 'react'


function MissingCard ({ animal }) {

  const [flipped, setFlipped] = useState(false)

  return (
    <div className='missing-card'>
      {!flipped ? (

        <div className='missing-front'>
          <img className='missing-img' src={animal.foto} alt='foto animale'/>

          <h3 className='missing-name'>
            {animal.nome.toUpperCase()}
          </h3>

          <p className='missing-type'>
            Tipo : {animal.tipo === "cane" ? "🐶" : "🐱"}
          </p>

          <p className='missing-age'>
            Anni : {animal.anni}
          </p>

          <p className='missing-desc'>
            {animal.descrizione}
          </p>

          <button className="missing-dettagli" onClick={() => setFlipped(true)}>
            DETTAGLI
          </button>
        </div>

      ) : (

        <div className='missing-back'>
          <p className='missing-pos'>
            📍 : {animal.ultimaPosizione}
          </p>

          <p className='missing-num'>
            ☎️ : {animal.contatto}
          </p>

          <p className='missing-data'>
            📅 : {animal.dataSegnalazione}
          </p>

          <button className="missing-dettagli" onClick={() => setFlipped(false)}>
            NASCONDI
          </button>
        </div>
      )}
    </div>
  )
}

export default MissingCard