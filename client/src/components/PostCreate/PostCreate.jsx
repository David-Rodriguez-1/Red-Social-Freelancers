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
        <form
          className={style.form_post}
          action=""
          onSubmit={handleSubmit(onSubmit)}>
          <div className={style.input_img}>
            {/* colocar ruta del perfil */}
            <div className={style.img_perfil}>
              <Link to={'ruta del perfil'}>
                <img
                  className={style.img}
                  src="https://media.licdn.com/dms/image/D4D35AQFAh797EfmhyQ/profile-framedphoto-shrink_400_400/0/1703182248300?e=1716696000&v=beta&t=f0dmHinlq8YipwqsavgjTJXXcHtTmKlOTnyHfo2XDE0"
                  alt="Ver el perfil de ..."
                />
              </Link>
            </div>
            <input
              className={style.description}
              type="text"
              placeholder="Crear publicación"
              {...register('content')}
            />
          </div>
          <div className={style.input_files_container}>
            {/* <button className={style.button_media}> */}
              <input id='media' className={style.input_media} type="file" />
            {/* </button> */}
            <button className={style.button_post}>Publicar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
