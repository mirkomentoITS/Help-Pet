import Shelter from '../cards/ShelterCard'


function ShelterList ({ list }) {

  return (
    <div className='shelter-list'>
      {list.map((shelter) => (
        <Shelter key={shelter.id} shelter={shelter} />
      ))}
    </div>
  )
}

export default ShelterList