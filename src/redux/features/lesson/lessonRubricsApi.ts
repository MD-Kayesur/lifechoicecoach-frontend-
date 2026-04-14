import { baseApi } from "@/redux/hooks/baseApi";

export interface RubricCriteria {
    id: number;
    title: string;
    description: string;
    max_score: number;
    weightage: number;
}

export interface LessonRubric {
    id: number;
    title: string;
    description: string;
    difficulty_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    competency: number;
    criteria: RubricCriteria[];
    created_at: string;
    updated_at: string;
}

export interface LessonRubricParams {
    search?: string;
    ordering?: string;
    difficulty_level?: string;
    competency_id?: number;
}

export const lessonRubricsApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all assessment rubrics
        getLessonRubrics: builder.query<LessonRubric[], LessonRubricParams | void>({
            query: (params) => ({
                url: "/lesson/rubrics/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["LessonRubric"],
        }),

        // Get rubric by competency ID
        getLessonRubricsByCompetency: builder.query<LessonRubric[], { competency_id: number; search?: string; ordering?: string }>({
            query: ({ competency_id, ...params }) => ({
                url: `/lesson/rubrics/by-competency/${competency_id}/`,
                method: "GET",
                params,
            }),
            providesTags: ["LessonRubric"],
        }),

        // Get specific assessment rubric details
        getLessonRubricById: builder.query<LessonRubric, number>({
            query: (id) => ({
                url: `/lesson/rubrics/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "LessonRubric", id }],
        }),
    }),
});

export const {
    useGetLessonRubricsQuery,
    useGetLessonRubricsByCompetencyQuery,
    useGetLessonRubricByIdQuery,
} = lessonRubricsApi;
