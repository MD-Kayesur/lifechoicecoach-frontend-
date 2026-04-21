import { baseApi } from "@/redux/hooks/baseApi";

export interface Enrollment {
    id: number;
    micro_credential_id: number;
    micro_credential_name: string;
    enrollment_date: string;
    access_type: "subscription" | "pay_per_credential";
    is_active: boolean;
    expiry_date?: string | null;
}

export interface BuyCredentialRequest {
    micro_credential_id: number;
    payment_method_id: string;
}

export interface EnrollmentWithSubscriptionRequest {
    micro_credential_id: number;
}

export interface CheckAccessResponse {
    has_access: boolean;
    enrollment?: Enrollment;
}

export const EnrollmentManagementapi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all user's enrollments
        getEnrollments: builder.query<Enrollment[], { access_type?: string } | void>({
            query: (params) => ({
                url: "/enrollment/enrollments/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Enrollment"],
        }),

        // Buy a single micro-credential
        buyCredential: builder.mutation<any, BuyCredentialRequest>({
            query: (body) => ({
                url: "/enrollment/enrollments/buy-credential/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Enrollment"],
        }),

        // Check access to a specific micro-credential
        checkAccess: builder.query<CheckAccessResponse, number>({
            query: (mcId) => ({
                url: `/enrollment/enrollments/check-access/${mcId}/`,
                method: "GET",
            }),
            providesTags: (result, error, mcId) => [{ type: "Enrollment", id: `check-${mcId}` }],
        }),

        // Enroll in a micro-credential using active subscription
        enrollWithSubscription: builder.mutation<any, EnrollmentWithSubscriptionRequest>({
            query: (body) => ({
                url: "/enrollment/enrollments/enroll-with-subscription/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Enrollment"],
        }),
    }),
});

export const {
    useGetEnrollmentsQuery,
    useBuyCredentialMutation,
    useCheckAccessQuery,
    useEnrollWithSubscriptionMutation,
} = EnrollmentManagementapi;
