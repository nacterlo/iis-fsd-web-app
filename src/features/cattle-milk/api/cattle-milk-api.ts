import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { CattleMilk, CattleMilkList, CreateCattleMilk, UpdateCattleMilk } from "../model/types";


const cattleMilkApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['CattleMilkList', 'CattleMilk'] });

export const cattleMilkApi = cattleMilkApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getCattleMilkList: builder.query<ServerResponseArray<CattleMilkList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/01-cattle-dairy/list?page=${params.page}&limit=${params.limit}`,
                method: 'GET',
            }),
            providesTags: ['CattleMilkList'],
        }),
        getCattleMilk: builder.query<CattleMilk, number>({
            query: (id) => ({
                url: `/01-cattle-dairy/${id}/`,
                method: 'GET',
            }),
            providesTags: ['CattleMilk'],
        }),
        createCattleMilk: builder.mutation<void, CreateCattleMilk>({
            query: (data) => ({
                url: '/01-cattle-dairy/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['CattleMilkList'],
        }),
        updateCattleMilk: builder.mutation<void, UpdateCattleMilk>({
            query: (data) => ({
                url: `/01-cattle-dairy/`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['CattleMilkList', 'CattleMilk'],
        }),
        deleteCattleMilk: builder.mutation<void, number>({
            query: (id) => ({
                url: `/01-cattle-dairy/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CattleMilk'],
        })
    })
})

export const {
    useGetCattleMilkListQuery,
    useGetCattleMilkQuery,
    useLazyGetCattleMilkQuery,
    useCreateCattleMilkMutation,
    useUpdateCattleMilkMutation,
    useDeleteCattleMilkMutation
} = cattleMilkApi