import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import style from './PostCreate.module.css'
import { GoFileMedia } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { createPostUserAsync } from '../../redux/postsSlices'
import { useState } from 'react'

export const PostCreate = () => {
  const {
    register,
    handleSubmit
    // watch,
    // formState,
  } = useForm()

  const dispatch = useDispatch()

  const user = useSelector((state) => state.users.user)

  const [dataPost, setDataPost] = useState({
    content: '',
    media: 'image.com'
  })
  
  const onSubmit = ({content, media}) => {
    console.log(media);
    setDataPost({
      content,
      media: media.name
    })
    const id_user = user._id
    console.log(dataPost);
    dispatch(createPostUserAsync({ id_user, dataPost }))
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
            <input id="media" className={style.input_media} type="file" {...register('media')} />
            <label className={style.button_media} htmlFor="media">
              <GoFileMedia className="w-9 size-7" />
              Seleccionar archivo
            </label>
            {/* </button> */}
            <button className={style.button_post}>Publicar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
