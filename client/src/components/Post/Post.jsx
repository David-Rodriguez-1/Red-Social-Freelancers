import style from './Post.module.css'
import { useSelector } from 'react-redux'

export const Post = () => {

  const posts = useSelector(state => state.posts.posts)
  const user = useSelector((state) => state.users.data)

  return (
    <div className={style.post_container}>
      {posts?.map((post) => (
        <>
          <div className="card w-auto bg-base-100 shadow-xl m-auto flex-col">
            <div className="card-body">
              <h2 className="card-title">
                {user.name} {user.last_name}
              </h2>
              <p>{post.content}</p>
            </div>
            <figure className='m-0'>
              <img style={{width: '100%'}} src={post.media} alt={post.media} />
            </figure>
          </div>
        </>
      ))}
    </div>
  )
}