import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { FishList, Fish, CreateFish, UpdateFish } from "../model/types";


const fishApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['FishList', 'Fish'] })

export const fishApi = fishApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getFishList: builder.query<ServerResponseArray<FishList>, { limit: number, page: number }>({
            query: () => ({
                url: '/19-fish/list/?limit=${params.limit}&page=${params.page}',
                method: 'GET',
            }),
            providesTags: ['FishList'],
        }),
        getFish: builder.query<Fish, number>({
            query: (id) => ({
                url: `/19-fish/${id}/`,
                method: 'GET',
            }),
            providesTags: ['Fish'],
        }),
        createFish: builder.mutation<void, CreateFish>({
            query: (data) => ({
                url: '/19-fish/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['FishList'],
        }),
        updateFish: builder.mutation<void, UpdateFish>({
            query: (data) => ({
                url: '/19-fish/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['FishList', 'Fish'],
        }),
        deleteFish: builder.mutation<void, number>({
            query: (id) => ({
                url: `/19-fish/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Fish'],
        }),
        uploadIISFish: builder.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/19-fish/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['FishList'],
        })
    }),
})

export const {
    useGetFishListQuery,
    useGetFishQuery,
    useCreateFishMutation,
    useUpdateFishMutation,
    useDeleteFishMutation,
    useUploadIISFishMutation
} = fishApi