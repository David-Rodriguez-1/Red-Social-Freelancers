import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import style from './PostCreate.module.css'
import { GoFileMedia } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { createPostUserAsync } from '../../redux/postsSlices'
import { uploadFile } from '../../../utils/firebase.config'
import avatar from '../../assets/hombre.png'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

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
    media: {}
  })
  const [task, setTask] = useState(null)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [imgUrl, setImgUrl] = useState(null)
  console.log(imgUrl);

  const handleDragEnter = () => {
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = () => {
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const files = event.dataTransfer.files[0]

    const task = uploadFile(files)
      .then((downloadURL) => {
        setImgUrl(downloadURL)
      })
      .catch((error) => {
        console.error('Error uploading file: ', error)
      })
    setTask(task)
  }

  useEffect(() => {
    if (task) {
      let onProgress = () => { }
      let onError = () => { }
      let onComplete = () => {
        console.log('On Complete')
        task.then((res) => console.log(res.task._uploadUrl))
      }
      // task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

  const onSubmit = ({ content, media }) => {
    console.log(media)
    setDataPost({
      content,
      media: media
    })
    const id_user = user._id
    console.log(dataPost)
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
                  src={avatar}
                  alt="Ver el perfil de ..."
                />
              </Link>
            </div>
            <input
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={
                drag === DRAG_IMAGE_STATES.DRAG_OVER
                  ? style.content_Drag
                  : style.content
              }
              type="text"
              placeholder="Crear publicación"
              {...register('content')}
              />
              {imgUrl && (
                <img
                  className={style.img_post}
                  src={imgUrl}
                  alt="Imagen del post"
                />
              )}
          </div>
          <div className={style.input_files_container}>
            {/* <button className={style.button_media}> */}
            <input
              id="media"
              className={style.input_media}
              type="file"
              {...register('media')}
            />
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
