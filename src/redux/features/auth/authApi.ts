import { baseApi } from "@/redux/hooks/baseApi";
import type {
    LoginRequest,
    LoginResponse,
    RegisterResponse,
} from "@/redux/types/auth.types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, any>({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData,
            }),
            transformResponse: (response: any): RegisterResponse => ({
                ...response,
                data: {
                    ...response.data,
                    accessToken: response.data?.access_token || response.data?.accessToken,
                    refreshToken: response.data?.refresh_token || response.data?.refreshToken,
                },
            }),
            invalidatesTags: ["User"],
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            transformResponse: (response: any): LoginResponse => ({
                ...response,
                data: {
                    ...response.data,
                    user: response.data.user,
                    accessToken: response.data.access_token || response.data.accessToken,
                    refreshToken: response.data.refresh_token || response.data.refreshToken,
                },
            }),
            invalidatesTags: ["User"],
        }),

        getMe: builder.query({
            query: () => ({
                url: "/users/me",
                method: "GET",
            }),
            providesTags: ["User"],
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetMeQuery,
} = authApi;
