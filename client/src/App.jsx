import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { LoginSignUp } from './views/LogIn_SignUp/LogIn_SignUp'
import { Post } from './components/Post/Post'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/component" element={<Post />} />
      </Routes>
    </div>
  )
}

export default App
