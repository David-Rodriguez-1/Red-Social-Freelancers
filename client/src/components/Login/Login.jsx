import { useForm } from 'react-hook-form'
import style from './Login.module.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Login = ({ setOptions }) => {
  const {
    register,
    handleSubmit
    // watch,
    // formState,
  } = useForm()

  // eslint-disable-next-line no-useless-escape
  const reg_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const onSubmit = (data) => console.log(data)

  return (
    <>
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
                fontStyle: 'italic',
                textDecoration: 'none',
                margin: 0,
                padding: 0
              }}>
              Forgot password
            </Link>
            <button className={style.button_submit} type="Submit">
              Login
            </button>
          </form>
          <button
            className={style.create_account}
            onClick={() => setOptions('signup')}>
            {`Don't have an account? Sign Up`}
          </button>
        </div>
      </div>
    </>
  )
}
