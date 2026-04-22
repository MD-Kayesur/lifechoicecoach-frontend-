import { baseApi } from "@/redux/hooks/baseApi";

export interface PractitionerPassport {
    id: number;
    user_email: string;
    user_name: string;
    practitioner_id: string;
    public_profile_url: string;
    total_credentials_earned: number;
    total_ects_accumulated: number;
    total_competencies_mastered: number;
    is_public: boolean;
    created_at: string;
    updated_at: string;
    badges: number;
    certificates: number;
    degree_progress: number;
}

export interface PassportResponse {
    success: boolean;
    message: string;
    passport: PractitionerPassport;
    error: boolean;
}

export interface PassportParams {
    search?: string;
    ordering?: string;
}

export const practitionerPassportApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get current user's practitioner passport
        getMyPassport: builder.query<PassportResponse, PassportParams | void>({
            query: (params) => ({
                url: "/progress/passport/my-passport/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Passport"],
        }),

        // Get public passport by practitioner ID
        getPublicPassport: builder.query<PassportResponse, { practitioner_id: string; search?: string; ordering?: string }>({
            query: ({ practitioner_id, ...params }) => ({
                url: `/progress/passport/public/${practitioner_id}/`,
                method: "GET",
                params,
            }),
            providesTags: (result, error, { practitioner_id }) => [{ type: "Passport", id: practitioner_id }],
        }),

        // Update passport visibility
        updatePassportVisibility: builder.mutation<PassportResponse, { is_public: boolean }>({
            query: (data) => ({
                url: "/progress/passport/update-visibility/",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Passport"],
        }),
    }),
});

export const {
    useGetMyPassportQuery,
    useGetPublicPassportQuery,
    useUpdatePassportVisibilityMutation,
} = practitionerPassportApi;
