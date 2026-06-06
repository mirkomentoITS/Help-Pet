import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import styles from './BasicLayout.module.css'


function BasicLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.bar}>
        <Sidebar />
      </aside>
      <main className={styles.content}>
        <Outlet />  
      </main>
    </div>
  )
}

export default BasicLayout