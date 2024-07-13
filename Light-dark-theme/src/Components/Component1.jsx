import { useContext } from "react"
import {UserContext} from '../App'

function Component1() {
  const user = useContext(UserContext)

  return (
    <div>
      <h1>this is component1 and so on{user}</h1>
    </div>
  )
}

export default Component1

