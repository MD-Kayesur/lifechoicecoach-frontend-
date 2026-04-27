import { baseApi } from "@/redux/hooks/baseApi";

export interface PartnershipInquiryData {
    full_name: string;
    email: string;
    organisation: string;
    domain_name: string;
}

export interface PartnershipInquiryResponse {
    success: boolean;
    message: string;
    inquiry?: {
        id: number;
    };
    error: boolean;
}

export const partnershipApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createAcademicInquiry: builder.mutation<PartnershipInquiryResponse, PartnershipInquiryData>({
            query: (data) => ({
                url: "/partnership/academic/",
                method: "POST",
                body: data,
            }),
        }),
        createCorporateInquiry: builder.mutation<PartnershipInquiryResponse, PartnershipInquiryData>({
            query: (data) => ({
                url: "/partnership/corporate/",
                method: "POST",
                body: data,
            }),
        }),
        createWhiteLabelInquiry: builder.mutation<PartnershipInquiryResponse, PartnershipInquiryData>({
            query: (data) => ({
                url: "/partnership/white-label/",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useCreateAcademicInquiryMutation,
    useCreateCorporateInquiryMutation,
    useCreateWhiteLabelInquiryMutation,
} = partnershipApi;
