
import styles from './Display.module.css'

function Display(  props )  {
  return (
    <div>
       <input type="text" className={styles.Input} value={props.displayValue} readOnly/>
    </div>
  )
}

export default Display
