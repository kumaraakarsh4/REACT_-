
import { useState } from 'react'
import './App.css'

function App() {
  
 const [a, setA] = useState('')
 const submithandler =()=>{
  console.log(a);
  setusername('')
  
 }
//  const changeuser=() =>{
//   console.log("chal gaya");
//   setA(60)
  

//  }
  

  return (
    
   <div>
  
     <form onSubmit={(e)=>{
      submithandler(e)
     }}>
      <input value={a} onChange={(e)=>{
        setusername(e.target.value)
      }} type="text" placeholder='Enter Your Text' />
      <button>submit</button>
     </form>
   </div>   
   
  )
}

export default App
