/* Learned about hooks , hooks react to the changes within our application and provide ways to manages the state
in a nutshell it updates the UI chnages we have done in the components
and in the let[counter,setCounter] setCounter is a method and will use to update wherever the value we have refrenced  */
import { useState } from 'react' // hooks component comes from here 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  const addValue =  () =>  {
    if (counter<20) {
      setCounter(counter+1);
    }
    
  }

  const decreaseValue = () => {
   if (counter>0) {
    setCounter(counter-1);
   }
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter : {counter} </h2>

    <button 
    onClick={addValue}>
      Add Value</button>
    <br />
    <button
    onClick={decreaseValue}
    >Decrease Value</button>
    </>
  )
}

export default App
