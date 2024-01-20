import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setColor] = useState("black")

  return (
   <div className="w-full h-screen duration-200 "
   style = {{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-600 px-4 py-2 rounded-2xl "><button  
      onClick = {() => setColor("Red")}
      className="outline-none px-4 py-1 rounded-full bg-slate-200 text-black shadow-lg">Red</button>
      <button  
      onClick = {() => setColor("Blue")}
      className="outline-none px-4 py-1 rounded-full bg-slate-200 text-black shadow-lg">Blue</button>
      <button  
      onClick = {() => setColor("Yellow")}
      className="outline-none px-4 py-1 rounded-full bg-slate-200 text-black shadow-lg">Yellow</button>
      <button  
      onClick = {() => setColor("Purple")}
      className="outline-none px-4 py-1 rounded-full bg-slate-200 text-black shadow-lg">Purple</button>
      <button  
      onClick = {() => setColor("Grey")}
      className="outline-none px-4 py-1 rounded-full bg-slate-200 text-black shadow-lg">Grey</button>
      </div>
    </div>
   </div>
  )
}

export default App
