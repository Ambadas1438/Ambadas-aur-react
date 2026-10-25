import { useState,} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [counter,valueCounter] = useState(15)

  // let counter  = 15

  const addValue = () =>{
   console.log("clicked",counter)
    if(counter >= 20){
      valueCounter(counter)
    }
    else{
      valueCounter(counter + 1)
    }
  }
  const removeValue = () =>{
    if(counter <= 0){
      valueCounter(counter)
    }
    else{
      valueCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>add value</button>  
      <br/> 
      <button onClick={removeValue}>remove value</button>    
    </>
  )
}

export default App
