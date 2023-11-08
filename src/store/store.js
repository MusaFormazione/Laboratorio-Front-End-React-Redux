import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from '../features/countriesSlice'
import {countriesApi} from '../features/countriesApi';

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
    [countriesApi.reducerPath]: countriesApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(countriesApi.middleware)
})