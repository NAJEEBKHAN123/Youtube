import styles from './Display.module.css'

function Display( {displayValue} ) {
  return (
    <div>
      <input type="text"  className={styles.Input} value={displayValue} readOnly/>
    </div>
  )
}

export default Display
