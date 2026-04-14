import { baseApi } from "@/redux/hooks/baseApi";

export interface Notification {
    id: string | number;
    title: string;
    message: string;
    notification_type: string;
    is_read: boolean;
    created_at: string;
    link?: string | null;
}

export interface NotificationListParams {
    search?: string;
    ordering?: string;
}

export const notificationApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all notifications for current user
        getNotifications: builder.query<Notification[], NotificationListParams | void>({
            query: (params) => ({
                url: "/notifications/notifications/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Notification"],
        }),

        // Get specific notification details
        getNotificationById: builder.query<Notification, string | number>({
            query: (id) => ({
                url: `/notifications/notifications/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Notification", id }],
        }),
    }),
});

export const {
    useGetNotificationsQuery,
    useGetNotificationByIdQuery,
} = notificationApi;
