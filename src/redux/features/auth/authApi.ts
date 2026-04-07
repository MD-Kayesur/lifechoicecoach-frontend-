import { baseApi } from "@/redux/hooks/baseApi";
import type {
    LoginRequest,
    LoginResponse,
    RegisterResponse,
    OtpRequest,
    OtpResponse,
    OtpVerifyRequest,
    OtpResendRequest,
} from "@/redux/types/auth.types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // OTP Registration Step 1: Request OTP
        requestOtp: builder.mutation<OtpResponse, OtpRequest>({
            query: (data) => {
                const formData = new FormData();
                Object.entries(data).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                return {
                    url: "/auth/signup/request-otp/",
                    method: "POST",
                    body: formData,
                };
            },
        }),

        // OTP Registration Step 2: Verify OTP and Register
        verifyOtp: builder.mutation<RegisterResponse, OtpVerifyRequest>({
            query: (data) => {
                const formData = new FormData();
                Object.entries(data).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                return {
                    url: "/auth/signup/verify-otp/",
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: ["User"],
        }),

        // Resend OTP
        resendOtp: builder.mutation<OtpResponse, OtpResendRequest>({
            query: (data) => {
                const formData = new FormData();
                Object.entries(data).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                return {
                    url: "/auth/signup/resend-otp/",
                    method: "POST",
                    body: formData,
                };
            },
        }),

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
            query: (credentials) => {
                const formData = new FormData();
                formData.append("email", credentials.email);
                formData.append("password", credentials.password);
                return {
                    url: "/auth/login/login/",
                    method: "POST",
                    body: formData,
                };
            },
            transformResponse: (response: any): LoginResponse => ({
                ...response,
                data: response.data ? {
                    ...response.data,
                    user: response.data.user,
                    accessToken: response.data.access_token || response.data.accessToken || response.access,
                    refreshToken: response.data.refresh_token || response.data.refreshToken || response.refresh,
                } : {
                    user: response.user,
                    accessToken: response.access,
                    refreshToken: response.refresh,
                },
            }),
            invalidatesTags: ["User"],
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/auth/logout/",
                method: "POST",
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
    useRequestOtpMutation,
    useVerifyOtpMutation,
    useResendOtpMutation,
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetMeQuery,
} = authApi;
