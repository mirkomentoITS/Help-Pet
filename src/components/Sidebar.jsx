import { Map, House, HeartHandshake,} from 'lucide-react';
import UserIcon from '../assets/userIcon.png';
import settings from '../assets/settings.png';


function Sidebar () {

  return (
    <aside className="sidebar">

      <div className='title'>
       <img className='logo' src='/logo.png' alt='logo' />
       <h3 className='text'>HELP PET</h3>
      </div>

      <div className="menu">
        <div className="item">
          <Map/>
          Missing
        </div>
        <div className="item">
          <House/>
          Shelters
        </div>
        <div className="item">
          <HeartHandshake/>
          Help us
        </div>
      </div>

      <div className='profile'>
        <img className='image' src={UserIcon}></img>
        <div className='user'>
          <p className='name'>Diana Robertson</p>
          <p className='action'>View Profile</p>            
        </div>
        <img className='icon' src={settings}/>        
      </div>

    </aside>
  )
}

export default Sidebar