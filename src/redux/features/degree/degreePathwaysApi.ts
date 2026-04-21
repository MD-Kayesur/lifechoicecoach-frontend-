import { baseApi } from "@/redux/hooks/baseApi";

export interface DegreePathway {
    id: number;
    name: string;
    description: string;
    eqf_level: number | string;
    domain: number;
    created_at?: string;
    updated_at?: string;
    image?: string | null;
    required_mcs?: any[]; // For specific details
}

export interface DegreePathwaysListParams {
    search?: string;
    ordering?: string;
    eqf_level?: string;
    domain?: number;
}

export interface StackableViewResponse {
    [key: string]: DegreePathway[];
}

export interface MicroCredential {
    id: number;
    name: string;
    level: string;
    domain: string;
    sequence: number;
}

export interface Degree {
    id: number;
    name: string;
    degree_type: string;
    degree_level: string;
    eqf_level: number;
    co_endorser: string;
    mc_required: number;
    ects_required: number;
    required_micro_credentials_count: number;
    required_micro_credentials: MicroCredential[];
}

export interface DegreeType {
    id: number;
    title: string;
    level: string;
    description: string;
    total_degrees: number;
    degrees: Degree[];
}

export interface DegreeCatalog {
    total_degrees: number;
    degree_types: DegreeType[];
}

export interface DegreeCatalogResponse {
    success: boolean;
    message: string;
    degree_catalog: DegreeCatalog;
}

export interface DegreeCatalogParams {
    search?: string;
    ordering?: string;
    degree_type_id?: number;
    degree_type?: string;
    eqf_level?: number;
}

export const degreePathwaysApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all available degree pathways
        getDegreePathways: builder.query<DegreePathway[], DegreePathwaysListParams | void>({
            query: (params) => ({
                url: "/degree/pathways/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["DegreePathway"],
        }),

        // Get degree pathways by domain
        getDegreePathwaysByDomain: builder.query<DegreePathway[], { domain_id: number; search?: string; ordering?: string }>({
            query: ({ domain_id, ...params }) => ({
                url: `/degree/pathways/by-domain/${domain_id}/`,
                method: "GET",
                params,
            }),
            providesTags: ["DegreePathway"],
        }),

        // Get stackable view (grouped by EQF level)
        getStackableDegreePathways: builder.query<StackableViewResponse, { search?: string; ordering?: string } | void>({
            query: (params) => ({
                url: "/degree/pathways/stackable-view/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["DegreePathway"],
        }),

        // Get specific degree pathway details
        getDegreePathwayById: builder.query<DegreePathway, number>({
            query: (id) => ({
                url: `/degree/pathways/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "DegreePathway", id }],
        }),

        // Get degree catalog
        getDegreeCatalog: builder.query<DegreeCatalogResponse, DegreeCatalogParams | void>({
            query: (params) => ({
                url: "/degree/catalog/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["DegreePathway"],
        }),
    }),
});

export const {
    useGetDegreePathwaysQuery,
    useGetDegreePathwaysByDomainQuery,
    useGetStackableDegreePathwaysQuery,
    useGetDegreePathwayByIdQuery,
    useGetDegreeCatalogQuery,
} = degreePathwaysApi;
