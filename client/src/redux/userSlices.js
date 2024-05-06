import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const URL_BASE = 'http://localhost:3001'

export const createUser = createAsyncThunk('/', async (data) => {
  const newUser = await axios.post(URL_BASE, data)
    return newUser.data
})

export const fetchUsers = createAsyncThunk('/home', async () => {
  const users = await axios.get(URL_BASE)
  return users.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    createUser(state, action) {
      state.data.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})





export default usersSlice.reducer
