import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_API_URL ;

const rawBaseQuery = fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
        const token = Cookies.get("accessToken");
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }

        // Attempt to get CSRF token from cookies if present
        const csrfToken = Cookies.get("csrftoken");
        if (csrfToken) {
            headers.set("X-CSRFTOKEN", csrfToken);
        }

        return headers;
    },
});

const baseQueryWithRefresh: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        // Handle token refresh logic here if needed
        // For now, mirroring the cheesuschrusty logout behavior
        api.dispatch({ type: "auth/logout" });
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefresh,
    tagTypes: ["User", "Dashboard", "Credentials"],
    endpoints: () => ({}),
});
