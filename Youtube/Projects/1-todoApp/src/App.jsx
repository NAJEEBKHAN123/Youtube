import AddTodo from "./Components/AddTodo"
import AppName from "./Components/AppName"
import TodoItems from "./Components/TodoItems";
import "./App.css"
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";


function App() {
  const initalTodoItems = [];
const [todoItems, settodoItems] = useState(initalTodoItems);

const handleNewItem = (itemName, itemDueDate) =>{
console.log(`new Item added:${itemName} Date: ${itemDueDate}`);
const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate},
 ];
 settodoItems(newTodoItems)
} 
const handleDeleteItems = (todoItemName) =>{
  const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
  settodoItems(newTodoItems);
  console.log(`item was delete ${todoItemName}`)
}

  return (
   <center className="todo-container">
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
     {todoItems.length === 0 && <WelcomeMessage/>}
    <TodoItems TodoItems={todoItems} onDeleteClick={handleDeleteItems}/>
   </center>
  )
}

export default App
