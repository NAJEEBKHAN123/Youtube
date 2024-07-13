import { useContext } from "react"
import {UserContext} from '../App'



function Component2( ) {
  const user = useContext(UserContext);
   
  return (
    <div>
     <h1>my name is {user}</h1>
    </div>
  )
}

export default Component2
