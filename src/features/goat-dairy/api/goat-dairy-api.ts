import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { GoatDairyList, GoatDairy, CreateGoatDairy, UpdateGoatDairy } from "../model/types";




const goatDairyApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['GoatDairyList', 'GoatDairy'] })

export const goatDairyApi = goatDairyApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getGoatDairyList: build.query<ServerResponseArray<GoatDairyList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/10-goat-dairy/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['GoatDairyList'],
        }),
        getGoatDairy: build.query<GoatDairy, number>({
            query: (id) => ({
                url: `/10-goat-dairy/${id}/`,
                method: 'GET',
            }),
            providesTags: ['GoatDairy'],
        }),
        createGoatDairy: build.mutation<void, CreateGoatDairy>({
            query: (data) => ({
                url: '/10-goat-dairy/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['GoatDairyList'],
        }),
        updateGoatDairy: build.mutation<void, UpdateGoatDairy>({
            query: (data) => ({
                url: '/10-goat-dairy/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['GoatDairyList', 'GoatDairy'],
        }),
        deleteGoatDairy: build.mutation<void, number>({
            query: (id) => ({
                url: `/10-goat-dairy/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GoatDairy'],
        }),
    }),
})

export const {
    useGetGoatDairyQuery,
    useGetGoatDairyListQuery,
    useCreateGoatDairyMutation,
    useUpdateGoatDairyMutation
} = goatDairyApi