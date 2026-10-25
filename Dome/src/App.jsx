import { useState } from 'react'

import './App.css'
import Home from './component/Home'
import About from './component/About'
import { createContext } from 'react'
import { useContext } from 'react'
import UserContext from 'context/Context'

function App() {
  return (
   
     <UserContext.Provider value="Ambadas">
     <Home/>
     <About/>
    </UserContext.Provider>
  )
}

export default App;
