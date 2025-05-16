import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { FurryList, Furry, CreateFurry, UpdateFurry } from "../model/types";



const furryApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['FurryList', 'Furry'] })

export const furryApi = furryApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getFurryList: build.query<ServerResponseArray<FurryList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/16-furry/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['FurryList'],
        }),
        getFurry: build.query<Furry, number>({
            query: (id) => ({
                url: `/16-furry/${id}/`,
                method: 'GET',
            }),
            providesTags: ['Furry'],
        }),
        createFurry: build.mutation<void, CreateFurry>({
            query: (data) => ({
                url: '/16-furry/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['FurryList'],
        }),
        updateFurry: build.mutation<void, UpdateFurry>({
            query: (data) => ({
                url: '/16-furry/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['FurryList', 'Furry'],
        }),
        deleteFurry: build.mutation<void, number>({
            query: (id) => ({
                url: `/16-furry/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Furry'],
        })
    }),
})

export const {
    useGetFurryListQuery,
    useGetFurryQuery,
    useCreateFurryMutation,
    useUpdateFurryMutation
} = furryApi