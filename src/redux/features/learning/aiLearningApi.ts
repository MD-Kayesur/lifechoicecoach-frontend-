import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const aiBaseURL = process.env.NEXT_PUBLIC_API_URL_AI || "http://54.151.241.98";

export const aiLearningApi = createApi({
    reducerPath: "aiLearningApi",
    baseQuery: fetchBaseQuery({
        baseUrl: aiBaseURL,
        prepareHeaders: (headers) => {
            headers.set("Accept", "application/json");
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        startAiSession: builder.mutation<any, { micro_credential_id: number; competency_id: number; domain_id: number }>({
            query: (data) => {
                const token = Cookies.get("accessToken") || "";
                console.log("data", data, "token", token);
                return {
                    url: "/backend/learning/sessions/start",
                    method: "POST",
                    body: {
                        ...data,
                        auth_token: token,
                    },
                };
            },
        }),
        interactAiSession: builder.mutation<any, { micro_credential_id: number; competency_id: number; domain_id: number; user_input: string }>({
            query: (data) => {
                const token = Cookies.get("accessToken") || "";
                return {
                    url: "/backend/learning/sessions/interact",
                    method: "POST",
                    body: {
                        ...data,
                        auth_token: token,
                    },
                };
            },
        }),
    }),
});

export const { useStartAiSessionMutation, useInteractAiSessionMutation } = aiLearningApi;
