import { iisApi } from "@/app/api/api"
import { ServerResponseArray } from "@/app/api/server-response.types"
import { SheepSmushkovyList, SheepSmushkovy, CreateSheepSmushkovy, UpdateSheepSmushkovy } from "../model/types"





const sheepSmushkovyApiWithTag = iisApi.enhanceEndpoints({ addTagTypes: ['SheepSmushkovyList', 'SheepSmushkovy'] })

export const sheepSmushkovyApi = sheepSmushkovyApiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getSheepSmushkovyList: build.query<ServerResponseArray<SheepSmushkovyList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/07-sheep-smushkovy/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['SheepSmushkovyList'],
        }),
        getSheepSmushkovy: build.query<SheepSmushkovy, number>({
            query: (id) => ({
                url: `/07-sheep-smushkovy/${id}/`,
                method: 'GET',
            }),
            providesTags: ['SheepSmushkovy'],
        }),
        createSheepSmushkovy: build.mutation<void, CreateSheepSmushkovy>({
            query: (data) => ({
                url: '/07-sheep-smushkovy/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['SheepSmushkovyList'],
        }),
        updateSheepSmushkovy: build.mutation<void, UpdateSheepSmushkovy>({
            query: (data) => ({
                url: '/07-sheep-smushkovy/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['SheepSmushkovyList', 'SheepSmushkovy'],
        }),
        deleteSheepSmushkovy: build.mutation<void, number>({
            query: (id) => ({
                url: `/07-sheep-smushkovy/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SheepSmushkovy'],
        })
    }),
})

export const { useGetSheepSmushkovyListQuery, useGetSheepSmushkovyQuery, useCreateSheepSmushkovyMutation, useUpdateSheepSmushkovyMutation, useDeleteSheepSmushkovyMutation } = sheepSmushkovyApi