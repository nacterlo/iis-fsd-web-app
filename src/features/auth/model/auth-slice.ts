import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";


interface AuthState {
    authUser: User | null,
}

function getSessionUser(): User | null {
    const authUser = sessionStorage.getItem('authUser')
    return authUser ? JSON.parse(authUser) : null
}

const initialState: AuthState = {
    authUser: getSessionUser()
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.authUser = action.payload
            sessionStorage.setItem('authUser', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.authUser = null
        }
    }
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer