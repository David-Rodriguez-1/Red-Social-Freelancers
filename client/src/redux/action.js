import { GET_USER, ADD_USER } from '../redux/actions_types';
import axios from 'axios'

const URL_BASE = 'http://localhost:3001'
const URL_BASE_POST = 'http://localhost:3001/post'

export const getUsers = () => {
  return async function (dispatch) {
    const { data } = await axios.get(URL_BASE)
    dispatch({type: GET_USER, payload: data})
  }
}

export const addUser = (user) => {
  return async function (dispatch) {
    const { data } = await axios.post(URL_BASE_POST, user)
    console.log(data);
    dispatch({type: ADD_USER, payload: data})
  }
}