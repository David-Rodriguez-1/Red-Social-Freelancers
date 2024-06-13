import { Post } from '../Post/Post'
import { PostCreate } from '../PostCreate/PostCreate'
import style from './Feets.module.css'

export const Feets = () => {

  return (
    <main className={style.main_container}>
      <div className={style.container}>
        <PostCreate />
        <Post />
      </div>
    </main>
  )
}
