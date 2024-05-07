import { useForm } from 'react-hook-form'
import style from './SignUp.module.css'
import { createUser } from '../../redux/userSlices'
import { useDispatch } from 'react-redux'
import { reg_email } from '../Login/regexs'
import PropTypes from 'prop-types'

export const SignUp = ({ setOption }) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors }
  } = useForm()

  console.log(errors)

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(createUser(data))
  }

  return (
    <div className={style.container_sign_up}>
      <div className={style.login}>
        <h4>Sign Up</h4>
        <i className={style.logo}></i>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Nombre"
            type="text"
            {...register('name', { required: true })}
          />

          <input
            placeholder="Apellidos"
            type="text"
            {...register('last_name', { required: true })}
          />

          <input
            placeholder="Usuario"
            type="text"
            {...register('username', { required: true })}
          />

          <input
            placeholder="Email"
            type="email"
            {...register('email', { required: true }, { pattern: reg_email })}
          />

          <input
            placeholder="Contraseña"
            type="password"
            {...register('password', { required: true })}
          />

          <input
            placeholder="Repetir contraseña"
            type="password"
            {...register('r-password', {
              required: 'Las contraseñas no coinciden'
            })}
          />

          <button className={style.button_submit_signup} type="submit">
            Register
          </button>
        </form>

        {/* {watch('password') !== watch('r-password') ? (
          <p className={style.error_password}>Las contraseñas no coinciden</p>
        ) : null} */}

        <button
          className={style.create_account}
          onClick={() => setOption('signin')}>
          {`Don't have an account? Sign In`}
        </button>
      </div>
    </div>
  )
}

SignUp.propTypes = {
  setOption: PropTypes.func.isRequired
}
