import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './Component/ButtonsContainer'
import Display from './Component/Display'

function App() {

  const [calValue, setcalValue] = useState('');

  const onButtonClick = (buttonText) => {
    if(buttonText === "C"){
      setcalValue('');
    }
    else if(buttonText === "="){
      let result = eval(calValue)
      setcalValue(result)
    }
    else{
      const newDesplyValue = calValue + buttonText;
      setcalValue(newDesplyValue);
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
