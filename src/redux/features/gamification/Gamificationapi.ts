import { baseApi } from "@/redux/hooks/baseApi";

export interface PointRecord {
    id: number;
    amount: number;
    reason: string;
    earned_at: string;
    source_id?: number | string;
    source_type?: string;
}

export interface TotalPointsResponse {
    total_points: number;
    rank?: string;
    next_rank_at?: number;
}

export interface SessionProgress {
    session_id: number;
    completion_percentage: number;
    current_lesson_id: number;
    last_accessed: string;
    is_completed: boolean;
}

export interface SessionSummary {
    id: number | string;
    session_id: number;
    mc_id: number;
    mc_name: string;
    score: number;
    time_spent: number; // in seconds
    completed_at: string;
    points_earned: number;
}

export const Gamificationapi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all points earned by current user
        getPoints: builder.query<PointRecord[], { search?: string, ordering?: string } | void>({
            query: (params) => ({
                url: "/gamification/points/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Points"],
        }),

        // Get total points for current user
        getTotalPoints: builder.query<TotalPointsResponse, { search?: string, ordering?: string } | void>({
            query: (params) => ({
                url: "/gamification/points/total/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Points"],
        }),

        // Get progress for a specific session
        getSessionProgress: builder.query<SessionProgress, number>({
            query: (sessionId) => ({
                url: `/gamification/progress/${sessionId}/`,
                method: "GET",
            }),
            providesTags: (result, error, sessionId) => [{ type: "Points", id: `progress-${sessionId}` }],
        }),

        // Get all session summaries for current user
        getSummaries: builder.query<SessionSummary[], { search?: string, ordering?: string } | void>({
            query: (params) => ({
                url: "/gamification/summaries/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Summary"],
        }),

        // Get specific session summary
        getSummaryById: builder.query<SessionSummary, string | number>({
            query: (id) => ({
                url: `/gamification/summaries/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Summary", id }],
        }),
    }),
});

export const {
    useGetPointsQuery,
    useGetTotalPointsQuery,
    useGetSessionProgressQuery,
    useGetSummariesQuery,
    useGetSummaryByIdQuery,
} = Gamificationapi;
