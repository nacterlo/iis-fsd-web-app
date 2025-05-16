import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { PigList, Pig, CreatePig, UpdatePig } from "../model/types";



const pigApiWithTag = iisApi.enhanceEndpoints({ addTagTypes: ['PigList', 'Pig'] })

export const pigApi = pigApiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getPigList: builder.query<ServerResponseArray<PigList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/03-pig/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['PigList'],
        }),
        getPig: builder.query<Pig, number>({
            query: (id) => ({
                url: `/03-pig/${id}/`,
                method: 'GET',
            }),
            providesTags: ['Pig'],
        }),
        createPig: builder.mutation<void, CreatePig>({
            query: (data) => ({
                url: '/03-pig/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['PigList'],
        }),
        updatePig: builder.mutation<void, UpdatePig>({
            query: (data) => ({
                url: `/03-pig/`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['PigList', 'Pig'],
        }),
    }),
})


export const {
    useGetPigListQuery,
    useGetPigQuery,
    useCreatePigMutation,
    useUpdatePigMutation
} = pigApi