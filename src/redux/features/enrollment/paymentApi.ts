import { baseApi } from "@/redux/hooks/baseApi";

export interface PaymentTransaction {
    id: number;
    amount: string | number;
    currency: string;
    status: string;
    transaction_id: string;
    plan_name?: string;
    created_at: string;
    payment_method?: string;
}

export const paymentApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all payment transactions for the current user
        getPayments: builder.query<PaymentTransaction[], void>({
            query: () => ({
                url: "/enrollment/payments/",
                method: "GET",
            }),
            providesTags: ["Payment"],
        }),
    }),
});

export const {
    useGetPaymentsQuery,
} = paymentApi;
