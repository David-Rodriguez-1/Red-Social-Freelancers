import { Login, SignUp } from '../../components/index'
import style from './style.module.css'

export const Login_SignUp = () => {
  return (
    <div className={style.container}>
      <Login />
      <SignUp />
    </div>
  )
}
