import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function myApp(){
  return (
    <div>
      <h1>now craete custem app !</h1>
    </div>
  )
}

// const reactElement =  {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Children:'Click me to visit google'
// }

let AnotherUser = "Chai aur pani"

const reactElement = React.createElement(
  
  'a',
  {href: 'https://google.com',target:'_blank'},
   'click me to visit my google',
   AnotherUser
   
)

const anotherElement = 
(
  <a href="https://google.com" target='_blank'>visit google anther</a>
)

createRoot(document.getElementById('root')).
render(
    
 reactElement
)

