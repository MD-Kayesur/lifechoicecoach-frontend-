import { baseApi } from "@/redux/hooks/baseApi";

export interface PractitionerPassport {
    practitioner_id: string;
    full_name: string;
    is_public: boolean;
    earned_micro_credentials: any[];
    earned_badges: any[];
    completed_pathways: any[];
    total_competencies_mastered: number;
    last_updated: string;
}

export interface PassportParams {
    search?: string;
    ordering?: string;
}

export const practitionerPassportApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get current user's practitioner passport
        getMyPassport: builder.query<PractitionerPassport, PassportParams | void>({
            query: (params) => ({
                url: "/progress/passport/my-passport/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Passport"],
        }),

        // Get public passport by practitioner ID
        getPublicPassport: builder.query<PractitionerPassport, { practitioner_id: string; search?: string; ordering?: string }>({
            query: ({ practitioner_id, ...params }) => ({
                url: `/progress/passport/public/${practitioner_id}/`,
                method: "GET",
                params,
            }),
            providesTags: (result, error, { practitioner_id }) => [{ type: "Passport", id: practitioner_id }],
        }),

        // Update passport visibility
        updatePassportVisibility: builder.mutation<PractitionerPassport, { is_public: boolean }>({
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
