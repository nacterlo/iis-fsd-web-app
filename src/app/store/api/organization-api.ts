import { iisApi } from "@/app/api/api";
import { ServerResponseArray } from "@/app/api/server-response.types";
import { ICreateOrganization, IOrgSearch, Organization } from "@/features/organization/model/types";


const organizationApiWithTags = iisApi.enhanceEndpoints({ addTagTypes: ['Organization'] })

export const organizationApi = organizationApiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getFullOrganizations: builder.query<ServerResponseArray<Organization>, void>({
            query: () => '/organization/full'
        }),
        getOrganizations: builder.query<ServerResponseArray<Organization>, { limit: number, page: number }>({
            query: (params) => ({
                url: `/organization/list?limit=${params.limit}&page=${params.page}`,
                method: 'GET',
            }),
            providesTags: ['Organization'],
        }),
        searchOrganizations: builder.query<ServerResponseArray<IOrgSearch>, { name: string }>({
            query: (params) => ({
                url: `/organization/search?name=${params.name}`,
                method: 'GET',
            }),
        }),
        createOrganization: builder.mutation<void, ICreateOrganization>({
            query: (data) => ({
                url: '/organization/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Organization'],
        })
        // searchOrganizations
    }),
})

export const {
    useGetFullOrganizationsQuery,
    useGetOrganizationsQuery,
    useCreateOrganizationMutation,
    useSearchOrganizationsQuery,
    useLazySearchOrganizationsQuery
} = organizationApi