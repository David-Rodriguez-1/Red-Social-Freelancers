// import { useState } from "react"
import {Post} from "../Post/Post"
import { useEffect } from "react";
import { useSelector} from "react-redux";
import style from './Feets.module.css'

export const Feets = () => {

  const users = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    
  }, []);

  return (
    <main className={style.main_container}>
        <div className={style.container}>
          {users?.map((user) => (
            <Post key={user.id} users={users} />
          ))}
        </div>
      </main>
  )
}
