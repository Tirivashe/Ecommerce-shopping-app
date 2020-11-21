import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import user from './slices/user'

const defaultMiddlewares = getDefaultMiddleware()

const combinedReducers = {
  user: user.reducer
}

const store = configureStore({
  reducer: combinedReducers,
  middleware: [...defaultMiddlewares, logger]
})

export default store