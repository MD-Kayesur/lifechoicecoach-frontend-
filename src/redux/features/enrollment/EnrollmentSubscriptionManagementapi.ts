import { baseApi } from "@/redux/hooks/baseApi";

export interface SubscriptionDetail {
    id: number;
    plan_type: string;
    status: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
    cancel_at_period_end: boolean;
}

export interface CreateSubscriptionRequest {
    plan_type: string;
    payment_method_id: string;
}

export interface UpgradeSubscriptionRequest {
    new_plan_type: string;
    payment_method_id: string;
}

export interface UpgradeOption {
    plan_type: string;
    name: string;
    price: number;
    currency: string;
}

export const EnrollmentSubscriptionManagementapi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get current user's subscription details
        getSubscription: builder.query<SubscriptionDetail, void>({
            query: () => ({
                url: "/enrollment/subscription/",
                method: "GET",
            }),
            providesTags: ["Subscription"],
        }),

        // Create a new subscription
        createSubscription: builder.mutation<SubscriptionDetail, CreateSubscriptionRequest>({
            query: (body) => ({
                url: "/enrollment/subscription/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Subscription", "User"],
        }),

        // Cancel subscription
        cancelSubscription: builder.mutation<any, void>({
            query: () => ({
                url: "/enrollment/subscription/cancel/",
                method: "DELETE",
            }),
            invalidatesTags: ["Subscription"],
        }),

        // Get available upgrade options
        getUpgradeOptions: builder.query<UpgradeOption[], void>({
            query: () => ({
                url: "/enrollment/subscription/upgrade-options/",
                method: "GET",
            }),
            providesTags: ["Subscription"],
        }),

        // Upgrade subscription plan
        upgradeSubscription: builder.mutation<SubscriptionDetail, UpgradeSubscriptionRequest>({
            query: (body) => ({
                url: "/enrollment/subscription/upgrade/",
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["Subscription", "User"],
        }),
    }),
});

export const {
    useGetSubscriptionQuery,
    useCreateSubscriptionMutation,
    useCancelSubscriptionMutation,
    useGetUpgradeOptionsQuery,
    useUpgradeSubscriptionMutation,
} = EnrollmentSubscriptionManagementapi;
