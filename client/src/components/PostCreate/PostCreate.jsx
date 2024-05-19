import { useForm } from 'react-hook-form'
import style from './PostCreate.module.css'
import { Link } from 'react-router-dom'

export const PostCreate = () => {
  const {
    register,
    handleSubmit
    // watch,
    // formState,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={style.main_container}>
      <div className={style.container_post_form}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* colocar ruta del perfil */}
            <Link to={'ruta del perfil'}>
              <div className="w-fit relative">
                <img
                  className="rounded-full relative w-fit"
                  src="https://media.licdn.com/dms/image/D4D35AQFAh797EfmhyQ/profile-framedphoto-shrink_400_400/0/1703182248300?e=1716696000&v=beta&t=f0dmHinlq8YipwqsavgjTJXXcHtTmKlOTnyHfo2XDE0"
                  alt="Ver el perfil de ..."
                />
              </div>
            </Link>
            <input
              className={style.description}
              type="text"
              name=""
              id=""
              {...register('content')}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
