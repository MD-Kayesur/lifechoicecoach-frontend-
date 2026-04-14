import { baseApi } from "@/redux/hooks/baseApi";

export interface ProgressPassport {
    id: string | number;
    total_credentials_earned: number;
    total_ects_accumulated: number;
    total_competencies_mastered: number;
    is_public: boolean;
    practitioner_id?: string;
    last_updated?: string;
}

export interface ProgressPassportUpdatePayload {
    total_credentials_earned?: number;
    total_ects_accumulated?: number;
    total_competencies_mastered?: number;
    is_public?: boolean;
}

export const progressPassportApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get specific practitioner passport details
        getProgressPassportById: builder.query<ProgressPassport, string | number>({
            query: (id) => ({
                url: `/progress/passport/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "ProgressPassport", id }],
        }),

        // Update practitioner passport (Full Update)
        updateProgressPassport: builder.mutation<ProgressPassport, { id: string | number; data: ProgressPassportUpdatePayload }>({
            query: ({ id, data }) => ({
                url: `/progress/passport/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "ProgressPassport", id }],
        }),

        // Partial update practitioner passport
        partialUpdateProgressPassport: builder.mutation<ProgressPassport, { id: string | number; data: ProgressPassportUpdatePayload }>({
            query: ({ id, data }) => ({
                url: `/progress/passport/${id}/`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "ProgressPassport", id }],
        }),
    }),
});

export const {
    useGetProgressPassportByIdQuery,
    useUpdateProgressPassportMutation,
    usePartialUpdateProgressPassportMutation,
} = progressPassportApi;
