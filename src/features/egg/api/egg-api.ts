import { iisApi } from "@/app/api/api";
import { CreateEgg, Egg, EggList, UpdateEgg } from "../model/types";
import { ServerResponseArray } from "@/app/api/server-response.types";



const eggApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['EggList', 'Egg'] })

export const eggApi = eggApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getEggList: build.query<ServerResponseArray<EggList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/18-egg/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['EggList'],
        }),
        getEgg: build.query<Egg, { id: number }>({
            query: ({ id }) => `/18-egg/${id}`,
            providesTags: ['Egg']
        }),
        createEgg: build.mutation<void, CreateEgg>({
            query: (data) => ({
                url: '/18-egg',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['EggList']
        }),
        updateEgg: build.mutation<void, UpdateEgg>({
            query: (data) => ({
                url: '/18-egg',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['EggList', 'Egg']
        }),
        deleteEgg: build.mutation<void, number>({
            query: (id) => ({
                url: `/18-egg/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Egg']
        }),
        uploadIISEgg: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/18-egg/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['EggList'],
        })
    }),
})

export const {
    useGetEggListQuery,
    useGetEggQuery,
    useCreateEggMutation,
    useUpdateEggMutation,
    useDeleteEggMutation,
    useUploadIISEggMutation
} = eggApi