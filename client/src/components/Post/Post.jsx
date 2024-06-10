import style from './Post.module.css'
import { useSelector } from 'react-redux'

export const Post = () => {
  const posts = useSelector((state) => state.posts.posts)

  const result = posts?.map((post) => {
    return (
      <div key={post.id} className={style.post_container}>
        <div>
          <div>
            <h2>
              {post.id_user.name} {post.id_user.last_name}
            </h2>
            <p>{post.content}</p>
          </div>
          <figure className="m-0">
            <img style={{ width: '100%' }} src={post.media} alt={post.media} />
          </figure>
        </div>
        <hr />
        <div className={style.btn_actions}>
          <button>Me gusta</button>
          <button>Comentar</button>
          <button>Compartir</button>
          <button>Enviar</button>
        </div>
      </div>
    )
  })

  return <div>{result}</div>
}
