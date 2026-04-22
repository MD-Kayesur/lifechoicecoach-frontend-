"use client";

import { Award, ShieldCheck, Download, ExternalLink, QrCode, MapPin, Globe, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { 
    useGetPractitionerCertificatesQuery,
    useGetDashboardOverviewQuery 
} from "@/redux/features/practitioner/PractitionerManagementApi";
import Link from "next/link";

export const MCPassport = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    
    const { data: certificatesData, isLoading: isCertsLoading } = useGetPractitionerCertificatesQuery();
    console.log(certificatesData,"certificatesData")
    const { data: overviewData, isLoading: isOverviewLoading } = useGetDashboardOverviewQuery();

    const dashboard = overviewData?.dashboard;
    const fullName = dashboard?.practitioner_name || user?.name || (user?.first_name ? `${user.first_name} ${user.last_name || ""}` : "Edward Krishnan");

    // const staticCredentials = [
    //     { n: 'AI Prompt Engineer', e: '10 ECTS · EQF 6', d: 'Category 01 · AI & Automation', color: 'text-blue-400' },
    //     { n: 'Generative AI Practitioner', e: '10 ECTS · EQF 6', d: 'Category 01 · AI & Automation', color: 'text-purple-400' },
    //     { n: 'Responsible AI Practitioner', e: '10 ECTS · EQF 7', d: 'Category 01 · AI & Automation', color: 'text-emerald-400' },
    // ];

    const displayCerts = certificatesData?.certificates || [];

    if (isOverviewLoading || isCertsLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] space-y-4">
                <Loader2 className="w-12 h-12 text-gold animate-spin" />
                <p className="text-white/40 font-mono text-[11px] uppercase tracking-widest">Generating Digital Passport...</p>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-700 space-y-12">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-[24px] font-bold text-white font-cormorant">IKON Digital Passport</h2>
                    <p className="text-white/40 text-[13px] font-outfit">Verified Practitioner Identity & Credential Vault</p>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                    <Globe size={14} className="text-emerald-400" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Global Validity · EQF/ECTS</span>
                </div>
            </div>

            {/* Passport Identity Card */}
            <div className="mx-auto max-w-[560px] bg-gradient-to-br from-[#0B1F3A] via-[#0d1a2e] to-[#0B1F3A] border-[3px] border-gold/40 rounded-[32px] p-8 relative overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                {/* Decorative background elements */}
                <div className="absolute top-[-50px] left-[-50px] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(203,45,57,0.15)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(26,58,107,0.4)_0%,transparent_70%)] pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>

                <div className="flex justify-between items-start mb-10 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center font-bold text-white font-serif text-[22px] shadow-[0_10px_20px_rgba(203,45,57,0.4)]">I</div>
                        <div>
                            <div className="text-white font-serif font-bold text-[20px] tracking-tight">IKON SKILLS<sup className="text-[10px] text-primary align-super">™</sup></div>
                            <div className="text-gold3 text-[10px] font-mono font-bold tracking-[2px] uppercase flex items-center gap-2">
                                <ShieldCheck size={12} />
                                Verified Practitioner
                            </div>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <QrCode size={24} className="text-white/20" />
                    </div>
                </div>

                <div className="flex gap-8 mb-12 relative z-10 items-center">
                    <div className="relative">
                        <div className="w-[140px] h-[170px] bg-white/5 border-2 border-white/10 rounded-2xl flex items-center justify-center text-[64px] overflow-hidden group-hover:border-gold/30 transition-all duration-500 shadow-inner">
                            {user?.role === "IKON Practitioner" ? "👨‍🎓" : "👨‍💼"}
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-primary border-4 border-[#0B1F3A] flex items-center justify-center shadow-lg">
                            <Award size={18} className="text-white" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-5">
                        <div className="border-b border-white/10 pb-2">
                            <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Holder Name</div>
                            <div className="text-white text-[19px] font-bold font-outfit">{fullName}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Passport ID</div>
                                <div className="text-gold text-[13px] font-mono font-bold">{dashboard?.practitioner_id || "PENDING"}</div>
                            </div>
                            <div>
                                <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Verified Credits</div>
                                <div className="text-white text-[14px] font-bold font-outfit">{dashboard?.ects_accumulated || 0} ECTS · EQF 6/7</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                    {[
                        { l: 'Accreditation', v: 'EIU-Paris' },
                        { l: 'Quality Assured', v: 'ASIC Premier · UK' },
                        { l: 'Issued At', v: 'Kuala Lumpur, MY' },
                        { l: 'Validity', v: 'Indefinite / Permanent' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
                            <div className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1.5px]">{item.l}</div>
                            <div className="text-white/80 text-[11px] font-bold truncate tracking-wide">{item.v}</div>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 pt-6 border-t border-gold/20 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-widest">
                        <MapPin size={12} className="text-primary" />
                        Status: Active
                    </div>
                    <button className="bg-primary text-white text-[12px] font-bold px-8 py-3 rounded-xl shadow-[0_10px_20px_rgba(203,45,57,0.3)] hover:bg-gold2 transition-all transform hover:-translate-y-1 active:scale-95 border border-primary/20">
                        Share Passport Link
                    </button>
                </div>
            </div>

            {/* Verified Stamps Gallery */}
            <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                    <div className="text-[12px] font-mono font-bold text-gold3 uppercase tracking-[4px]">Verified Passport Stamps</div>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayCerts.length > 0 ? (
                        displayCerts.map((cert, i) => (
                            <div key={cert.id} className="bg-[#0B1F3A]/40 border border-white/10 rounded-[28px] p-6 relative group overflow-hidden hover:border-gold/40 transition-all duration-500 backdrop-blur-sm">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-700">
                                    <ShieldCheck size={80} />
                                </div>

                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 shadow-inner">
                                        <Award size={30} />
                                    </div>
                                    <div className="p-badge inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[9px] font-bold text-emerald-400 font-mono tracking-widest uppercase">
                                            {cert.is_valid ? "Verified" : "Pending"}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-white text-[17px] font-bold leading-tight font-outfit h-[42px] line-clamp-2">{cert.credential_name}</h4>
                                    <div className="space-y-2">
                                        <div className="text-white/40 text-[10px] font-mono tracking-widest uppercase">Issued: {cert.issue_date}</div>
                                        <div className="text-gold/80 text-[11.5px] font-bold flex items-center gap-2">
                                            <div className="w-4 h-px bg-gold/40"></div>
                                            10 ECTS · EQF 6
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/5">
                                    <Link
                                        href={`/certificate?id=${cert.id}`}
                                        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold py-2.5 rounded-xl transition-all font-outfit text-center"
                                    >
                                        <Download size={14} />
                                        Certificate
                                    </Link>
                                    <Link
                                        href={`/certificate?id=${cert.id}`}
                                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-primary/20 text-white/70 hover:text-white text-[11px] font-bold py-2.5 rounded-xl border border-white/10 hover:border-primary/40 transition-all font-outfit text-center"
                                    >
                                        <ShieldCheck size={14} />
                                        Verify
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <></>
                        // staticCredentials.map((cred, i) => (
                        //     <div key={i} className="bg-[#0B1F3A]/40 border border-white/10 rounded-[28px] p-6 relative group overflow-hidden hover:border-gold/40 transition-all duration-500 backdrop-blur-sm opacity-60">
                        //         <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-700">
                        //             <ShieldCheck size={80} />
                        //         </div>

                        //         <div className="flex items-start justify-between mb-8">
                        //             <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${cred.color} shadow-inner`}>
                        //                 <Award size={30} />
                        //             </div>
                        //             <div className="p-badge inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                        //                 <span className="text-[9px] font-bold text-white/30 font-mono tracking-widest uppercase">Sample</span>
                        //             </div>
                        //         </div>

                        //         <div className="space-y-4 mb-8">
                        //             <h4 className="text-white text-[17px] font-bold leading-tight font-outfit h-[42px] line-clamp-2">{cred.n}</h4>
                        //             <div className="space-y-2">
                        //                 <div className="text-white/40 text-[10px] font-mono tracking-widest uppercase">{cred.d}</div>
                        //                 <div className="text-gold/80 text-[11.5px] font-bold flex items-center gap-2">
                        //                     <div className="w-4 h-px bg-gold/40"></div>
                        //                     {cred.e}
                        //                 </div>
                        //             </div>
                        //         </div>

                        //         <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/5">
                        //             <Link href="/certificate" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold py-2.5 rounded-xl transition-all font-outfit text-center">
                        //                 <Download size={14} />
                        //                 Preview
                        //             </Link>
                        //             <Link href="/certificate" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-primary/20 text-white/70 hover:text-white text-[11px] font-bold py-2.5 rounded-xl border border-white/10 hover:border-primary/40 transition-all font-outfit text-center">
                        //                 <ExternalLink size={14} />
                        //                 Verify
                        //             </Link>
                        //         </div>
                        //     </div>
                        // ))
                    )}
                </div>
            </div>
        </div>
    );
};
