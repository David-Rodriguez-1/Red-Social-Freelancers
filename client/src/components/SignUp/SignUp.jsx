import { useForm } from 'react-hook-form'
import style from './SignUp.module.css'
import { createUser } from '../../redux/userSlices'
// import toast, { Toaster } from 'react-hot-toast'
// import axios from 'axios'
// import { addUser } from '../../redux/action'
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
    createUser(data)
  }

  return (
    <>
      <div className={style.container_sign_up}>
        <div className={style.login}>
          <h4>Sign Up</h4>
          <i className={style.logo}></i>
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
              {...register('email', { required: true }, { pattern: reg_email })}
            />

            <input
              placeholder="Contraseña"
              type="password"
              {...register('password', { required: true })}
            />

            <button className={style.button_submit_signup} type="submit">
              Register
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
