import { iisApi } from "@/app/api/api"
import { ServerResponseArray } from "@/app/api/server-response.types"
import { SheepFineFleecedList, SheepFineFleeced, CreateSheepFineFleeced, UpdateSheepFineFleeced } from "../model/types"





const sheepFineFleecedApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['SheepFineFleecedList', 'SheepFineFleeced'] })

export const sheepFineFleecedApi = sheepFineFleecedApiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getSheepFineFleecedList: build.query<ServerResponseArray<SheepFineFleecedList>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/08-sheep-fine-fleeced/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['SheepFineFleecedList'],
        }),
        getSheepFineFleeced: build.query<SheepFineFleeced, number>({
            query: (id) => ({
                url: `/08-sheep-fine-fleeced/${id}/`,
                method: 'GET',
            }),
            providesTags: ['SheepFineFleeced'],
        }),
        createSheepFineFleeced: build.mutation<void, CreateSheepFineFleeced>({
            query: (data) => ({
                url: '/08-sheep-fine-fleeced/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['SheepFineFleecedList'],
        }),
        updateSheepFineFleeced: build.mutation<void, UpdateSheepFineFleeced>({
            query: (data) => ({
                url: '/08-sheep-fine-fleeced/',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['SheepFineFleecedList', 'SheepFineFleeced'],
        }),
        deleteSheepFineFleeced: build.mutation<void, number>({
            query: (id) => ({
                url: `/08-sheep-fine-fleeced/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SheepFineFleeced'],
        })
    })
})

export const {
    useGetSheepFineFleecedListQuery,
    useGetSheepFineFleecedQuery,
    useCreateSheepFineFleecedMutation,
    useUpdateSheepFineFleecedMutation,
    useDeleteSheepFineFleecedMutation
} = sheepFineFleecedApi