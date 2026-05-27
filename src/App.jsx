import ShelterList from './components/lists/ShelterList'
import Sidebar from './components/Sidebar';

import shelterdata from './data/shelterData'


function App() {

  return (
    <div className='layout'>
      <aside className="bar">
        <Sidebar/>
      </aside>

      <section className='list'>
        <ShelterList list={shelterdata}/> 
      </section>
    </div>
  ); 
}

export default App
