import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const URL_BASE = 'http://localhost:3001/'

//Creacion de usuario
export const createUserAsync = createAsyncThunk('user/create', async (data) => {
  console.log(data)
  try {
    const newUser = await axios.post(`${URL_BASE}`, data)
    console.log(newUser);
    return newUser.data
  } catch (error) {
    throw error.response.data.message 
  }
})

// Login
export const loginUserAsync = createAsyncThunk('login/user', async (data) => {
  try {
    const authUser = await axios
      .post(`${URL_BASE}login`, data)
      .then((res) => res.data)
    return authUser
  } catch (error) {
    return error.response.data
  }
})

//logout
export const logoutUserAsync = createAsyncThunk('logout/user', async () => {
    localStorage.removeItem('auth')
})

// Obtener todos los usuarios
export const fetchUsers = createAsyncThunk('user/fetch', async () => {
  const users = await axios.get(URL_BASE)
  return users.data
})

const {user} = JSON.parse(localStorage.getItem('auth')) || {}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    user: user,
    state: null,
    error: null
  },
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
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      localStorage.setItem('auth', JSON.stringify({ user: action.payload }))
      const { user } = JSON.parse(localStorage.getItem('auth'))
      state.user = user
    })
    builder.addCase(logoutUserAsync.fulfilled, (state) => {
      state.user = null
    })
  }
})


export default usersSlice.reducer
