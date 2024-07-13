

function MessegeError( {items} ) {
   
  return (
    <div>
      {items.length === 0 ? <h3>I am still hungry</h3> : null}
    </div>
  )
}

export default MessegeError
