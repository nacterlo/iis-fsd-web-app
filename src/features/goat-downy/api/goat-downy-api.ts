import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { GoatDownyList, GoatDowny, CreateGoatDowny, UpdateGoatDowny } from "../model/types";



const goatDownyApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['GoatDownyList', 'GoatDowny'] })

export const goatDownyApi = goatDownyApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getGoatDownyList: build.query<ServerResponseArray<GoatDownyList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/13-goat-downy/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['GoatDownyList'],
        }),
        getGoatDowny: build.query<GoatDowny, number>({
            query: (id) => ({
                url: `/13-goat-downy/${id}/`,
                method: 'GET',
            }),
            providesTags: ['GoatDowny'],
        }),
        createGoatDowny: build.mutation<void, CreateGoatDowny>({
            query: (data) => ({
                url: '/13-goat-downy/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['GoatDownyList'],
        }),
        updateGoatDowny: build.mutation<void, UpdateGoatDowny>({
            query: (data) => ({
                url: '/13-goat-downy/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['GoatDownyList', 'GoatDowny'],
        }),
        deleteGoatDowny: build.mutation<void, number>({
            query: (id) => ({
                url: `/13-goat-downy/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GoatDowny'],
        })
    }),
})

export const {
    useGetGoatDownyListQuery,
    useGetGoatDownyQuery,
    useCreateGoatDownyMutation,
    useUpdateGoatDownyMutation
} = goatDownyApi