import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : 'Divyang',
    lastname : 'Chhantbar',
    age :'20'
  }
  return (
    <>
     <h1 className='bg-blue-600 text-black p-4 rounded-xl mb-4' >
      Tailwind Test
     </h1>
     <Card name = "Div"/>
     <Card name = "Divyang" myArr = {"DIVYANG"} btnText = "visit me" myobj = {myObj
  }/>
    </>
  )
}

export default App
