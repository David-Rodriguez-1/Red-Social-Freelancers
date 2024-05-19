import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const URL_BASE = 'http://localhost:3001/'

//Creacion de usuario
export const createUserAsync = createAsyncThunk('/', async (data) => {
  try {
    const newUser = await axios.post(`${URL_BASE}`, data)
    console.log(newUser);
    return newUser.data
  } catch (error) {
    console.error(error.response.data.message)
    throw error.response.data.message
  }
})

// Login
export const loginUserAsync = createAsyncThunk('/', async (data) => {
  try {
    const authUser = await axios
      .post(`${URL_BASE}login`, data)
      .then((res) => res.data)
    return authUser
  } catch (error) {
    return error.response.data
  }
})

// Obtener todos los usuarios
export const fetchUsers = createAsyncThunk('/home', async () => {
  const users = await axios.get(URL_BASE)
  return users.data
})

//Creación del post por usuario
export const createPostUserAsync = createAsyncThunk('/', async (data) => {
  try {
    const newPost = await axios.post(`${URL_BASE}`, data)
    return newPost.data
  } catch (error) {
    console.error(error.response.data.message)
    throw error.response.data.message
  }
})

// Obtener todos los posts
export const fetchPosts = createAsyncThunk('/post', async () => {
  const posts = await axios.get(`${URL_BASE}post`)
  return posts.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState: { data: [], user: null, state: null, error: null, posts: [] },
  reducers: {
    createUser(state, action) {
      state.data.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(createUserAsync.pending, (state) => {
      state.user = null
      state.error = null
      state.state = 'Cargando...'
    })
    builder.addCase(createUserAsync.rejected, (state, action) => {
      state.user = null
      state.error = action.error.message
      state.state = null
    })
    builder.addCase(createUserAsync.fulfilled, (state, action) => {
      state.user = action.payload
      state.state = 'Usuario creado'
      state.error = null
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
    })
  }
})

export default usersSlice.reducer
