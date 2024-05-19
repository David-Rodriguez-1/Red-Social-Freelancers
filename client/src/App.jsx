import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { LoginSignUp } from './views/LogIn_SignUp/LogIn_SignUp'
import { PostCreate } from './components/PostCreate/PostCreate'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/component" element={<PostCreate />} />
      </Routes>
    </div>
  )
}

export default App
