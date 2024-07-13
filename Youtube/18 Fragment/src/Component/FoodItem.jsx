import Item from "./Item"


function FoodItem( {items}) {
    
  return (
    <div>
        <ul className="list-group">
       <Item items={items}/>
     </ul>
     
    </div>
  )
}

export default FoodItem
