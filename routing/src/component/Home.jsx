import { Link } from "react-router-dom"
// import About from "./About"
// import Contact from "./Contact";

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="link">
      <Link  to='./About'>About</Link>
      <Link to='./Contact'>Contact</Link>
      <Link to='./Blog'>Blog</Link>
      <Link to='./NewBlog'>NewBlog</Link>

      </div>
    </div>
  )
}

export default Home;
