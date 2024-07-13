import { useEffect, useState } from "react";
import './App.css'



function App() {
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(true)
   


  const apiKey = 'WdGOuSbRFmXzioLkiuaQJPWHydbtY0zZP5OtT2zZe7c';
  useEffect(()=>{
    fetch (`https://api.unsplash.com/photos/?client_id=${apiKey}`)
    .then(Response => Response.json())
    .then(data =>{
      setimages(data)
      setloading(false);
    })
    .catch(error => {
      console.log("Error Was Found!", error)
      setloading(false)
    })

  }, []);

  return (
    <div className='main-container'>
    <h1>Gallery Application</h1>
    {loading && <h1>Loading............</h1>}
    <div className="images-container">
      {images.map((img)=> {
          return (
            <div key={img.id} className="img-items">
            <img src={img.urls.small}/>
            </div>
          )
      })} 
   
    </div>
    </div>
  )
}

export default App
