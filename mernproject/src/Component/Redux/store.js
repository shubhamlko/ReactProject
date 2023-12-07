import { configureStore } from '@reduxjs/toolkit'
import ReduxCounter from './ReduxCounter'
import ReduxCartSlice from './ReduxCart/ReduxCartSlice'

export const store = configureStore({
  reducer: {
    counter : ReduxCounter,
    cart : ReduxCartSlice
  },
})