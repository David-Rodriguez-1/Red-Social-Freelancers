import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { LoginSignUp } from './views/LogIn_SignUp/LogIn_SignUp'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginSignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
