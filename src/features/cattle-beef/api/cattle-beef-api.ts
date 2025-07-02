import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { CattleBeef, CattleBeefList, CreateCattleBeef, UpdateCattleBeef } from "../model/types";



const cattleBeefApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['CattleBeefList', 'CattleBeef'] })

export const cattleBeefApi = cattleBeefApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getCattleBeefList: builder.query<ServerResponseArray<CattleBeefList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/02-cattle-beef/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['CattleBeefList'],
        }),
        getCattleBeef: builder.query<CattleBeef, number>({
            query: (id) => ({
                url: `/02-cattle-beef/${id}/`,
                method: 'GET',
            }),
            providesTags: ['CattleBeef'],
        }),
        createCattleBeef: builder.mutation<void, CreateCattleBeef>({
            query: (data) => ({
                url: '/02-cattle-beef/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['CattleBeefList'],
        }),
        updateCattleBeef: builder.mutation<void, UpdateCattleBeef>({
            query: (data) => ({
                url: `/02-cattle-beef/`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['CattleBeefList', 'CattleBeef'],
        }),
        uploadIISCattleBeef: builder.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/02-cattle-beef/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['CattleBeefList'],
        })
    })
})

export const {
    useGetCattleBeefListQuery,
    useGetCattleBeefQuery,
    useCreateCattleBeefMutation,
    useUpdateCattleBeefMutation,
    useUploadIISCattleBeefMutation
} = cattleBeefApi