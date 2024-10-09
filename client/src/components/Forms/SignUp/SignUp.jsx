import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import style from './SignUp.module.css'
import { createUserAsync } from '../../../redux/userSlices'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { reg_email } from '../Login/regexs'
import PropTypes from 'prop-types'

export const SignUp = ({ setOption }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const response = dispatch(createUserAsync(data))
      .then(res => {
      if (res.error) toast.error(res.error.message)
      else {
        toast.success("Usuario creado")
        navigate('/home')
      }
      })
    return response
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
            {...register('r_password', {
              required: true,
              validate: (value) =>
                value === watch('password') || 'Las contraseñas no coinciden'
            })}
          />

          <button className={style.button_submit_signup} type="submit">
            Register
          </button>
          {errors.r_password && (
            <p className="font-bold text-red-600">
              {errors.r_password.message}
            </p>
          )}
        </form>
        <button
          className={style.create_account}
          onClick={() => setOption('signin')}>
          {`Don't have an account? Sign In`}
        </button>
      </div>
      <Toaster />
    </div>
  )
}

SignUp.propTypes = {
  setOption: PropTypes.func.isRequired
}
