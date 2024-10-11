import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../slice/todoSlice'

export const store = configureStore({
    reducer: {
      todo: todoReducers,
  },
})