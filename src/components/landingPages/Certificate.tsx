"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { MCS, DOMAINS } from "@/lib/data";
import Image from "next/image";
import certPhoto from "@/assets/cirtificate/Untitled-2.png";
import ikonLogo from "@/assets/images/ikon_logo.png";
import jsPDF from "jspdf";
import { useRef, useMemo } from "react";
import { useGetLessonCompetenciesQuery, MicroCredential, DomainHierarchy } from "@/redux/features/lesson/lessonCompetenciesApi";
import { useGetProfileQuery } from "@/redux/features/profile/profileApi";
import { skipToken } from "@reduxjs/toolkit/query";

export const Certificate = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get("id");
     
    // Fetch User Profile
    const { data: profileData } = useGetProfileQuery();
    console.log("Profile Data:", profileData);
    const userName = (profileData?.profile?.first_name || "") + " " + (profileData?.profile?.last_name || "") || "Practitioner Name";

    // Fetch Micro-Credential Details from API
    const mcId = Number(id);
    const { data: apiResponse } = useGetLessonCompetenciesQuery(
        !isNaN(mcId) ? { micro_credential_id: mcId } : skipToken
    );
    console.log("API Response:", apiResponse);
    const domain: DomainHierarchy | undefined = apiResponse?.data?.domains?.[0];
    const mc1: (MicroCredential & { domain_name?: string }) | undefined = domain?.micro_credentials?.[0];
    
    if (mc1) {
        console.log(mc1.domain_name);        // "AI & Automaiton"
        console.log(mc1.micro_credential); 
    }
    console.log("ID:", id);
    // Extract dynamic data
    const { dynamicMC, dynamicDomain } = useMemo(() => {
        if (!apiResponse?.data?.domains || apiResponse.data.domains.length === 0) {
            return { dynamicMC: null, dynamicDomain: null };
        }
        const domain = apiResponse.data.domains[0];
        const mc = domain.micro_credentials?.[0] || null;
        return { dynamicMC: mc, dynamicDomain: domain };
    }, [apiResponse]);

    // Fallback to static data if API not available or for static IDs
    const mc = dynamicMC ? {
        id: dynamicMC.id.toString(),
        name: dynamicMC.micro_credential,
        level: dynamicMC.level || "6",
        ects: 10,
        cat: dynamicDomain?.domain || "01"
    } : (MCS.find(item => item.id === (id || "01-01")) || MCS[0]);

    const category = dynamicDomain ? {
        id: dynamicDomain.domain,
        name: dynamicDomain.name
    } : (DOMAINS.find(d => d.id === mc.cat) || DOMAINS[0]);

    const certRef = useRef<HTMLDivElement>(null);

    const handleDownload = () => {
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
            pdf.setTextColor(91, 86, 85); // Matches #5B5655
            pdf.text(mc1?.domain_name || category.name || "", pdfWidth / 2, 52, { align: "center" });

            // 1. Recipient Name
            pdf.setFont("serif", "bold");
            pdf.setFontSize(28);
            pdf.setTextColor(91, 86, 85); // Matches #5B5655
            pdf.text(userName, pdfWidth / 2, 75, { align: "center" });

            // 2. Micro-Credential Names
            pdf.setFont("serif", "normal");
            pdf.setFontSize(22);
            pdf.setTextColor(91, 86, 85);
            pdf.text(mc1?.micro_credential || mc.name, pdfWidth / 2, 102, { align: "center" });

            // 3. Issue Date
            pdf.setFont("monospace", "normal");
            pdf.setFontSize(10);
            pdf.setTextColor(91, 86, 85);
            const issueDate = "07 March 2026";
            pdf.text(issueDate, 65, 124.5);

            // 4. Certificate ID
            const certId = `IKS-${mc.id}-2026-4201-XKPM7`;
            pdf.text(certId, 122, 124.5);

            pdf.save(`IKON-Skills-Certificate-${mc.name.replace(/\s+/g, '-')}.pdf`);
        };

        img.onerror = () => {
            alert("Failed to load certificate template image.");
        };
    };

    return (
        <div id="page-certificate" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            <div className="cert-layout max-w-[1200px] mx-auto px-8 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
                <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                    <div 
                        className="cert-bc text-sm text-white/50 hover:text-white mb-6 cursor-pointer flex items-center gap-2 transition-colors" 
                        onClick={() => router.push(`/sample-mc?id=${id}`)}
                    >
                        ← Back to Credential
                    </div>
                    <div className="header mb-8">
                        <div className="eyebrow text-gold font-bold text-[10.5px] tracking-[2px] uppercase font-mono mb-2">Sample Micro-Credential Certificate</div>
                        <h2 className="sec-h font-serif font-bold text-[26px] text-white leading-tight mb-4 ml-0">This is what your Proof of Skill looks like.</h2>
                        <p className="text-[13.5px] text-white/60 leading-relaxed max-w-[520px]">
                            Every IKON SKILLS™ Micro-Credential you earn generates a formal digital certificate quality assured by European International University, Paris — together with a digital badge for your IKON SKILLS™ Passport.
                        </p>
                    </div>

                    {/* Certificate Card with Dynamic Overlays */}
                    <div className="relative group overflow-hidden rounded-xl border border-gold/20 shadow-2xl">
                        <Image src={certPhoto} alt="Certificate Template" className="w-full h-auto" priority />
                        
                        {/* Dynamic Overlays */}
                        {/* <div className="absolute inset-0 flex flex-col items-center pointer-events-none" style={{ paddingTop: '23.5%' }}>
                              <div className="text-[2.2vw] lg:text-[34px] font-serif font-bold text-[#5b5655]">
                                {userName}
                            </div>
                            
                              <div className="text-[1.8vw] lg:text-[28px] font-serif text-[#5b5655] mt-[2.5%]">
                                {mc1?.micro_credential || mc.name}
                            </div>

                              <div className="absolute top-[59%] left-[23%] text-[0.8vw] lg:text-[10.5px] font-mono text-[#5b5655]">
                                07 March 2026
                            </div>
                            <div className="absolute top-[59%] left-[41.5%] text-[0.8vw] lg:text-[10.5px] font-mono text-[#5b5655]">
                                IKS-{mc.id}-2026-4201-XKPM7
                            </div>
                        </div> */}
                    </div>
                </div>

                <aside className="cv-sidebar sticky top-[92px] animate-in fade-in slide-in-from-right-4 duration-700">
                    <div className="cv-panel bg-white border border-gold/20 rounded-2xl p-6 mb-4 shadow-xl">
                        <div className="cv-t text-[13px] font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <span>🔒</span> Credential Verification
                        </div>

                        <div className="cv-profile-box flex items-center gap-4 mb-6 pb-6 border-b border-[#0B1F3A]/5">
                            <div className="w-[60px] h-[60px] rounded-full border-2 border-gold overflow-hidden bg-gold/5 shrink-0">
                                <Image
                                    src={certPhoto}
                                    alt={userName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-[14px] font-bold text-[#0B1F3A]">{userName}</div>
                                <div className="text-[10px] text-green-600 font-bold uppercase tracking-wider">✓ Verified Identity</div>
                            </div>
                        </div>

                        <div className="cv-id bg-[#F9F5EE] border border-gold/10 rounded-lg p-3 text-[11.5px] font-mono text-[#1A1A1E] break-all mb-4">
                            IKS-{mc.id}-2026-4201-XKPM7
                        </div>
                        <div className="space-y-3">
                            {[
                                { l: 'Practitioner', v: userName },
                                { l: 'Credential', v: mc.name },
                                { l: 'Domain', v: `Cat ${mc.cat} · ${category?.name}` },
                                { l: 'ECTS', v: `${mc.ects} ECTS · EQF ${mc.level}` },
                                { l: 'Date Issued', v: '07 March 2026' },
                                { l: 'Quality Assured By', v: 'EIU-Paris' },
                                { l: 'Status', v: '✓ Verified', color: '#0A6B45' },
                            ].map((row, i) => (
                                <div key={i} className="cv-row flex justify-between text-[12px] pb-2 border-b border-[#0B1F3A]/5 last:border-0 last:pb-0">
                                    <span className="cv-l text-[#74798A]">{row.l}</span>
                                    <span className="cv-v font-bold text-[#0B1F3A]" style={row.color ? { color: row.color } : {}}>{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={handleDownload} className="btn-dl w-full bg-gold text-white font-bold text-[13.5px] py-3 rounded-xl shadow-[0_4px_0_#9a7e3a] hover:bg-gold2 hover:translate-y-[2px] hover:shadow-[0_2px_0_#9a7e3a] active:shadow-none active:translate-y-[4px] transition-all mb-3">
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
