import ButtonsContainer from "./Component/ButtonsContainer"
import Display from "./Component/Display"
import styles from './App.module.css'
import { useState } from "react"

function App() {

  const [calValue, setcalValue] = useState('') 

  const onButtonClick = (buttonText) =>{
    console.log(buttonText)
    
    if(buttonText === 'C'){
      setcalValue('');
    }
     else if(buttonText === '='){
      let result = eval(calValue);
      setcalValue(result);

    }
    else{
      const  newDisplayValue = calValue + buttonText;
      setcalValue(newDisplayValue);
    }
    
  };
  return (
    <div className={styles.mainContainer}>
      <Display displayValue={calValue}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
