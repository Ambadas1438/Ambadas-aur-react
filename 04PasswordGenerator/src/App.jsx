import { useCallback, useEffect, useState,useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(10)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
const[password,setPassword] = useState("")


//useRef hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
 let pass = ""
 let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 if(numberAllowed) str += "0123456789"
 if(charAllowed) str += "!@#$%^&*()_+{}[]~`"

 for(let i = 0;i <length;i++){
  let char = Math.floor(Math.random() * str.length)

  pass += str.charAt(char)

 }
 setPassword(pass)

},[length,numberAllowed,charAllowed,setPassword])

const copypasswordtoclipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99)
     window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator]) 


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounde-lg px-4 my-8 text-orange-500 bg-gray-800 text-orange-500'>
      <h6 className='text-white text-center text-small'>
        Password Generator
      </h6>
   
   
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-blue-300'>
      <input type="text"
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}
      />
     <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 rounded-lg text-white px-3 py-0.5 shrink'>copy</button>
      </div>   
      <div className='flex text-sm gap-x-2'>
       <div className='flex ite-center gap-x-1'>

        <input type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}/>
        <label htmlFor='range'>
          length:{length}
        </label>
       </div>
       <div className='flex ite-center gap-x-1'>
        <input type='checkbox'
        defaultChecked={numberAllowed}
        id="numberInput"
        
        onClick={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}/>
        <label htmlFor='numberInput'>
          number
        </label>

       </div>
        <div className='flex ite-center gap-x-1'>
        <input type='checkbox'
        defaultChecked={charAllowed}
        id="CharInput"
        
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}
        className='cursor-pointer'
        />
        <label htmlFor='CharInput'>
          Characters
        </label>
        
       </div>
      </div>
       </div>
    </>
  )
}

export default App
