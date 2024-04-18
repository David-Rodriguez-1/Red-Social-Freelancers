import { useState } from 'react'
import { Login, SignUp } from '../../components/index'
import style from './style.module.css'
import Side_photo from '../../assets/fondo_AI.jpg'

export const Login_SignUp = () => {

  const [option, setSignin] = useState('signin')

  return (
    <div className={style.container}>
      <img className={style.side_photo} src={Side_photo} alt="" />
      {option === 'signin' ? <Login /> : <SignUp />}

      {option === 'signin' ? (
        <button
          onClick={() => setSignin('signup')}
          className={style.create_account_2}>
          Create account
        </button>
      ) : (
        <button
          onClick={() => setSignin('signin')}
          className={style.create_account_2}>
          Login
        </button>
      )}
    </div>
  )
}
