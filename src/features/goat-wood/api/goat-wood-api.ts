import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { GoatWoodList, GoatWood, CreateGoatWood, UpdateGoatWood } from "../model/types";




const goatWoodApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['GoatWoodList', 'GoatWood'] })

export const goatWoodApi = goatWoodApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getGoatWoodList: build.query<ServerResponseArray<GoatWoodList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/12-goat-wool/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['GoatWoodList'],
        }),
        getGoatWood: build.query<GoatWood, number>({
            query: (id) => ({
                url: `/12-goat-wool/${id}/`,
                method: 'GET',
            }),
            providesTags: ['GoatWood'],
        }),
        createGoatWood: build.mutation<void, CreateGoatWood>({
            query: (data) => ({
                url: '/12-goat-wool/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['GoatWoodList'],
        }),
        updateGoatWood: build.mutation<void, UpdateGoatWood>({
            query: (data) => ({
                url: '/12-goat-wool/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['GoatWoodList', 'GoatWood'],
        }),
        deleteGoatWood: build.mutation<void, number>({
            query: (id) => ({
                url: `/12-goat-wool/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GoatWood'],
        }),
        uploadIISGoatWood: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/12-goat-wool/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['GoatWoodList'],
        })
    }),
})

export const {
    useGetGoatWoodListQuery,
    useGetGoatWoodQuery,
    useCreateGoatWoodMutation,
    useUpdateGoatWoodMutation,
    useDeleteGoatWoodMutation,
    useUploadIISGoatWoodMutation
} = goatWoodApi