import { iisApi } from "@/app/api/api";
import { User } from "@/features/auth/model/types";




export const authApi = iisApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<User, { login: string, password: string }>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});


export const {
    useLoginMutation
} = authApi