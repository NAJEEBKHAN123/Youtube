import { useState } from "react"


function CounterApp() {
    const [counter, setcounter] = useState(0)

   const handleClick1 = () =>{
    setcounter(counter - 1)
   };
   const handleClick2 = () =>{
    setcounter(counter + 1)
   }

   if(counter === -1){
    return(
    alert("value isn't negative")
    )
   }
  return (
    <>
      <h1>Counter App</h1>
      <div>
         {counter}
      </div>
      <div>
        <button onClick={handleClick1}>Decrement</button>
        <button onClick={handleClick2}>Increment</button>
      </div>

    </>
  )
}


export default CounterApp
