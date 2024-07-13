import { useContext, useState } from "react"
import { UserContext } from "../App"


function ToggleTheme() {
    const [them, setthem] = useState('light')
    const theme = useContext(UserContext);
    console.log(theme)
    const ToggleThem = () =>{
        setthem(them === "light" ? "dark" : "light");
      }
  return (
    <div className="main-container">
        <div className="container">
      <h1>Login Form</h1>
      <input type="text"  placeholder="Enter Your Name"/>
      <input type="password" placeholder="Enter Your Password" /><br />
      <button onClick={ToggleThem}>Submit</button>
      </div>
    </div>
  )
}

export default ToggleTheme
