import { iisApi } from "@/app/api/api"
import { ServerResponseArray } from "@/app/api/server-response.types"
import { SheepRomanovList, SheepRomanov, CreateSheepRomanov, UpdateSheepRomanov } from "../model/types"





const sheepRomanovApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['SheepRomanovList', 'SheepRomanov'] })

export const sheepRomanovApi = sheepRomanovApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getSheepRomanovList: build.query<ServerResponseArray<SheepRomanovList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/06-sheep-romanov/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['SheepRomanovList'],
        }),
        getSheepRomanov: build.query<SheepRomanov, number>({
            query: (id) => ({
                url: `/06-sheep-romanov/${id}/`,
                method: 'GET',
            }),
            providesTags: ['SheepRomanov'],
        }),
        createSheepRomanov: build.mutation<void, CreateSheepRomanov>({
            query: (data) => ({
                url: '/06-sheep-romanov/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['SheepRomanovList'],
        }),
        updateSheepRomanov: build.mutation<void, UpdateSheepRomanov>({
            query: (data) => ({
                url: '/06-sheep-romanov/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['SheepRomanovList', 'SheepRomanov'],
        }),
        deleteSheepRomanov: build.mutation<void, number>({
            query: (id) => ({
                url: `/06-sheep-romanov/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SheepRomanov'],
        }),
        uploadIISSheepRomanov: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/06-sheep-romanov/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['SheepRomanovList'],
        })
    }),
})

export const {
    useGetSheepRomanovListQuery,
    useGetSheepRomanovQuery,
    useCreateSheepRomanovMutation,
    useUpdateSheepRomanovMutation,
    useDeleteSheepRomanovMutation,
    useUploadIISSheepRomanovMutation
} = sheepRomanovApi