import { configureStore } from "@reduxjs/toolkit";
import { iisApi } from "@/app/api/api";
import authReducer from "@/features/auth/model/auth-slice";



export const store = configureStore({
    reducer: {
        [iisApi.reducerPath]: iisApi.reducer,
        //auth
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(iisApi.middleware)
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch