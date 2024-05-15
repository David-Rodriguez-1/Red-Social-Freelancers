import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import style from './Login.module.css'
import { Link } from 'react-router-dom'
import { reg_email } from './regexs'
import { loginUserAsync } from '../../../redux/userSlices'
import PropTypes from 'prop-types'

export const Login = ({ setOption }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit
    // watch,
    // formState,
  } = useForm()

  const onSubmit = (data) => {
    dispatch(loginUserAsync(data))
    navigate('/home')
  }

  return (
    <div className={style.container_login}>
      <div className={style.login}>
        <h4>Login</h4>
        <i className={style.logo}></i>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email"
            defaultValue=""
            {...register('email', { required: true }, { pattern: reg_email })}
          />

          <input
            placeholder="Password"
            type="password"
            {...register('password', { required: true })}
          />

          <Link
            style={{
              color: 'rgb(208, 233, 255)',
              fontSize: '14px',
              fontStyle: 'italic',
              margin: 0,
              padding: 0
            }}>
            Forgot password
          </Link>
          <button className={style.button_submit} type="submit">
            Login
          </button>
        </form>
        <button
          className={style.create_account}
          onClick={() => setOption('signup')}>
          {`Don't have an account? Sign Up`}
        </button>
      </div>
    </div>
  )
}

Login.propTypes = {
  setOption: PropTypes.func.isRequired
}
