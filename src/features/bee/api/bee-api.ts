import { iisApi } from "@/app/api/api";
import { Bee, BeeList, CreateBee, UpdateBee } from "../model/types";
import { ServerResponseArray } from "@/app/api/server-response.types";


const beeApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['BeeList', 'Bee'] })

export const beeApi = beeApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getBeeList: build.query<ServerResponseArray<BeeList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/20-bee/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['BeeList'],
        }),
        getBee: build.query<Bee, number>({
            query: (id) => ({
                url: `/20-bee/${id}`,
                method: 'GET',
            }),
            providesTags: ['Bee'],
        }),
        createBee: build.mutation<void, CreateBee>({
            query: (data) => ({
                url: '/20-bee',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['BeeList']
        }),
        updateBee: build.mutation<void, UpdateBee>({
            query: (data) => ({
                url: '/20-bee',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['BeeList', 'Bee']
        }),
        deleteBee: build.mutation<void, number>({
            query: (id) => ({
                url: `/20-bee/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Bee']
        }),
        uploadIISBee: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/20-bee/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['BeeList']
        })
    }),
})

export const {
    useGetBeeListQuery,
    useGetBeeQuery,
    useCreateBeeMutation,
    useUpdateBeeMutation,
    useDeleteBeeMutation,
    useUploadIISBeeMutation
} = beeApi
