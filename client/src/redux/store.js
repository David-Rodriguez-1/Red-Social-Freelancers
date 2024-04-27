import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlices'

const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

export default store

// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './reducer'
// import thunk from 'redux-thunk'

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose

// // Recupera el estado inicial almacenado en localStorage
// const storedState = localStorage.getItem('myAppReduxState')
// const initialState = storedState ? JSON.parse(storedState) : {}

// const store = createStore(
//   rootReducer,
//   initialState, // Usa el estado inicial almacenado en localStorage si está disponible
//   composeEnhancers(applyMiddleware(thunk))
// )

// export default store
