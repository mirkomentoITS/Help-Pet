import { NavLink } from 'react-router-dom'
import { Map, House, HeartHandshake,} from 'lucide-react';
import UserIcon from '../../assets/userIcon.png';
import settings from '../../assets/settings.png';
import styles from './Sidebar.module.css'


function Sidebar () {

  const activeItem = ({ isActive }) => 
    `${styles.item} 
     ${isActive ? styles.active : ''}`


  return (
    <aside className={styles.sidebar}>

      <div className={styles.title}>
       <img className={styles.logo} src='/logo.png' alt='logo' />
       <h3 className={styles.text}>HELP PET</h3>
      </div>

      <ul className={styles.menu}>
        <li>
          <NavLink
            to='/'
            className={activeItem}>
            <Map/>
            Missing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shelter'
            className={activeItem}>
            <House/>
            Shelters
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/helpus'
            className={activeItem}>
            <HeartHandshake/>
            Help us
          </NavLink>
        </li>
      </ul>

      <div className={styles.profile}>
        <img className={styles.image} src={UserIcon}></img>
        <div className={styles.user}>
          <p className={styles.name}>Diana Robertson</p>
          <p className={styles.action}>View Profile</p>            
        </div>
        <img className={styles.icon} src={settings}/>        
      </div>

    </aside>
  )
}

export default Sidebar