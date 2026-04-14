import { baseApi } from "@/redux/hooks/baseApi";
import type {
    LoginRequest,
    LoginResponse,
    RegisterResponse,
    OtpRequest,
    OtpResponse,
    OtpVerifyRequest,
    OtpResendRequest,
    ApiResponseBase,
    ChangePasswordRequest,
} from "@/redux/types/auth.types";

export const authApi = baseApi.injectEndpoints({
    overrideExisting: true,
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
            transformResponse: (response: any): RegisterResponse => {
                const userData = response.user?.user || response.user || response.data?.user;
                const profileData = response.user?.profile || response.profile;
                const tokens = response.user?.tokens || response.tokens || response.data;
                const access = response.access || tokens?.access || tokens?.access_token || tokens?.accessToken;
                const refresh = response.refresh || tokens?.refresh || tokens?.refresh_token || tokens?.refreshToken;

                return {
                    ...response,
                    data: {
                        user: {
                            ...userData,
                            ...profileData
                        },
                        accessToken: access,
                        refreshToken: refresh
                    }
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
            transformResponse: (response: any): RegisterResponse => {
                const userData = response.user?.user || response.user || response.data?.user;
                const profileData = response.user?.profile || response.profile;
                const tokens = response.user?.tokens || response.tokens || response.data;
                const access = response.access || tokens?.access || tokens?.access_token || tokens?.accessToken;
                const refresh = response.refresh || tokens?.refresh || tokens?.refresh_token || tokens?.refreshToken;

                return {
                    ...response,
                    data: {
                        user: {
                            ...userData,
                            ...profileData
                        },
                        accessToken: access,
                        refreshToken: refresh
                    }
                };
            },
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
            transformResponse: (response: any): LoginResponse => {
                const userData = response.user?.user || response.user || response.data?.user;
                const profileData = response.user?.profile || response.profile;
                const tokens = response.user?.tokens || response.tokens || response.data;
                const access = response.access || tokens?.access || tokens?.access_token || tokens?.accessToken;
                const refresh = response.refresh || tokens?.refresh || tokens?.refresh_token || tokens?.refreshToken;

                return {
                    ...response,
                    data: {
                        user: {
                            ...userData,
                            ...profileData
                        },
                        accessToken: access,
                        refreshToken: refresh
                    }
                };
            },
            invalidatesTags: ["User"],
        }),

        logout: builder.mutation<void, any>({
            query: (data) => ({
                url: "/auth/logout/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),

        getMe: builder.query<any, void>({
            query: () => ({
                url: "/auth/profile/me/",
                method: "GET",
            }),
            providesTags: ["User"],
        }),

        updateProfileAuth: builder.mutation<any, FormData>({
            query: (formData) => ({
                url: "/auth/profile/me/",
                method: "PATCH",
                body: formData,
            }),
            invalidatesTags: ["User"],
        }),

        socialLogin: builder.mutation<LoginResponse, FormData>({
            query: (formData) => ({
                url: "/auth/social/social-login/",
                method: "POST",
                body: formData,
            }),
            transformResponse: (response: any): LoginResponse => {
                const userData = response.user?.user || response.user || response.data?.user;
                const profileData = response.user?.profile || response.profile;
                const tokens = response.user?.tokens || response.tokens || response.data;
                const access = response.access || tokens?.access || tokens?.access_token || tokens?.accessToken;
                const refresh = response.refresh || tokens?.refresh || tokens?.refresh_token || tokens?.refreshToken;

                return {
                    ...response,
                    data: {
                        user: {
                            ...userData,
                            ...profileData
                        },
                        accessToken: access,
                        refreshToken: refresh
                    }
                };
            },
            invalidatesTags: ["User"],
        }),

        changePassword: builder.mutation<ApiResponseBase, ChangePasswordRequest>({
            query: (data) => {
                const formData = new FormData();
                formData.append("new_password", data.new_password);
                formData.append("confirm_password", data.confirm_password);
                return {
                    url: "/auth/change-password/",
                    method: "PATCH",
                    body: formData,
                };
            },
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
    useUpdateProfileAuthMutation,
    useSocialLoginMutation,
    useChangePasswordMutation,
} = authApi;
