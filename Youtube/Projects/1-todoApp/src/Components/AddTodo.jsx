import { useRef } from "react"
import { FaRegAddressCard } from "react-icons/fa";

function AddTodo( {onNewItem} ) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleButtosClicked = () =>{
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
   onNewItem(todoName, dueDate);
   
  }
  return (
    <div className="container text-center">
  <div className="row kg-row  " onSubmit={handleButtosClicked}>
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" 
      ref={todoNameElement}
      />
    </div>
    <div className="col-4">
      <input type="date" 
      ref={dueDateElement}
     />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success kg-btn" onClick={handleButtosClicked} >
    <FaRegAddressCard />
    
      </button>
    </div>
  </div>
  </div>
  )
}

export default AddTodo
