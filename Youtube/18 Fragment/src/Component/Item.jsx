import styles from "./Item.module.css";

function Item( {items} ) {
const handleButtonClick = (items) =>{
  console.log(`${items} button was clickd`)
}
const handleOnChange = (e) =>{
  console.log(e.target.value)
}
  return (
    <div>
      <input type="text" onChange={handleOnChange}/>
      {items.map((item) =>(
    <li className={styles["kg-Item"]} key={item}>{item}</li>
  ))}
  <button onClick={handleButtonClick}>buy</button>
    </div>
  )
}

export default Item
