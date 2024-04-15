import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { Login_SignUp } from './views/LogIn_SignUp/LogIn_SignUp'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login_SignUp />} />
      </Routes>
    </div>
  )
}

export default App
