import { useEffect, useState } from 'react'
import style from './ModalPost.module.css'
import { GoFileMedia } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { createPostUserAsync } from '../../redux/postsSlices'
import { uploadFile } from '../../../utils/firebase.config'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

export const ModalPost = ({ setIsOpen }) => {
  const [dataPost, setDataPost] = useState({
    content: '',
    media: {}
  })

  const user = useSelector((state) => state.users.user)

  const dispatch = useDispatch()

  const [task, setTask] = useState(null)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    if (task) {
      let onProgress = () => {}
      let onError = () => {}
      let onComplete = () => {
        console.log('On Complete')
        task.then((res) => console.log(res.task._uploadUrl))
      }
      // task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

  const handleDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)

    // Data transfer

    const files = e.dataTransfer.files[0]

    const task = uploadFile(files)
      .then((downloadURL) => {
        setImgUrl(downloadURL)
      })
      .catch((error) => {
        console.error('Error uploading file: ', error)
      })
    setTask(task)
  }

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
    <div className={style.containerModal}>
      <form className={style.formPost} onSubmit={onSubmit} action="submit">
        <div>
          <textarea
            placeholder="Sobre que quieres hablar?"
            className={
              drag === DRAG_IMAGE_STATES.DRAG_OVER
                ? style.content_Drag
                : style.content
            }
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            name="content"
            id="content"></textarea>

          {imgUrl && (
            <section>
              <img
                className={style.img_post}
                src={imgUrl}
                alt="Imagen del post"
              />
            </section>
          )}
        </div>

        <hr style={{ width: '99.7%' }} />

        <div className={style.input_files_container}>
          <input id="media" className={style.input_media} type="file" />
          <label className={style.button_media} htmlFor="media">
            <GoFileMedia className="w-9 size-7" />
          </label>
          <button
            type='submit'
            className={style.button_post}
            onClick={() => setIsOpen(false)}
            >
            Publicar
          </button>
        </div>
        <button
          className={style.btn_close_modal}
          onClick={() => setIsOpen(false)}>
          <RxCross2 style={{ marginTop: '3px' }} />
        </button>
      </form>
    </div>
  )
}

//listado de props
ModalPost.propTypes = {
  setIsOpen: Function
}
