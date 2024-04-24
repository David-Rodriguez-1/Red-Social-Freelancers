import { GET_USER } from '../redux/actions_types';
import axios from 'axios'

export const URL_BASE = 'http://localhost:3001'

export const getUsers = () => {
  return async function (dispatch) {
    const { data } = await axios.get(URL_BASE)
    console.log(data);
    dispatch({type: GET_USER, payload: data})
  }
}

export const addUser = (user) => {
  console.log(user);
  return async function () {
    try {
      const { data } = await axios.post(URL_BASE, user)
      return data
    } catch (error) {
      console.error(error)
    }
  }
}