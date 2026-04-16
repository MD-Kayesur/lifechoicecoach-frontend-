import { baseApi } from "@/redux/hooks/baseApi";

export interface Competency {
    id: number;
    code: number | string;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface MicroCredential {
    id: number;
    micro_credential: string;
    source: string;
    level: string;
    competency_count: number;
    competencies: Competency[];
}

export interface Domain {
    id: number;
    domain: string;
    source: string;
    no_of_MCs: number;
    total_competencies: number;
    context_Focus: string;
    total_credentials: number;
    micro_credentials: MicroCredential[];
}

// Fixed type mapping for consistency with API response structure
export interface DomainHierarchy {
    id: number;
    domain: string;
    source: string;
    no_of_MCs: number;
    total_competencies: number;
    context_Focus: string;
    total_credentials: number;
    micro_credentials: MicroCredential[];
}

export interface LessonCompetenciesResponse {
    success: boolean;
    message: string;
    data: {
        domains: DomainHierarchy[];
    };
}

export interface LessonCompetenciesParams {
    domain_id?: number;
    micro_credential_id?: number;
    competency_id?: number;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    source?: string;
    search?: string;
    order_by?: string;
}

export const lessonCompetenciesApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all domains with hierarchical competency data
        getLessonCompetencies: builder.query<LessonCompetenciesResponse, LessonCompetenciesParams | void>({
            query: (params) => ({
                url: "/lesson/competencies/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["LessonCompetency"],
        }),
    }),
});

export const {
    useGetLessonCompetenciesQuery,
} = lessonCompetenciesApi;
