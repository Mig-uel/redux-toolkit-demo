import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter.redux'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
