import Component2 from "./Components/Component2"
import Component1 from './Components/Component1'
import { useState, createContext  } from "react";

export const UserContext = createContext();
function App() {
  const [userName, setuserName] = useState('najee');
  return (
    <div>
      <UserContext.Provider value={userName}>
      <h1>hello</h1>
      <Component2 />
      <Component1/>
      </UserContext.Provider>
    </div>
  )
}

export default App
