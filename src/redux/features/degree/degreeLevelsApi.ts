import { baseApi } from "@/redux/hooks/baseApi";

export interface EQFLevel {
    id: number;
    level: string;
    name: string;
    min_mc_required: number;
    max_mc_required: number;
    min_ects_required: number;
    max_ects_required: number;
    mc_range: string;
    ects_range: string;
    description: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface EQFLevelsResponse {
    success: boolean;
    message: string;
    eqf_levels: EQFLevel[];
    error: boolean;
}

export interface EQFLevelDetailResponse {
    success: boolean;
    message: string;
    eqf_level: EQFLevel;
    error: boolean;
}

export const degreeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEqfLevels: builder.query<EQFLevelsResponse, void>({
            query: () => "/degree/eqf-levels/",
            providesTags: ["DegreeLevel"],
        }),
        getEqfLevelById: builder.query<EQFLevelDetailResponse, number>({
            query: (id) => `/degree/eqf-levels/${id}/`,
            providesTags: (result, error, id) => [{ type: "DegreeLevel", id }],
        }),
    }),
});

export const { useGetEqfLevelsQuery, useGetEqfLevelByIdQuery } = degreeApi;
