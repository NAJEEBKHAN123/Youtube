import TodoItem from "./TodoItem"
import styles from './TodoItems.module.css'

const TodoItems = ({TodoItems,  onDeleteClick}) => {
  return (
    <div className={styles.itemsContainer}>
     {TodoItems.map((item)=>(
      <TodoItem todoName={item.name} todoDate={item.dueDate} key={item} onDeleteClick={onDeleteClick}/>
     ))}
    </div>
  )
}

export default TodoItems
