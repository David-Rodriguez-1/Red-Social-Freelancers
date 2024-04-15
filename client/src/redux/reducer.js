import { GET_USERS } from './actions_types'

const initialState = {
  user: {},
  users: {},
  usersFilters: {},
  company: {},
  companies: {},
  postUser: {},
  postCompany: {}
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: [payload],
        usersFilters: [payload]
      }

    default:
      return state
  }
}

export default rootReducer
