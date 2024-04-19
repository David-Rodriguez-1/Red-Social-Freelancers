import { GET_USER } from '../redux/actions_types';
import axios from 'axios'

export const URL_BASE = 'http://localhost:3001'

export const getUsers = () => {
  return async function (dispatch) {
    const { data } = await axios.get(URL_BASE)
    dispatch({type: GET_USER, payload: data})
  }
}

// export const addUser = (user) => {
//   return async function (dispatch) {
//     const { data } = await axios.post(URL_BASE, user)
//     dispatch({type: ADD_USER, payload: data})
//   }
// }