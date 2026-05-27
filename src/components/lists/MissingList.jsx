import { useRef } from 'react';
import Missing from '../cards/MissingCard'


function MissingList ({ list }) {

  const listRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    listRef.current.scrollLeft += e.deltaY
  };

  return (
    <div className='missing-list' ref={listRef} onWheel={handleWheel}>
      {list.map((animal) => (
        <Missing key={animal.nome} animal={animal} />
      ))}
    </div>
  )
}

export default MissingList