import { useState } from 'react'
import { Login, SignUp } from '../../components/index'
import style from './style.module.css'

export const LoginSignUp = () => {
  const [option, setOption] = useState('signin')
  return (
    <div className={style.container}>
      {option === 'signin' ? (
        <Login setOption={setOption} />
      ) : (
        <SignUp setOption={setOption} />
      )}
    </div>
  )
}
