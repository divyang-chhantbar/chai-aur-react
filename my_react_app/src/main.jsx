import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  } ,
  children : 'Click me to visit Google '
}

function anotherElement() {
  return (
    <div>
      <p>
        Chai Aur React
      </p>
    </div>
  )
}

anotherReactelement = (
  <a href="https//google.com"></a>
  )

  const element = "Divyang and Preet"

  const react_Element = React.createElement(
    'a',
    {
      href : 'https://google.com', target : '_blanck'
    },
    'click me to visit google',
    element
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <reactElement/> 
    <anotherElement/>
    <anotherReactelement/>
    react_Element
  </React.StrictMode>,
)