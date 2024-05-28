import style from './Post.module.css'
import { useSelector } from 'react-redux'

export const Post = () => {

  const dataPost = [{
    media:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.itmastersmag.com%2Fnoticias-analisis%2F10-lenguajes-de-programacion-con-alta-demanda-para-2021%2F&psig=AOvVaw2D5sT0y0Iqn5MHNQDWuCNR&ust=1716659020044000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjc_KnrpoYDFQAAAAAdAAAAABAE',
    content: 'Este sería el contenido del post de un usuario'
  }]
  console.log(dataPost);

  const posts = useSelector(state => state.posts)
  console.log(posts);
  const user = useSelector((state) => state.users.user)
  console.log(user);

  return (
    <div className={style.post_container}>
      <div className={style.head_post}></div>
      <div className={style.content_text}></div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {user.name} {user.last_name}
          </h2>
          <p>{posts.content}</p>
        </div>
        <figure>
          <img
            src={posts.media}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  )
}