import { createSlice } from '@reduxjs/toolkit'
import { readUsers, addUser } from './apiServices'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: []
  },
  reducers: {
    setUsers(state, action) {
      state.data = action.payload
    }
  }
})

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await readUsers()
    dispatch(usersSlice.actions.setUsers(users))
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

export const createUser = (user) => async () => {
  try {
    const newUser = await addUser(user)
    return newUser
  } catch (error) {
    console.error('Error adding user:', error)
  }
}

export default usersSlice
