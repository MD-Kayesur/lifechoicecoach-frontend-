import { baseApi } from "@/redux/hooks/baseApi";

export interface EarnedCredential {
    id: number;
    name: string;
    earned_date: string;
    certificate_id: string;
    badge_url: string;
    ects: number;
    level: number;
}

export interface ECTSAccumulation {
    total_ects: number;
    degree_progress_percentage: number;
    required_ects: number;
    remaining_ects: number;
}

export interface InProgressMC {
    id: number;
    name: string;
    progress_percentage: number;
    last_accessed: string;
    current_competency: string;
}

export interface DashboardOverview {
    total_earned_credentials: number;
    total_ects: number;
    active_mc_count: number;
    points: number;
    rank: string;
    subscription_status: string;
}

export interface SessionHistory {
    id: number;
    mc_name: string;
    competency_name: string;
    date: string;
    score: number;
    status: string;
}

export interface SubscriptionStatus {
    is_active: boolean;
    plan_name: string;
    start_date: string;
    expiry_date: string;
    auto_renew: boolean;
}

export const PractitionerManagementApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all earned micro-credentials with certificates and badges
        getEarnedCredentials: builder.query<EarnedCredential[], void>({
            query: () => ({
                url: "/practitioner/dashboard/earned-credentials/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get total ECTS accumulated and degree progress
        getECTSAccumulation: builder.query<ECTSAccumulation, void>({
            query: () => ({
                url: "/practitioner/dashboard/ects-accumulation/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get all micro-credentials currently in progress
        getInProgressMCs: builder.query<InProgressMC[], void>({
            query: () => ({
                url: "/practitioner/dashboard/in-progress/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get complete dashboard overview with key statistics
        getDashboardOverview: builder.query<DashboardOverview, void>({
            query: () => ({
                url: "/practitioner/dashboard/overview/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get recent learning session history
        getSessionHistory: builder.query<SessionHistory[], { limit?: number } | void>({
            query: (params) => ({
                url: "/practitioner/dashboard/session-history/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Practitioner"],
        }),

        // Get current subscription status and details
        getSubscriptionStatus: builder.query<SubscriptionStatus, void>({
            query: () => ({
                url: "/practitioner/dashboard/subscription-status/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),
    }),
});

export const {
    useGetEarnedCredentialsQuery,
    useGetECTSAccumulationQuery,
    useGetInProgressMCsQuery,
    useGetDashboardOverviewQuery,
    useGetSessionHistoryQuery,
    useGetSubscriptionStatusQuery,
} = PractitionerManagementApi;
