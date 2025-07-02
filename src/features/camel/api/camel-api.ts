import { iisApi } from "@/app/api/api";
import { Camel, CamelList, CreateCamel, UpdateCamel } from "../model/types";
import { ServerResponseArray } from "@/app/api/server-response.types";



const camelApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['CamelList', 'Camel'] })

export const camelApi = camelApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getCamelList: build.query<ServerResponseArray<CamelList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/15-camel/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['CamelList'],
        }),
        getCamel: build.query<Camel, number>({
            query: (id) => ({
                url: `/15-camel/${id}/`,
                method: 'GET',
            }),
            providesTags: ['Camel'],
        }),
        createCamel: build.mutation<void, CreateCamel>({
            query: (data) => ({
                url: '/15-camel/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['CamelList'],
        }),
        updateCamel: build.mutation<void, UpdateCamel>({
            query: (data) => ({
                url: '/15-camel/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['CamelList', 'Camel'],
        }),
        deleteCamel: build.mutation<void, number>({
            query: (id) => ({
                url: `/15-camel/${id}/`,
                method: 'DELETE',
            }),
        }),
        uploadIISCamel: build.mutation<void, { id: number }>({
            query: (data) => ({
                url: `/15-camel/${data.id}/message/`,
                method: 'PUT',
            }),
            invalidatesTags: ['CamelList'],
        })
    }),
})

export const {
    useGetCamelListQuery,
    useGetCamelQuery,
    useCreateCamelMutation,
    useUpdateCamelMutation,
    useDeleteCamelMutation,
    useUploadIISCamelMutation
} = camelApi