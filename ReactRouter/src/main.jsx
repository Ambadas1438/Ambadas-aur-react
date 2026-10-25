import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { Children } from 'react'
import Home from './components/Home/Home.jsx'

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
  

const router = createBrowserRouter([
  {
  path:"/",
  elemect:<Layout/>,
  children:[
    {path:"/",
    element:<Home/>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
