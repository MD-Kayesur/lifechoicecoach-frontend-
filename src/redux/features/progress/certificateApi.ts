import { baseApi } from "@/redux/hooks/baseApi";

export interface Certificate {
    id: string | number;
    certificate_number: string;
    recipient_name: string;
    credential_name: string;
    issue_date: string;
    expiry_date?: string | null;
    verification_url?: string;
    is_valid: boolean;
    image?: string | null;
    file?: string | null;
}

export interface CertificateListParams {
    search?: string;
    ordering?: string;
}

export interface CertificateVerifyResponse {
    is_valid: boolean;
    certificate: Certificate;
    verification_time: string;
}

export interface CertificatesResponse {
    success: boolean;
    message: string;
    certificates: Certificate[];
}

export const certificateApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all certificates for current user
        getCertificates: builder.query<CertificatesResponse, CertificateListParams | void>({
            query: (params) => ({
                url: "/progress/user/certificates/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Certificate"],
        }),

        // Verify a certificate by certificate number
        verifyCertificate: builder.query<CertificateVerifyResponse, { certificate_number: string; search?: string; ordering?: string }>({
            query: ({ certificate_number, ...params }) => ({
                url: `/progress/user/certificates/verify/${certificate_number}/`,
                method: "GET",
                params,
            }),
            providesTags: (result, error, { certificate_number }) => [{ type: "Certificate", id: certificate_number }],
        }),

        // Get specific certificate details
        getCertificateById: builder.query<Certificate, string | number>({
            query: (id) => ({
                url: `/progress/user/certificates/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Certificate", id }],
        }),

        // Get certificate template
        getCertificateTemplate: builder.query<{ success: boolean; message: string; data: { certificate_template: string }; error: boolean }, void>({
            query: () => ({
                url: "/settings/certificate-template/public/",
                method: "GET",
            }),
            providesTags: ["CertificateTemplate"],
        }),
    }),
});

export const {
    useGetCertificatesQuery,
    useVerifyCertificateQuery,
    useGetCertificateByIdQuery,
    useGetCertificateTemplateQuery,
} = certificateApi;
