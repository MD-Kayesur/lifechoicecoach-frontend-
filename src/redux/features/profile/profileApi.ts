import { baseApi } from "@/redux/hooks/baseApi";
import { ProfileResponse, ProfileUpdateRequest, ProfileUpdateResponse } from "@/redux/types/profile.types";
import { ApiResponseBase } from "@/redux/types/auth.types";

export const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<ProfileResponse, void>({
            query: () => ({
                url: "/auth/profile/me/",
                method: "GET",
            }),
            providesTags: ["User"],
        }),

        updateProfile: builder.mutation<ProfileUpdateResponse, ProfileUpdateRequest>({
            query: (data) => {
                const formData = new FormData();
                if (data.first_name) formData.append("first_name", data.first_name);
                if (data.last_name) formData.append("last_name", data.last_name);
                if (data.phone_number) formData.append("phone_number", data.phone_number);
                if (data.dp_image) formData.append("dp_image", data.dp_image);

                return {
                    url: "/auth/profile/update/",
                    method: "PATCH",
                    body: formData,
                };
            },
            invalidatesTags: ["User"],
        }),

        deleteProfile: builder.mutation<ApiResponseBase, void>({
            query: () => ({
                url: "/auth/profile/delete/",
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useGetProfileQuery,
    useUpdateProfileMutation,
    useDeleteProfileMutation,
} = profileApi;
