import { baseApi } from "@/redux/hooks/baseApi";

export interface Badge {
    id: string | number;
    name: string;
    description: string;
    image: string;
    earned_at?: string;
    verification_code?: string;
    criteria?: string;
    issuer?: string;
}

export interface BadgeListParams {
    search?: string;
    ordering?: string;
}

export interface BadgeVerifyResponse {
    is_valid: boolean;
    badge: Badge;
    recipient_name: string;
    issued_on: string;
}

export const progressbadgeapi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all badges for current user
        getBadges: builder.query<Badge[], BadgeListParams | void>({
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
    useGetBadgeByIdQuery,
} = progressbadgeapi;
