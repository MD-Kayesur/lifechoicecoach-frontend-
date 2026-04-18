import { baseApi } from "@/redux/hooks/baseApi";

export interface DegreeProgress {
    id: number;
    user_email: string;
    degree_name: string;
    eqf_level: string;
    total_mc_required: number;
    mc_completed: number;
    total_ects_required: number;
    ects_accumulated: number;
    progress_percentage: number;
    started_at: string;
    completed_at: string | null;
    is_completed: boolean;
}

export interface DegreeProgressInput {
    degree_name: string;
    eqf_level: string;
    total_mc_required: number;
    mc_completed: number;
    total_ects_required: number;
    ects_accumulated: number;
    is_completed: boolean;
}

export interface DegreeProgressListResponse {
    success: boolean;
    message: string;
    degree_progress: DegreeProgress[];
    error: boolean;
}

export interface DegreeProgressSingleResponse {
    success: boolean;
    message: string;
    degree_progress: DegreeProgress;
    error: boolean;
}

export const degreeProgressApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all degree progress for current user
        getDegreeProgressList: builder.query<DegreeProgressListResponse, { search?: string; ordering?: string } | void>({
            query: (params) => ({
                url: "/progress/degree-progress/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["DegreeProgress"],
        }),

        // Start tracking a new degree program
        createDegreeProgress: builder.mutation<DegreeProgressSingleResponse, DegreeProgressInput>({
            query: (data) => ({
                url: "/progress/degree-progress/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["DegreeProgress"],
        }),

        // Get specific degree progress details
        getDegreeProgressById: builder.query<DegreeProgressSingleResponse, string | number>({
            query: (id) => ({
                url: `/progress/degree-progress/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "DegreeProgress", id }],
        }),
    }),
});

export const {
    useGetDegreeProgressListQuery,
    useCreateDegreeProgressMutation,
    useGetDegreeProgressByIdQuery,
} = degreeProgressApi;
