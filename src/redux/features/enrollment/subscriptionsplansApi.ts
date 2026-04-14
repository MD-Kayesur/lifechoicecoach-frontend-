import { baseApi } from "@/redux/hooks/baseApi";

export interface SubscriptionPlan {
    id: number;
    name: string;
    description: string;
    price: string | number;
    duration_months?: number;
    features?: string[];
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface SubscriptionPlansParams {
    search?: string;
    ordering?: string;
}

export const subscriptionsplansApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all available subscription plans
        getSubscriptionPlans: builder.query<SubscriptionPlan[], SubscriptionPlansParams | void>({
            query: (params) => ({
                url: "/enrollment/plans/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["SubscriptionPlan"],
        }),

        // Get specific subscription plan details
        getSubscriptionPlanById: builder.query<SubscriptionPlan, number>({
            query: (id) => ({
                url: `/enrollment/plans/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "SubscriptionPlan", id }],
        }),
    }),
});

export const {
    useGetSubscriptionPlansQuery,
    useGetSubscriptionPlanByIdQuery,
} = subscriptionsplansApi;
