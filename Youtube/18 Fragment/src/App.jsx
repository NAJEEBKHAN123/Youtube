
import { useState } from "react";
import FoodItem from "./Component/FoodItem";
import MessegeError from "./Component/MessegeError";

function App() {
  let foodItem = ['Dal', 'Rice', 'milk', 'meat', 'salad', 'egg', 'Ghee']; 
 
 const [foodItems, setfoodItems] = useState([])

 

  return (
    
    <>
    
     <h1>Healthy Food</h1>
     {/* Ternory operator */}
     <MessegeError items={foodItem}/>
     {/* conditonal */}
    {/* {foodItem.length === 0 && <h3>I am still hungry</h3>} */}
    <FoodItem items={foodItem}/>
    </>
  )
}

export default App
