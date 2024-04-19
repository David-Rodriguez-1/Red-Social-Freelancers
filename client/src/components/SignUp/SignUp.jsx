import { useForm } from 'react-hook-form'
import style from './SignUp.module.css'
import axios from 'axios'
import { URL_BASE } from '../../redux/action'
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const SignUp = ({ setOptions }) => {

  const {
    register,
    handleSubmit
    // watch,
    // formState,
  } = useForm()

  // eslint-disable-next-line no-useless-escape
  const reg_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const onSubmit = (data) => {
    axios.post(URL_BASE, data)
  }

  return (
    <>
      <div className={style.container_sign_up}>
        <div className={style.login}>
          <h4>Sign Up</h4>
          <i className={style.logo}>Logo</i>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="First Name"
              type="text"
              {...register('name', { required: true })}
            />

            <input
              placeholder="Last Name"
              type="text"
              {...register('last_name', { required: true })}
            />

            <input
              placeholder="Username"
              type="text"
              {...register('username', { required: true })}
            />

            <input
              placeholder="Email"
              type="email"
              {...register('email', { pattern: reg_email }, { required: true })}
            />

            <input
              placeholder="Contraseña"
              type="password"
              {...register('password', { required: true })}
            />

            <button className={style.button_submit_signup} type="Submit">
              Enviar
            </button>
          </form>
          <button
            className={style.create_account}
            onClick={() => setOptions('signin')}>
            {`Don't have an account? Sign In`}
          </button>
        </div>
      </div>
    </>
  )
}
