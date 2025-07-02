import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { SheepMeatShorthairList, SheepMeatShorthair, CreateSheepMeatShorthair, UpdateSheepMeatShorthair } from "../model/types";





const sheepMeatShorthairApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['SheepMeatShorthairList', 'SheepMeatShorthair'] })

export const sheepMeatShorthairApi = sheepMeatShorthairApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getSheepMeatShorthairList: builder.query<ServerResponseArray<SheepMeatShorthairList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/09-sheep-meat-shorthair/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['SheepMeatShorthair'],
        }),
        getSheepMeatShorthair: builder.query<SheepMeatShorthair, number>({
            query: (id) => ({
                url: `/09-sheep-meat-shorthair/${id}/`,
                method: 'GET',
            }),
            providesTags: ['SheepMeatShorthairList'],
        }),
        createSheepMeatShorthair: builder.mutation<void, CreateSheepMeatShorthair>({
            query: (data) => ({
                url: '/09-sheep-meat-shorthair/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['SheepMeatShorthair'],
        }),
        updateSheepMeatShorthair: builder.mutation<void, UpdateSheepMeatShorthair>({
            query: (data) => ({
                url: '/09-sheep-meat-shorthair/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['SheepMeatShorthairList', 'SheepMeatShorthair'],
        }),
        deleteSheepMeatShorthair: builder.mutation<void, number>({
            query: (id) => ({
                url: `/09-sheep-meat-shorthair/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SheepMeatShorthair'],
        }),
        uploadIISSheepMeatShorthair: builder.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/09-sheep-meat-shorthair/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['SheepMeatShorthairList'],
        })
    }),
})

export const {
    useGetSheepMeatShorthairListQuery,
    useGetSheepMeatShorthairQuery,
    useCreateSheepMeatShorthairMutation,
    useUpdateSheepMeatShorthairMutation,
    useDeleteSheepMeatShorthairMutation,
    useUploadIISSheepMeatShorthairMutation
} = sheepMeatShorthairApi