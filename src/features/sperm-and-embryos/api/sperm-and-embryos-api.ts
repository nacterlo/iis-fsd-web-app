import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { SpermAndEmbryosList, SpermAndEmbryos, CreateSpermAndEmbryos, UpdateSpermAndEmbryos } from "../model/types";


const spermEmbryosApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['SpermAndEmbryosList', 'SpermAndEmbryos'] })

export const spermEmbryosApi = spermEmbryosApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getSpermAndEmbryosList: builder.query<ServerResponseArray<SpermAndEmbryosList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/21-sperm-and-embryos/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['SpermAndEmbryosList']
        }),
        getSpermAndEmbryos: builder.query<SpermAndEmbryos, number>({
            query: (id) => ({
                url: `/21-sperm-and-embryos/${id}`,
                method: 'GET',
                provadesTags: ['SpermAndEmbryos']
            })
        }),
        createSpermAndEmbryos: builder.mutation<void, CreateSpermAndEmbryos>({
            query: (data) => ({
                url: '/21-sperm-and-embryos',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['SpermAndEmbryosList']
        }),
        updateSpermAndEmbryos: builder.mutation<void, UpdateSpermAndEmbryos>({
            query: (data) => ({
                url: '/21-sperm-and-embryos',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['SpermAndEmbryosList', 'SpermAndEmbryos']
        }),
        deleteSpermAndEmbryos: builder.mutation<void, number>({
            query: (id) => ({
                url: `/21-sperm-and-embryos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SpermAndEmbryos']
        })
    }),
})

export const {
    useGetSpermAndEmbryosListQuery,
    useGetSpermAndEmbryosQuery,
    useCreateSpermAndEmbryosMutation,
    useUpdateSpermAndEmbryosMutation,
    useDeleteSpermAndEmbryosMutation
} = spermEmbryosApi
