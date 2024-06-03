import { useSelector } from 'react-redux'
import style from './PostCreate.module.css'
import { Link } from 'react-router-dom'
import avatar from '../../assets/hombre.png'
import { useState } from 'react'
import { ModalPost } from '../index'

export const PostCreate = () => {

  const [isOpen, setIsOpen] = useState(false)

  const user = useSelector((state) => state.users.user)
  console.log(user);

  return (
    <div className={style.main_container}>
      {isOpen ? (
        <ModalPost isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <div className={style.container_post_form}>
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
              type="text"
              onClick={() => setIsOpen(true)}
              placeholder="Crear publicación"
            />
          </div>
        </div>
      )}
    </div>
  )
}
