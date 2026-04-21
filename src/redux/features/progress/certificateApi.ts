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

export const certificateApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // Get all certificates for current user
        getCertificates: builder.query<Certificate[], CertificateListParams | void>({
            query: (params) => ({
                url: "/progress/certificates/",
                method: "GET",
                params: params || {},
            }),
            providesTags: ["Certificate"],
        }),

        // Verify a certificate by certificate number
        verifyCertificate: builder.query<CertificateVerifyResponse, { certificate_number: string; search?: string; ordering?: string }>({
            query: ({ certificate_number, ...params }) => ({
                url: `/progress/certificates/verify/${certificate_number}/`,
                method: "GET",
                params,
            }),
            providesTags: (result, error, { certificate_number }) => [{ type: "Certificate", id: certificate_number }],
        }),

        // Get specific certificate details
        getCertificateById: builder.query<Certificate, string | number>({
            query: (id) => ({
                url: `/progress/certificates/${id}/`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Certificate", id }],
        }),
    }),
});

export const {
    useGetCertificatesQuery,
    useVerifyCertificateQuery,
    useGetCertificateByIdQuery,
} = certificateApi;
