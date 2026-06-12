import styles from './Button.module.css'


function Button({ title, classes, handleClick }) {

  return (
    <button onClick={handleClick} className={styles[`btn--${classes}`]}>
      {title}
    </button>
  )
}

export default Button
