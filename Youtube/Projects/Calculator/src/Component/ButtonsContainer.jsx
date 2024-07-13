import styles from "./ButtonsContainer.module.css";

function ButtonsContainer( {onButtonClick} ) {
  const buttonsName = [
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
    "0",
    ".",
    "+",
    "=",
    "C",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttons) => (
        <button className={styles.button} key={buttons} onClick={() => onButtonClick(buttons)}>
          {buttons}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
