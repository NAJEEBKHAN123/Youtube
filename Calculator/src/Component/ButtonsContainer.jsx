import styles from './ButtonsContainer.module.css'

function ButtonsContainer( {onButtonClick} ) {

  let buttonNames = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    "+",
    "=",
    ];
  
  return (
    <div className={styles.ButtonStyle}>
      {buttonNames.map((buttons) =>(
      <button key={buttons} onClick={() => onButtonClick(buttons)} >{buttons}</button>
      ))}
     


    </div>
  )
}

export default ButtonsContainer
