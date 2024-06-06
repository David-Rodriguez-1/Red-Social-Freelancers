import { useState } from 'react'
import style from './ModalPost.module.css'
import { GoFileMedia } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { createPostUserAsync } from '../../redux/postsSlices'
import { useDragDrop } from '../../hooks/useDragDrop'
import { uploadFile } from '../../../utils/firebase.config'

export const ModalPost = ({ setIsOpen }) => {
  const [dataPost, setDataPost] = useState({
    content: '',
    media: {}
  })

  const user = useSelector((state) => state.users.user)
  // const user = useSelector((state) => state.user)

  const {
    drag,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    imgUrl,
    setImgUrl
  } = useDragDrop()

  const dispatch = useDispatch()

  const handleMedia = (e) => {
    const file = e.target.files[0]
    uploadFile(file).then(({ downloadURL }) => {
      setImgUrl(downloadURL)
      setDataPost({
        ...dataPost,
        media: downloadURL
      })
    })
  }

  const handleContent = (e) => {
    setDataPost({
      ...dataPost,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const postData = {
      content: dataPost.content,
      media: imgUrl
    }
    const id_user = user._id
    const data = { id_user, ...postData }
    dispatch(createPostUserAsync(data))
    setIsOpen(false)
  }

  return (
    <div className={style.containerModal}>
      <form className={style.formPost} onSubmit={onSubmit} action="submit">
        <div>
          <textarea
            placeholder="Sobre que quieres hablar?"
            className={drag === 1 ? style.content_Drag : style.content}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onChange={handleContent}
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
          <input
            id="media"
            className={style.input_media}
            onChange={handleMedia}
            type="file"
          />
          <label className={style.button_media} htmlFor="media">
            <GoFileMedia className="w-9 size-7" />
          </label>
          <button
            type="submit"
            className={style.button_post}>
            Publicar
          </button>
        </div>
        <button type="submit" className={style.btn_close_modal}>
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
