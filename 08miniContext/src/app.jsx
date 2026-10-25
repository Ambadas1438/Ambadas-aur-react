
import './app.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export function App() {

  return (
    <UserContextProvider>
     <hi>React with chai</hi>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}
export default App