import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Blog from "./component/Blog"
import NewBlog from "./component/NewBlog"


function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: 'About',
    element: <About/>
  },
  {
    path: 'Blog',
    element: <Blog/>
  },
  {
    path: 'Contact',
    element: <Contact/>
  },
  {
    path: 'NewBlog',
    element: <NewBlog/>
  },

])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
