import { useRef } from 'react';
import MissingCard from '../../cards/missingcard/MissingCard'
import styles from './MissingList.module.css'


function MissingList ({ list }) {

  const listRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    listRef.current.scrollLeft += e.deltaY
  };

  return (
    <div className={styles.list} ref={listRef} onWheel={handleWheel}>
      {list.map((missing) => (
        <MissingCard key={missing.nome} missing={missing}/>
      ))}
    </div>
  )
}

export default MissingList