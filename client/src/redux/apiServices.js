import axios from 'axios'

export const URL_BASE = 'http://localhost:3001'

export const readUsers = async () => {
  try {
    const { data } = await axios.get(`${URL_BASE}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addUser = async (user) => {
  try {
    const { data } = await axios.get(`${URL_BASE}`, user)
    return data
  } catch (error) {
    console.log(error)
  }
}