import { useForm } from 'react-hook-form'
import style from './PostCreate.module.css'

export const PostCreate = () => {

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
    <div className={style.container_post_form}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="" id=""{...register('content')} />
      </form>
    </div>
  )
}
