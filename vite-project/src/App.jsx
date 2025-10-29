
import { useState } from 'react'
import './App.css'

function App() {
  
 const [a, setA] = useState(10)
//  const changeuser=() =>{
//   console.log("chal gaya");
//   setA(60)
  

//  }
  

  return (
    
   <div>
    <h1>Hello {a}</h1>
    <button onClick={()=>setA(a+10)}>Increaser</button>
    <button onClick={()=>setA(a-10)}>Decrease</button>
   </div>   
   
  )
}

export default App
