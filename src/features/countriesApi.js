import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1/'}),
  refetchOnMountOrArgChange: 5,
  endpoints: (builder) => ({
    getCountryDetails: builder.query({
      query: (id) => `alpha/${id}`
    })
  })
})

export const { useGetCountryDetailsQuery } = countriesApi;