import style from './Post.module.css'

export const Post = (users) => {
  const user = users.users[0][0]
  const aduser = users
  console.log("user: ", aduser.users);
  console.log(user);
  return (
    <div className={style.post_container}>
      <div className={style.head_post}></div>
      <div className={style.content_text}></div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{user.name} { user.last_name }</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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