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
    success: boolean;
    message: string;
    access: {
        can_access: boolean;
        message: string;
        micro_credential_id: string | number;
    };
    error: boolean;
}

export interface EnrollmentPricing {
    id: number;
    price: string;
    currency: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface EnrollmentPricingResponse {
    success: boolean;
    message: string;
    pricing: EnrollmentPricing;
    error: boolean;
}

export interface EnrollmentCreateResponse {
    success: boolean;
    message: string;
    error: boolean;
    status?: number;
    client_secret?: string;
    enrollment: {
        id: number;
        user_email: string;
        micro_credential: number;
        micro_credential_name: string;
        domain_name: string;
        access_granted_at: string;
        access_expires_at: string | null;
        is_active: boolean;
        attempts_used: number;
        max_attempts: number;
        status: string;
        completed_at: string | null;
        can_access: {
            status: boolean;
            message: string;
        };
        payment_amount: number;
    };
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

        // Buy a single micro-credential (Lifetime Access)
        buyCredential: builder.mutation<EnrollmentCreateResponse, BuyCredentialRequest>({
            query: (body) => ({
                url: "/enrollment/enrollments/",
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

        // Get current micro-credential pricing
        getEnrollmentPricing: builder.query<EnrollmentPricingResponse, void>({
            query: () => ({
                url: "/enrollment/enrollments/pricing/",
                method: "GET",
            }),
            providesTags: ["Enrollment"],
        }),
    }),
});

export const {
    useGetEnrollmentsQuery,
    useBuyCredentialMutation,
    useCheckAccessQuery,
    useEnrollWithSubscriptionMutation,
    useGetEnrollmentPricingQuery,
} = EnrollmentManagementapi;
