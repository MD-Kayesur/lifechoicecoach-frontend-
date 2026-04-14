import { baseApi } from "@/redux/hooks/baseApi";

export interface EnrollmentCheckResponse {
    can_enroll: boolean;
    reason?: string;
    details?: any;
    status?: string;
}

export interface AccessCheckResponse {
    has_access: boolean;
    valid_until?: string;
    enrollment_id?: number;
    details?: any;
}

export const enrollmenttestApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Check if user can enroll in a micro-credential
        checkCanEnroll: builder.query<EnrollmentCheckResponse, number>({
            query: (mc_id) => ({
                url: `/enrollment/test/can-enroll/${mc_id}/`,
                method: "GET",
            }),
            providesTags: (result, error, mc_id) => [{ type: "EnrollmentTest", id: `CAN_${mc_id}` }],
        }),

        // Check if user has access to a specific micro-credential
        checkHasAccess: builder.query<AccessCheckResponse, number>({
            query: (mc_id) => ({
                url: `/enrollment/test/has-access/${mc_id}/`,
                method: "GET",
            }),
            providesTags: (result, error, mc_id) => [{ type: "EnrollmentTest", id: `HAS_${mc_id}` }],
        }),
    }),
});

export const {
    useCheckCanEnrollQuery,
    useCheckHasAccessQuery,
} = enrollmenttestApi;
