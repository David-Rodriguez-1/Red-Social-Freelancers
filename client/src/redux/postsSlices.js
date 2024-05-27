import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const URL_BASE = 'http://localhost:3001/'

// Obtener todos los posts
export const fetchPosts = createAsyncThunk('/posts/fecth', async () => {
  const posts = await axios.get(`${URL_BASE}post`)
  return posts.data
})

const postsSlices = createSlice({
  name: 'posts',
  initialState: { data: [] },
  reducers: {
    createPosts(state, action) {
      state.data.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
    })
  }
})

export default postsSlices.reducer
