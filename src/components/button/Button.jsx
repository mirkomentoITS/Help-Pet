import styles from './Button.module.css'


function Button({ title, variant, active, handleClick }) {

  return (
    <button onClick={handleClick}
      className= {`
         ${styles['btn']}
         ${variant ? styles[variant] : ''}
         ${active ? styles['filter-active'] : ''}`}>
      {title}
    </button>
  )
}

export default Button
