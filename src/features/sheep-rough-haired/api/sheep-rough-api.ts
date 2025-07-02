import { iisApi } from "@/app/api/api"
import { ServerResponseArray } from "@/app/api/server-response.types"
import { SheepRoughList, SheepRough, CreateSheepRough, UpdateSheepRough } from "../model/types"





const sheepRoughApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['SheepRoughList', 'SheepRough'] })

export const sheepRoughApi = sheepRoughApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getSheepRoughList: build.query<ServerResponseArray<SheepRoughList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/05-sheep-rough-haired/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['SheepRoughList'],
        }),
        getSheepRough: build.query<SheepRough, number>({
            query: (id) => ({
                url: `/05-sheep-rough-haired/${id}/`,
                method: 'GET',
            }),
            providesTags: ['SheepRough'],
        }),
        createSheepRough: build.mutation<void, CreateSheepRough>({
            query: (data) => ({
                url: '/05-sheep-rough-haired/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['SheepRoughList'],
        }),
        updateSheepRough: build.mutation<void, UpdateSheepRough>({
            query: (data) => ({
                url: '/05-sheep-rough-haired/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['SheepRoughList', 'SheepRough'],
        }),
        deleteSheepRough: build.mutation<void, number>({
            query: (id) => ({
                url: `/05-sheep-rough-haired/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SheepRough'],
        }),
        uploadIISSheepRough: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/05-sheep-rough-haired/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['SheepRoughList'],
        })
    }),
})

export const {
    useGetSheepRoughListQuery,
    useGetSheepRoughQuery,
    useCreateSheepRoughMutation,
    useUpdateSheepRoughMutation,
    useDeleteSheepRoughMutation,
    useUploadIISSheepRoughMutation
} = sheepRoughApi