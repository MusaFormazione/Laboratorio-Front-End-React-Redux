import { createSlice } from '@reduxjs/toolkit'

let initialState = [
  {
    country: 'France',
    code: 'fr',
    rating: '4'
  },
  {
    country: 'Italy',
    code: 'it',
    rating: '5'
  },
]

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.push(action.payload)
    },
    deleteCountry: (state, action) => {
      return state.filter(country => country.code !== action.payload)
    },
  },
})

export const { addCountry, deleteCountry } = countriesSlice.actions;

export default countriesSlice.reducer