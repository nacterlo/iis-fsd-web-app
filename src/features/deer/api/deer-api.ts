import { iisApi } from "@/app/api/api";
import { CreateDeer, Deer, DeerList, UpdateDeer } from "../model/types";
import { ServerResponseArray } from "@/app/api/server-response.types";


const deerApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['DeerList', 'Deer'] })

export const deerApi = deerApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getDeerList: build.query<ServerResponseArray<DeerList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/14-deer/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['DeerList'],
        }),
        getDeer: build.query<Deer, number>({
            query: (id) => ({
                url: `/14-deer/${id}/`,
                method: 'GET',
            }),
            providesTags: ['Deer'],
        }),
        createDeer: build.mutation<void, CreateDeer>({
            query: (data) => ({
                url: '/14-deer/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['DeerList'],
        }),
        updateDeer: build.mutation<void, UpdateDeer>({
            query: (data) => ({
                url: '/14-deer/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['DeerList', 'Deer'],
        }),
        deleteDeer: build.mutation<void, number>({
            query: (id) => ({
                url: `/14-deer/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Deer'],
        }),
        uploadIISDeer: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/14-deer/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['DeerList'],
        })
    }),
})

export const {
    useGetDeerListQuery,
    useGetDeerQuery,
    useCreateDeerMutation,
    useUpdateDeerMutation,
    useDeleteDeerMutation,
    useUploadIISDeerMutation
} = deerApi