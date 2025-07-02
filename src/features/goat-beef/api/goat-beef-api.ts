import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { GoatBeefList, GoatBeef, CreateGoatBeef, UpdateGoatBeef } from "../model/types";



const goatBeefApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['GoatBeefList', 'GoatBeef'] })

export const goatBeefApi = goatBeefApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getGoatBeefList: builder.query<ServerResponseArray<GoatBeefList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/11-goat-beef/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['GoatBeefList'],
        }),
        getGoatBeef: builder.query<GoatBeef, number>({
            query: (id) => ({
                url: `/11-goat-beef/${id}/`,
                method: 'GET',
            }),
            providesTags: ['GoatBeef'],
        }),
        createGoatBeef: builder.mutation<void, CreateGoatBeef>({
            query: (data) => ({
                url: '/11-goat-beef/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['GoatBeefList'],
        }),
        updateGoatBeef: builder.mutation<void, UpdateGoatBeef>({
            query: (data) => ({
                url: '/11-goat-beef/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['GoatBeefList', 'GoatBeef'],
        }),
        deleteGoatBeef: builder.mutation<void, number>({
            query: (id) => ({
                url: `/11-goat-beef/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GoatBeef'],
        }),
        uploadIISGoatBeef: builder.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/11-goat-beef/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['GoatBeefList'],
        })
    }),
})

export const {
    useGetGoatBeefListQuery,
    useGetGoatBeefQuery,
    useCreateGoatBeefMutation,
    useUpdateGoatBeefMutation,
    useDeleteGoatBeefMutation,
} = goatBeefApi