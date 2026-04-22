import { baseApi } from "@/redux/hooks/baseApi";

export interface Badge {
    id: number;
    user_email: string;
    micro_credential: number;
    micro_credential_name: string;
    competency: number;
    competency_name: string | null;
    badge_type: string;
    issued_at: string;
    verification_code: string;
    is_verified: boolean;
    image?: string;
}

export interface BadgeListParams {
    search?: string;
    ordering?: string;
}

export interface BadgeVerifyResponse {
    success: boolean;
    message: string;
    is_valid: boolean;
    badge: Badge;
    recipient_name: string;
    issued_on: string;
}

export interface BadgesResponse {
    success: boolean;
    message: string;
    badges: Badge[];
    error: boolean;
}

export const progressbadgeapi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all badges for current user
        getBadges: builder.query<BadgesResponse, BadgeListParams | void>({
            query: (params) => ({
                url: "/progress/badges/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Badge"],
        }),

        // Verify a badge by verification code
        verifyBadge: builder.query<BadgeVerifyResponse, { verification_code: string; search?: string; ordering?: string }>({
            query: ({ verification_code, ...params }) => ({
                url: `/progress/badges/verify/${verification_code}/`,
                method: "GET",
                params,
            }),
            providesTags: (result, error, { verification_code }) => [{ type: "Badge", id: verification_code }],
        }),

        // Get specific badge details
        getBadgeById: builder.query<Badge, string | number>({
            query: (id) => ({
                url: `/progress/badges/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Badge", id }],
        }),
    }),
});

export const {
    useGetBadgesQuery,
    useVerifyBadgeQuery,
    useLazyVerifyBadgeQuery,
    useGetBadgeByIdQuery,
} = progressbadgeapi;
