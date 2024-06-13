import { useState } from 'react'
import { uploadFile } from '../../utils/firebase.config'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

export const useDragDrop = () => {
  const [task, setTask] = useState(null)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [imgUrl, setImgUrl] = useState(null)


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

    const files = e.dataTransfer.files[0]

    const task = uploadFile(files)
      .then(({downloadURL}) => {
        setImgUrl(downloadURL)
      })
      .catch((error) => {
        console.error('Error al subir el archivo: ', error)
      })
    setTask(task)
  }

  return {
    drag,
    imgUrl,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    setImgUrl,
    task
  }
}
