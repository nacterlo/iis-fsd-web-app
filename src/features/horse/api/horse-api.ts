import { iisApi } from "@/app/api/api"
import { ServerResponseArray } from "@/app/api/server-response.types"
import { HorseList, Horse, CreateHorse, UpdateHorse } from "../model/types"





const horseApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['HorseList', 'Horse'] })

export const horseApi = horseApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getHorseList: build.query<ServerResponseArray<HorseList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/04-horse/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['HorseList'],
        }),
        getHorse: build.query<Horse, number>({
            query: (id) => ({
                url: `/04-horse/${id}/`,
                method: 'GET',
            }),
            providesTags: ['Horse'],
        }),
        createHorse: build.mutation<void, CreateHorse>({
            query: (data) => ({
                url: '/04-horse/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['HorseList'],
        }),
        updateHorse: build.mutation<void, UpdateHorse>({
            query: (data) => ({
                url: '/04-horse/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['HorseList', 'Horse'],
        }),
        uploadIISHorse: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/04-horse/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['HorseList'],
        })
    }),
})

export const {
    useGetHorseListQuery,
    useGetHorseQuery,
    useCreateHorseMutation,
    useUpdateHorseMutation,
    useUploadIISHorseMutation
} = horseApi