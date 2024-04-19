import { useState } from 'react'
import { Login, SignUp } from '../../components/index'
import style from './style.module.css'
import Side_photo from '../../assets/fondo_AI.jpg'

export const Login_SignUp = () => {

  const [option, setOptions] = useState('signin')
console.log(option);
  return (
    <div className={style.container}>
      <img className={style.side_photo} src={Side_photo} alt="" />
      {option === 'signin' ? <Login setOptions={setOptions} /> : <SignUp setOptions={setOptions} />}

    </div>
  )
}

{/* {option === 'signin' ? (
  <button
    onClick={() => setOptions('signup')}
    className={style.create_account_2}>
    Create account
  </button>
) : (
  <button
    onClick={() => setOptions('signin')}
    className={style.create_account_2}>
    Login
  </button>
)} */}