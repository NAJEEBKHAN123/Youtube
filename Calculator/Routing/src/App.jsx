
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { createBrowserRouter } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }, 
    {}.
  ])

  return (
    <>
     
     <Navbar/>
    </>
  )
}

export default App
