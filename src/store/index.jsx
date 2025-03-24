import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import tweetReducer from './tweet'
import userReducer from './user'

const store = configureStore({
  reducer: {
    auth: authReducer,
    tweet: tweetReducer,
    user: userReducer
  }
})

export default store
