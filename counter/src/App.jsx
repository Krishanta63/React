import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(11)

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    } else {
      setCounter(20);
  }
}

  const removeValue = () => {
    if (counter > 0) {
      counter = counter -1;
      setCounter(counter);
    } else {
      setCounter(0);
    }
    
  }

  return (
    <>
     <h1>Krishanta Shrestha</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
