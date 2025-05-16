import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"


const baseUrl = import.meta.env.VITE_API_BASE_URL

const baseQuery = fetchBaseQuery({ baseUrl: baseUrl, credentials: 'include' })

export const iisApi = createApi({
    baseQuery,
    endpoints: () => ({}),
})