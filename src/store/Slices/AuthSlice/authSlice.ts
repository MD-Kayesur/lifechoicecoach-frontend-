import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
    user: any | null;
    token: string | null;
    isAuthenticated: boolean;
}

const token = Cookies.get("accessToken");

const initialState: AuthState = {
    user: null,
    token: token || null,
    isAuthenticated: !!token,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ user: any; token: string }>
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            // Clear cookies
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
        },
    },
});

export const { setCredentials, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
