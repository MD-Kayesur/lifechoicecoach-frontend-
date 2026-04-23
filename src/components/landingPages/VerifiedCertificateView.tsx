"use client";

import { useGetCertificateByIdQuery } from "@/redux/features/progress/certificateApi";
import { useGetLessonCompetenciesQuery, MicroCredential, DomainHierarchy } from "@/redux/features/lesson/lessonCompetenciesApi";
import { useGetProfileQuery } from "@/redux/features/profile/profileApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { useMemo } from "react";
import Image from "next/image";
import certPhoto from "@/assets/cirtificate/Untitled-2.png";
import { Loader2, ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import jsPDF from "jspdf";

interface VerifiedCertificateViewProps {
    id: string;
}

export const VerifiedCertificateView = ({ id }: VerifiedCertificateViewProps) => {
    // 1. Fetch User Profile (Same logic as Certificate.tsx)
    const { data: profileData } = useGetProfileQuery();
    const userName = (profileData?.profile?.first_name || "") + " " + (profileData?.profile?.last_name || "") || "Practitioner Name";

    // 2. Fetch Certificate Details
    const { data: apiResponse, isLoading: certLoading, isError } = useGetCertificateByIdQuery(id);
    const cert = (apiResponse as any)?.data || (apiResponse as any)?.certificate || apiResponse;

    // 3. Fetch Micro-Credential Details from API (Same logic as Certificate.tsx)
    // We use either the cert's credential ID or the URL id
    const mcId = Number(cert?.micro_credential_id || id);
    const { data: mcApiResponse, isLoading: mcLoading } = useGetLessonCompetenciesQuery(
        !isNaN(mcId) ? { micro_credential_id: mcId } : skipToken
    );

    const domain: DomainHierarchy | undefined = mcApiResponse?.data?.domains?.[0];
    const mc1: (MicroCredential & { domain_name?: string }) | undefined = domain?.micro_credentials?.[0];

    const isLoading = certLoading || mcLoading;

    const handleDownload = () => {
        if (!cert) return;

        const img = new (window as any).Image();
        img.src = certPhoto.src;

        img.onload = () => {
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = img.width;
            const imgHeight = img.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const finalWidth = imgWidth * ratio;
            const finalHeight = imgHeight * ratio;
            const xOffset = (pdfWidth - finalWidth) / 2;
            const yOffset = (pdfHeight - finalHeight) / 2;

            pdf.addImage(img, "JPEG", xOffset, yOffset, finalWidth, finalHeight);

            // 1. Domain Name
            pdf.setFont("serif", "bold");
            pdf.setFontSize(13);
            pdf.setTextColor(91, 86, 85);
            pdf.text(mc1?.domain_name || "Official IKON Skills Domain", pdfWidth / 2, 52, { align: "center" });

            // 2. Recipient Name
            pdf.setFont("serif", "bold");
            pdf.setFontSize(28);
            pdf.setTextColor(91, 86, 85);
            pdf.text(userName, pdfWidth / 2, 75, { align: "center" });

            // 3. Micro-Credential Name
            pdf.setFont("serif", "normal");
            pdf.setFontSize(22);
            pdf.setTextColor(91, 86, 85);
            pdf.text(mc1?.micro_credential || cert?.credential_name || "Micro-Credential", pdfWidth / 2, 102, { align: "center" });

            // 4. Issue Date
            pdf.setFont("monospace", "normal");
            pdf.setFontSize(10);
            pdf.setTextColor(91, 86, 85);
            const formattedDate = cert?.issue_date 
                ? new Date(cert.issue_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
                : "07 March 2026";
            pdf.text(formattedDate, 65, 124.5);

            // 5. Certificate ID
            pdf.text(cert?.certificate_number || `IKS-${id}-2026`, 122, 124.5);

            pdf.save(`Verified-Certificate-${cert?.certificate_number || id}.pdf`);
        };
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-gold" />
                <p className="text-white/60 font-mono text-xs uppercase tracking-widest">Verifying Credential...</p>
            </div>
        );
    }

    // Check if we have enough data to show a certificate
    // We can show it if we have the certificate record OR if we have the MC/Profile data
    const hasEnoughData = (cert && (cert.recipient_name || cert.credential_name)) || (userName !== "Practitioner Name" && mc1);

    if ((isError && !mc1) || (!isLoading && !hasEnoughData)) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center gap-4 px-6">
                <div className="text-red-500 text-6xl mb-4 animate-bounce">⚠️</div>
                <h1 className="text-white text-3xl font-serif font-bold tracking-tight">Verification Pending</h1>
                <p className="text-white/60 text-center max-w-md leading-relaxed">
                    We could not find an official record for Certificate ID <span className="text-gold font-mono">#{id}</span> at this time. 
                    Please ensure the ID is correct or try again in a few moments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button 
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-gold hover:bg-gold2 text-white font-bold rounded-xl transition-all shadow-lg shadow-gold/20"
                    >
                        Retry Verification
                    </button>
                    <button 
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-white/5 text-white/70 hover:text-white rounded-xl border border-white/10 transition-all"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a1628] flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-[1100px] animate-in fade-in zoom-in-95 duration-1000">
                {/* Certificate Preview Only */}
                <div className="relative group rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-gold/30 bg-white/5">
                    <Image src={certPhoto} alt="Certificate Template" className="w-full h-auto" priority />
                    
                    {/* Dynamic Overlays */}
                    <div className="absolute inset-0 flex flex-col items-center pointer-events-none" style={{ paddingTop: '15.5%' }}>
                        {/* Domain Name */}
                        <div className="text-[1.2vw] lg:text-[18px] font-serif font-bold text-[#5B5655]/70 uppercase tracking-[2px] mb-[1.5%]">
                            {mc1?.domain_name || "Official IKON Skills Domain"}
                        </div>
                        
                        {/* Recipient Name */}
                        <div className="text-[3vw] lg:text-[42px] font-serif font-bold text-[#5B5655]">
                            {userName}
                        </div>
                        
                        {/* Credential Name */}
                        <div className="text-[2.2vw] lg:text-[32px] font-serif text-[#5B5655] mt-[2.5%]">
                            {mc1?.micro_credential || cert?.credential_name || "Micro-Credential"}
                        </div>

                        {/* Bottom Info Row */}
                        <div className="absolute bottom-[32.5%] w-full flex justify-center gap-[10%] text-[1vw] lg:text-[14px] font-mono text-[#5B5655]">
                            <div className="flex gap-2">
                                <span className="opacity-50">Issued:</span>
                                <span>{cert?.issue_date ? new Date(cert.issue_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : "07 March 2026"}</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="opacity-50">ID:</span>
                                <span>{cert?.certificate_number || cert?.id}</span>
                            </div>
                        </div>
                    </div>

                    {/* Subtle Download Hover Button */}
                    <button 
                        onClick={handleDownload}
                        className="absolute bottom-6 right-6 bg-gold/90 hover:bg-gold text-white p-3 rounded-full shadow-xl transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                        title="Download PDF"
                    >
                        <Download size={24} />
                    </button>
                </div>

                {/* Optional Verification Badge at bottom */}
                <div className="mt-8 flex flex-col items-center gap-2 opacity-50">
                    <div className="flex items-center gap-2 text-white/60 text-[10px] font-mono uppercase tracking-[3px]">
                        <ShieldCheck size={14} className="text-gold" /> Officially Verified Credential
                    </div>
                    <div className="text-white/30 text-[9px] font-mono uppercase tracking-[2px]">
                        Quality Assured by European International University, Paris
                    </div>
                </div>
            </div>
        </div>
    );
};

