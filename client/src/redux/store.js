import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlices'
import postsSlices from './postsSlices'

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsSlices
  }
})

export default store