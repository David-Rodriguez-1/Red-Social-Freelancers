// import { useState } from "react"
// import { Post } from '../Post/Post'
import { PostCreate } from '../PostCreate/PostCreate'
// import { useSelector } from 'react-redux'
import style from './Feets.module.css'

export const Feets = () => {
  // const users = useSelector((state) => state.users)
  // const posts = useSelector((state) => state.posts)

  return (
    <main className={style.main_container}>
      <div className={style.container}>
        <PostCreate />
        {/* <Post /> */}
      </div>
    </main>
  )
}
