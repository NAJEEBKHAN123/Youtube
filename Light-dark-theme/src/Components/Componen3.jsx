import { useContext } from "react"
import { UserContext } from "../App"


function Componen3() {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>this is Component3 value {user}</h1>
    </div>
  )
}

export default Componen3
