import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { Poulty, PoultyList } from "../model/types";



const poultyApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['Poultry'] })

export const poultyApi = poultyApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getPoultryList: build.query<ServerResponseArray<PoultyList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/17-poulty/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['Poultry'],
        }),
        getPoultry: build.query<ServerResponseArray<Poulty>, void>({
            query: () => '/17-poulty',
            providesTags: ['Poultry']
        }),
        createPoultry: build.mutation<void, Poulty>({
            query: (data) => ({
                url: '/17-poulty',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Poultry']
        }),
        updatePoultry: build.mutation<void, Poulty>({
            query: (data) => ({
                url: '/17-poulty',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Poultry']
        }),
        deletePoultry: build.mutation<void, number>({
            query: (id) => ({
                url: `/17-poulty/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Poultry']
        })
    }),
})