import Missing from '../cards/MissingCard'


function MissingList ({ list }) {

  return (
    <div className='missing-list'>
      {list.map((animal) => (
        <Missing key={animal.nome} animal={animal} />
      ))}
    </div>
  )
}

export default MissingList