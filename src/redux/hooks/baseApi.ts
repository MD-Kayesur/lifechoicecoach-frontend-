/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

const rawBaseQuery = fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        // Prefer token from Redux state, fallback to cookies
        const token = (getState() as any).auth?.token || Cookies.get("accessToken");

        if (token && token.trim() !== "") {
            headers.set("Authorization", `Bearer ${token}`);
        }

        headers.set("Accept", "application/json");


        return headers;
    },
});

const baseQueryWithRefresh: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);

    // If 401 Unauthorized, attempt to refresh the token
    if (result.error?.status === 401) {
        const refreshToken = Cookies.get("refresh") || Cookies.get("refreshToken")

        if (refreshToken) {
            const refreshResult: any = await rawBaseQuery(
                {
                    url: "/auth/refresh-token", // Change this if your refresh endpoint is different
                    method: "POST",
                    body: { refreshToken, refresh: refreshToken },
                },
                api,
                extraOptions
            );

            // Handle various possible token response shapes
            const newData = refreshResult?.data || refreshResult;
            const newAccessToken = newData?.access_token || newData?.accessToken || newData?.access;
            const newRefreshToken = newData?.refresh_token || newData?.refreshToken || newData?.refresh;

            if (newAccessToken) {
                // Save new tokens to cookies
                Cookies.set("accessToken", newAccessToken);
                if (newRefreshToken) {
                    Cookies.set("refreshToken", newRefreshToken);
                }

                // Retry the original request with the new token
                result = await rawBaseQuery(args, api, extraOptions);
            } else {
                // Refresh failed, do not auto-logout as per user request
                console.error("Token refresh failed");
            }
        } else {
            // No refresh token available, do not auto-logout as per user request
            console.error("No refresh token available for 401 error");
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefresh,
    tagTypes: ["User", "Dashboard", "Credentials", "DegreeLevel", "DegreePathway", "SubscriptionPlan", "EnrollmentTest", "Payment", "LessonCompetency", "LessonRubric"],
    endpoints: () => ({}),
});
