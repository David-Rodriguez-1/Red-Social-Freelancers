import { GET_USERS } from './actions_types'
import axios from 'axios'

const URL_BASE = 'http://localhost:3001'

export const getUsers = () => {
  return async function (dispatch) {
    const { data } = await axios.get(URL_BASE)
    dispatch({type: GET_USERS, payload: data})
  }
}
