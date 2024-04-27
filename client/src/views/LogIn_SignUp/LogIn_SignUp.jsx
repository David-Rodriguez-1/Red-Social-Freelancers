import { useState } from 'react'
import { Login, SignUp } from '../../components/index'
import style from './style.module.css'

export const Login_SignUp = () => {
  const [option, setOptions] = useState('signin')
  console.log(option)
  return (
    <div className={style.container}>
      {option === 'signin' ? (
        <Login setOptions={setOptions} />
      ) : (
        <SignUp setOptions={setOptions} />
      )}
    </div>
  )
}
