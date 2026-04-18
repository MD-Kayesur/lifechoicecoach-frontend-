"use client";

import { useSearchParams } from "next/navigation";
import { MCS, DOMAINS } from "@/lib/data";
import Image from "next/image";
import certPhoto from "@/assets/images/PHOTO-2026-04-10-12-51-07.jpeg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useMemo } from "react";
import {
    useGetCertificateByIdQuery,
    useGetCertificatesQuery,
    useVerifyCertificateQuery
} from "@/redux/features/progress/certificateApi";
import { Loader2, AlertCircle } from "lucide-react";

export const Certificate = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "";

    // Fetch certificate by ID from search params
    const {
        data: certificate,
        isLoading: isCertLoading,
        isError: isCertError
    } = useGetCertificateByIdQuery(id, { skip: !id });

    // Fetch all certificates as fallback or for related data if needed
    const { data: allCertificates } = useGetCertificatesQuery(undefined, { skip: !!id });

    const displayCert = certificate || (allCertificates && allCertificates.length > 0 ? allCertificates[0] : null);

    // Verify current certificate if possible
    const {
        data: verificationData,
        isLoading: isVerifying
    } = useVerifyCertificateQuery(
        { certificate_number: displayCert?.certificate_number || "" },
        { skip: !displayCert?.certificate_number }
    );

    // Fallback to static data if no API data matches (for development/showcase)
    const staticMc = useMemo(() => {
        if (displayCert) return null;
        const sId = id || "01-01";
        return MCS.find(item => item.id === sId) || MCS[0];
    }, [displayCert, id]);

    const staticCategory = useMemo(() => {
        if (!staticMc) return null;
        return DOMAINS.find(d => d.id === staticMc.cat);
    }, [staticMc]);

    const certRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (!certRef.current) return;

        const canvas = await html2canvas(certRef.current, {
            scale: 2, // better quality
            backgroundColor: "#ffffff",
            useCORS: true
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(`${displayCert?.credential_name || staticMc?.name || "certificate"}.pdf`);
    };

    if (isCertLoading) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-12 h-12 text-gold animate-spin" />
                <p className="text-white/50 font-mono text-[10px] uppercase tracking-[4px]">Fetching Verified Credentials...</p>
            </div>
        );
    }

    if (isCertError && !staticMc) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center space-y-4 text-center px-6">
                <AlertCircle className="w-12 h-12 text-red-500 mb-2" />
                <h2 className="text-white text-xl font-bold">Certificate Not Found</h2>
                <p className="text-white/40 text-sm max-w-md">We couldn't retrieve the certificate details. This might be due to an invalid ID or a network issue.</p>
                <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-gold text-white rounded-lg font-bold text-sm">Retry Connection</button>
            </div>
        );
    }

    const certName = displayCert?.credential_name || staticMc?.name;
    const certRecipient = displayCert?.recipient_name || "Edward Roy Krishnan";
    const certNumber = displayCert?.certificate_number || `IKS-${staticMc?.id || "01-01"}-2026-4201`;
    const certId = displayCert?.id || staticMc?.id;
    const certDate = displayCert?.issue_date || "07 March 2026";
    const certIsValid = displayCert?.is_valid || (verificationData?.is_valid ?? true);

    return (
        <div id="page-certificate" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            <div className="cert-layout max-w-[1200px] mx-auto px-8 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
                <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="cert-bc text-sm text-white/50 hover:text-white mb-6 cursor-pointer flex items-center gap-2 transition-colors" onClick={() => window.location.href = `/sample-mc?id=${certId}`}>
                        ← Back to Credential
                    </div>
                    <div className="header mb-8">
                        <div className="eyebrow text-gold font-bold text-[10.5px] tracking-[2px] uppercase font-mono mb-2">
                            {displayCert ? "Verified IKON Certificate" : "Sample Micro-Credential Certificate"}
                        </div>
                        <h2 className="sec-h font-serif font-bold text-[26px] text-white leading-tight mb-4 ml-0">This is what your Proof of Skill looks like.</h2>
                        <p className="text-[13.5px] text-white/60 leading-relaxed max-w-[520px]">
                            Every IKON SKILLS™ Micro-Credential you earn generates a formal digital certificate quality assured by European International University, Paris — together with a digital badge for your IKON SKILLS™ Passport.
                        </p>
                    </div>

                    {/* Certificate Card */}
                    <div className="relative group perspective-1000">
                        <div ref={certRef} className="certificate bg-white border-2 border-gold rounded-[4px] relative overflow-hidden shadow-2xl transition-all duration-700">
                            <div className="cert-ob m-3 border-[1.5px] border-gold rounded-[2px] p-10 md:p-12 relative">
                                {/* Corners */}
                                <div className="cc absolute w-4 h-4 top-[-1px] left-[-1px] border-t-3 border-l-3 border-gold"></div>
                                <div className="cc absolute w-4 h-4 top-[-1px] right-[-1px] border-t-3 border-r-3 border-gold"></div>
                                <div className="cc absolute w-4 h-4 bottom-[-1px] left-[-1px] border-b-3 border-l-3 border-gold"></div>
                                <div className="cc absolute w-4 h-4 bottom-[-1px] right-[-1px] border-b-3 border-r-3 border-gold"></div>

                                {/* Recipient Photo */}
                                <div className="cert-recipient-photo absolute top-10 right-10 w-[90px] h-[115px] border-[1.5px] border-gold rounded-[2px] overflow-hidden grayscale hover:grayscale-0 transition-all shadow-sm z-10 hidden md:block">
                                    <Image
                                        src={certPhoto}
                                        alt={certRecipient}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="cert-hdr text-center pb-6 border-b border-gold/15 mb-8">
                                    <div className="cert-logo-row flex items-center justify-center gap-2 mb-2">
                                        <img src="https://ikonmalta.ac/IKON_LOGO_White_Color.png" alt="IKON" className="h-7 w-auto object-contain filter brightness-0 saturate-100 invert-[18%] sepia-[82%] saturate-[1200%] hue-rotate-[340deg] brightness-[0.85]" />
                                        <div className="cert-ln font-serif font-bold text-[21px] text-[#0B1F3A]">SKILLS<sup>™</sup></div>
                                    </div>
                                    <div className="cert-qa-line text-[10px] text-[#74798A] font-mono leading-relaxed">
                                        Quality Assured by European International University, Paris · UAI 0756213W · 59 Rue Lamarck, 75018 Paris
                                    </div>
                                </div>

                                <div className="cert-body text-center mb-8">
                                    <div className="cert-pres text-[11px] text-[#74798A] tracking-[2px] uppercase font-mono mb-2">This certifies that</div>
                                    <div className="cert-recipient font-serif text-[36px] font-bold text-[#0B1F3A] border-b-[1.5px] border-gold pb-2 inline-block mb-4">{certRecipient}</div>
                                    <div className="cert-earned text-[12.5px] text-[#3D4556] mb-4">has successfully earned the IKON SKILLS™ Micro-Credential in</div>
                                    <div className="cert-mc-name font-serif text-[27px] font-bold text-[#0B1F3A] leading-tight mb-2">{certName}</div>
                                    <div className="cert-domain text-[11px] text-gold font-mono font-bold tracking-[1px] mb-6">
                                        Category {staticMc?.cat || "01"} · {displayCert?.credential_name || staticCategory?.name || "AI & Automation"}
                                    </div>
                                    <div className="cert-note text-[12px] text-[#3D4556] leading-relaxed max-w-[460px] mx-auto mb-8">
                                        Having demonstrated mastery of all 10 core competencies as assessed by the IKON SKILLS™ AI-native assessment framework, in accordance with the European Qualifications Framework (EQF) standards.
                                    </div>

                                    <div className="cert-meta-row flex justify-center gap-6 md:gap-10 mb-8 flex-wrap">
                                        <div className="cert-mb">
                                            <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">ECTS Credits</div>
                                            <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">{staticMc?.ects || "10"} ECTS</div>
                                        </div>
                                        <div className="cert-mb">
                                            <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">EQF Level</div>
                                            <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">Level {staticMc?.level || "6"}</div>
                                        </div>
                                        <div className="cert-mb">
                                            <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">Date of Issue</div>
                                            <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">{certDate}</div>
                                        </div>
                                        <div className="cert-mb">
                                            <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">Credential ID</div>
                                            <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">{certNumber}</div>
                                        </div>
                                    </div>

                                    <div className="cert-seal-row flex flex-col md:flex-row justify-between items-center md:items-end pt-6 border-t border-gold/15 gap-8">
                                        <div className="cert-sig text-center">
                                            <div className="cert-sig-line w-[130px] h-[1px] bg-[#0B1F3A]/40 mx-auto mb-2"></div>
                                            <div className="cert-sig-n text-[10px] font-bold text-[#0B1F3A] font-mono">HON. KY. COL. PROF. DR. EDWARD ROY KRISHNAN</div>
                                            <div className="cert-sig-t text-[8.5px] text-[#74798A] font-mono mt-1">Founder & CEO, IKON SKILLS™ · EIU-Paris</div>
                                        </div>
                                        <div className="cert-seal w-[80px] h-[80px] rounded-full border-[2.5px] border-gold bg-gold/5 flex flex-col items-center justify-center text-center p-2">
                                            <div className="cert-seal-t text-[8.5px] font-bold text-gold font-mono leading-tight uppercase tracking-[0.4px]">IKON<br />SKILLS™<br />VERIFIED</div>
                                        </div>
                                        <div className="cert-sig text-center">
                                            <div className="cert-sig-line w-[130px] h-[1px] bg-[#0B1F3A]/40 mx-auto mb-2"></div>
                                            <div className="cert-sig-n text-[10px] font-bold text-[#0B1F3A] font-mono uppercase tracking-wider">Quality Assured</div>
                                            <div className="cert-sig-t text-[8.5px] text-[#74798A] font-mono mt-1">European International University, Paris<br />UAI 0756213W</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="cv-sidebar sticky top-[92px] animate-in fade-in slide-in-from-right-4 duration-700">
                    <div className="cv-panel bg-white border border-gold/20 rounded-2xl p-6 mb-4 shadow-xl">
                        <div className="cv-t text-[13px] font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <span>🔒</span> Credential Verification
                        </div>

                        {/* Sidebar Recipient Photo */}
                        <div className="cv-profile-box flex items-center gap-4 mb-6 pb-6 border-b border-[#0B1F3A]/5">
                            <div className="w-[60px] h-[60px] rounded-full border-2 border-gold overflow-hidden bg-gold/5 shrink-0">
                                <Image
                                    src={certPhoto}
                                    alt={certRecipient}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-[14px] font-bold text-[#0B1F3A] truncate max-w-[150px]">{certRecipient}</div>
                                <div className="text-[10px] text-green-600 font-bold uppercase tracking-wider flex items-center gap-1">
                                    {isVerifying ? (
                                        <Loader2 className="w-2 h-2 animate-spin" />
                                    ) : (
                                        <span>✓</span>
                                    )}
                                    Verified Identity
                                </div>
                            </div>
                        </div>

                        <div className="cv-id bg-[#F9F5EE] border border-gold/10 rounded-lg p-3 text-[11.5px] font-mono text-[#1A1A1E] break-all mb-4">
                            {certNumber}
                        </div>
                        <div className="space-y-3">
                            {[
                                { l: 'Practitioner', v: certRecipient },
                                { l: 'Credential', v: certName },
                                { l: 'Domain', v: displayCert?.credential_name || `Cat ${staticMc?.cat || "01"} · ${staticCategory?.name || "AI & Automation"}` },
                                { l: 'ECTS', v: `${staticMc?.ects || "10"} ECTS · EQF ${staticMc?.level || "6"}` },
                                { l: 'Date Issued', v: certDate },
                                { l: 'Quality Assured By', v: 'EIU-Paris' },
                                { l: 'Status', v: certIsValid ? '✓ Verified' : '⚠ Invalid / Pending', color: certIsValid ? '#0A6B45' : '#cb2d39' },
                            ].map((row, i) => (
                                <div key={i} className="cv-row flex justify-between text-[12px] pb-2 border-b border-[#0B1F3A]/5 last:border-0 last:pb-0">
                                    <span className="cv-l text-[#74798A]">{row.l}</span>
                                    <span className="cv-v font-bold text-[#0B1F3A] truncate max-w-[120px]" style={row.color ? { color: row.color } : {}} title={row.v as string}>{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={handleDownload} className="btn-dl w-full bg-gold text-white font-bold text-[13.5px] py-3 rounded-xl shadow-[0_4px_0_#8a1e27] hover:bg-gold2 hover:translate-y-[2px] hover:shadow-[0_2px_0_#8a1e27] active:shadow-none active:translate-y-[4px] transition-all mb-3">
                        ⬇ Download Certificate (PDF)
                    </button>


                    <div className="note bg-[#F9F5EE] border border-gold/15 rounded-2xl p-4">
                        <div className="text-[12px] font-bold text-[#0B1F3A] mb-2">What this certificate proves</div>
                        <div className="text-[12px] text-[#3D4556] leading-relaxed">
                            This IKON SKILLS™ Micro-Credential certificate is quality assured by European International University, Paris (UAI 0756213W) and verifies mastery of 10 EQF-aligned competencies. It carries 10 ECTS and is stackable toward full degree programs at EIU-Paris.
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
