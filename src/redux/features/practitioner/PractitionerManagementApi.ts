import { baseApi } from "@/redux/hooks/baseApi";

export interface EarnedCredential {
    id: number;
    name: string;
    earned_date: string;
    certificate_id: string;
    badge_url: string;
    ects: number;
    level: number;
    domain?: string;
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
    category?: string;
}

export interface DashboardOverview {
    total_earned_credentials: number;
    total_ects: number;
    active_mc_count: number;
    points: number;
    rank: string;
    subscription_status: string;
    competencies_verified?: number;
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

export interface EnrolledMC {
    id: number;
    name: string;
    status: string;
    passed_competency_count: number;
    total_competency_count: number;
    enrollment_date: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    total_count?: number;
    [key: string]: any;
}

export interface EarnedCredentialsResponse extends ApiResponse<EarnedCredential[]> {
    credentials: EarnedCredential[];
}

export interface CompletedCredentialsResponse extends ApiResponse<any[]> {
    credentials: any[];
}

export interface ECTSAccumulationResponse extends ApiResponse<ECTSAccumulation> {
    ects_data: ECTSAccumulation;
}

export interface EnrolledMCsResponse extends ApiResponse<EnrolledMC[]> {
    micro_credentials: EnrolledMC[];
}

export interface InProgressMCsResponse extends ApiResponse<InProgressMC[]> {
    in_progress: InProgressMC[];
}

export interface DashboardOverviewResponse extends ApiResponse<DashboardOverview> {
    dashboard: DashboardOverview;
}

export interface SessionHistoryResponse extends ApiResponse<SessionHistory[]> {
    sessions: SessionHistory[];
}

export const PractitionerManagementApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all earned micro-credentials with certificates and badges
        getEarnedCredentials: builder.query<EarnedCredentialsResponse, void>({
            query: () => ({
                url: "/practitioner/dashboard/earned-credentials/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get all micro-credentials where user passed all competencies
        getCompletedCredentials: builder.query<CompletedCredentialsResponse, void>({
            query: () => ({
                url: "/practitioner/dashboard/completed-credentials/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get total ECTS accumulated and degree progress
        getECTSAccumulation: builder.query<ECTSAccumulationResponse, void>({
            query: () => ({
                url: "/practitioner/dashboard/ects-accumulation/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get all micro-credentials bought or enrolled by the user
        getEnrolledMCs: builder.query<EnrolledMCsResponse, void>({
            query: () => ({
                url: "/practitioner/dashboard/enrolled-mcs/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get all micro-credentials currently in progress
        getInProgressMCs: builder.query<InProgressMCsResponse, void>({
            query: () => ({
                url: "/practitioner/dashboard/in-progress/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get complete dashboard overview with key statistics
        getDashboardOverview: builder.query<DashboardOverviewResponse, void>({
            query: () => ({
                url: "/practitioner/dashboard/overview/",
                method: "GET",
            }),
            providesTags: ["Practitioner"],
        }),

        // Get recent learning session history
        getSessionHistory: builder.query<SessionHistoryResponse, { limit?: number } | void>({
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
    useGetCompletedCredentialsQuery,
    useGetECTSAccumulationQuery,
    useGetEnrolledMCsQuery,
    useGetInProgressMCsQuery,
    useGetDashboardOverviewQuery,
    useGetSessionHistoryQuery,
    useGetSubscriptionStatusQuery,
} = PractitionerManagementApi;

