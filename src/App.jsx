import MissingList from './components/lists/MissingList'
import MapView from './components/MapView'
import Sidebar from './components/Sidebar';

import missingData from './data/missingData'


function App() {

  return (
    <div className='layout'>
      <aside className="bar">
        <Sidebar/>
      </aside>

      <section className='map'>
        <MapView pos={missingData}/> 
      </section>
      
      <section className='list'>
        <MissingList list={missingData}/>
      </section>
    </div>
  ); 
}

export default App
