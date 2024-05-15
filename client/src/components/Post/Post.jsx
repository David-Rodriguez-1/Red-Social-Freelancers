import style from './Post.module.css'
import { useSelector } from 'react-redux'

export const Post = () => {

  const posts = useSelector(state => state.users.posts)
  const user = useSelector((state) => state.users.data)
  console.log(posts);

  return (
    <div className={style.post_container}>
      <div className={style.head_post}></div>
      <div className={style.content_text}></div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {user.name} {user.last_name}
          </h2>
          <p>{posts.description}</p>
        </div>
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  )
}