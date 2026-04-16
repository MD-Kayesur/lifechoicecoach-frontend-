"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useGetLessonCompetenciesQuery } from "@/redux/features/lesson/lessonCompetenciesApi";
import { useMemo } from "react";

export const CredentialDetail = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get("id");

    // Fetch data from API using micro_credential_id
    const { data: apiResponse, isLoading, isError } = useGetLessonCompetenciesQuery(
        id ? { micro_credential_id: Number(id) } : undefined
    );

    // Extract micro-credential and domain from the API response
    const { mc, domain } = useMemo(() => {
        if (!apiResponse?.data?.domains || apiResponse.data.domains.length === 0) {
            return { mc: null, domain: null };
        }

        const firstDomain = apiResponse.data.domains[0];
        const firstMC = firstDomain.micro_credentials?.[0] || null;

        return {
            mc: firstMC,
            domain: firstDomain
        };
    }, [apiResponse]);

    if (isLoading) {
        return (
            <div className="pt-[62px] min-h-screen bg-[#0a1628] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-white/60 font-mono text-sm tracking-widest uppercase animate-pulse">Loading Credential Details...</div>
                </div>
            </div>
        );
    }

    if (isError || !mc) {
        return (
            <div className="pt-[62px] min-h-screen bg-[#0a1628] flex items-center justify-center">
                <div className="bg-white/5 p-10 rounded-2xl border border-white/10 text-center max-w-md">
                    <div className="text-4xl mb-6">⚠️</div>
                    <h2 className="text-white text-xl font-bold mb-3">Credential Not Found</h2>
                    <p className="text-white/50 mb-8">The requested micro-credential could not be loaded. It may have been moved or removed.</p>
                    <button
                        onClick={() => router.push('/catalog')}
                        className="bg-gold text-white font-bold px-6 py-3 rounded-xl hover:bg-gold2 transition-all"
                    >
                        Back to Catalog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-[62px] min-h-screen bg-[#0a1628]">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
                <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="text-sm text-white/50 hover:text-white mb-4 cursor-pointer flex items-center gap-2 transition-colors" onClick={() => router.push('/catalog')}>
                        ← Back to Catalog
                    </div>
                    <div className="text-[10px] font-semibold tracking-[1.5px] uppercase font-mono text-gold mb-2">
                        Domain: {domain?.domain}
                    </div>
                    <h1 className="font-serif font-bold text-[36px] text-white leading-tight mb-4">{mc.micro_credential}</h1>
                    <p className="text-[14.5px] text-white/60 leading-relaxed mb-8">
                        Master the verified competencies in {mc.micro_credential} as part of the {domain?.domain} domain. This IKON SKILLS™ Micro-Credential is quality assured and recognized internationally.
                    </p>

                    <div className="flex flex-wrap gap-8 mb-12">
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">ECTS Credits</div>
                            <div className="text-[15px] font-bold text-white">10 ECTS</div>
                        </div>
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">EQF Level</div>
                            <div className="text-[15px] font-bold text-white">EQF {mc.level || "6"}</div>
                        </div>
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">Competencies</div>
                            <div className="text-[15px] font-bold text-white">{mc.competencies?.length || 0} Core</div>
                        </div>
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">Assessment</div>
                            <div className="text-[15px] font-bold text-white">100% AI-Assessed</div>
                        </div>
                        <div className="w-full sm:w-auto">
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">Source</div>
                            <div className="text-[12.5px] font-bold text-white">{mc.source || "International Accreditation"}</div>
                        </div>
                    </div>

                    <div className="text-[11px] font-semibold tracking-[1px] uppercase font-mono text-white pb-2 border-b-2 border-white/10 mb-4">
                        Core Competencies
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                        {mc.competencies?.map((comp, i) => (
                            <div key={comp.id} className="flex flex-col gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-gold/10 transition-all group">
                                <div className="flex items-center justify-between">
                                    <div className="text-[10px] font-bold text-gold font-mono uppercase tracking-wider">C{String(i + 1).padStart(2, '0')}</div>
                                    <div className="text-[9px] text-white/30 font-mono group-hover:text-gold/50 transition-colors">ID: {comp.code || comp.id}</div>
                                </div>
                                <div className="text-[14px] font-bold text-white/90 leading-snug">{comp.title}</div>
                                <div className="text-[12px] text-white/50 leading-relaxed font-medium">{comp.description}</div>
                            </div>
                        )) || (
                                <div className="col-span-full py-4 text-white/50 text-sm italic">Competency details are being finalized for this credential.</div>
                            )}
                    </div>

                    <div className="text-[11px] font-semibold tracking-[1px] uppercase font-mono text-white pb-2 border-b-2 border-white/10 mb-4">
                        Stackable Degree Pathways
                    </div>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {["Applied AI & Automation", "Digital Intelligence & AI Operations", "Strategic Business Leadership"].map((path, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-3 min-w-[200px]">
                                <div className="text-[9px] font-mono text-white/45 uppercase tracking-[0.8px] mb-1">Degree Pathway</div>
                                <div className="text-[12.5px] font-bold text-white">{path}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="sticky top-[70px] h-fit animate-in fade-in slide-in-from-right-4 duration-700">
                    <div className="bg-gradient-to-br from-[#0f2240] to-[#0a1a30] rounded-2xl p-8 border border-gold/30 relative overflow-hidden mb-4 shadow-2xl">
                        <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full bg-radial-gradient from-gold/20 to-transparent pointer-events-none"></div>
                        <div className="text-[32px] mb-3">🏅</div>
                        <div className="font-serif font-bold text-[21px] text-white mb-1 leading-tight">{mc.micro_credential}</div>
                        <div className="text-[12px] text-white/55 mb-6">IKON SKILLS™ Verified Micro-Credential</div>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-[12px] pb-2 border-b border-white/10">
                                <span className="text-white/50">Quality Assured By</span>
                                <span className="text-white font-bold">EIU-Paris</span>
                            </div>
                            <div className="flex justify-between text-[12px] pb-2 border-b border-white/10">
                                <span className="text-white/50">Credential Format</span>
                                <span className="text-white font-bold">Digital Badge + PDF</span>
                            </div>
                            <div className="flex justify-between text-[12px] pb-2 border-b border-white/10">
                                <span className="text-white/50">ECTS Credits</span>
                                <span className="text-white font-bold">10 ECTS</span>
                            </div>
                            <div className="flex justify-between text-[12px] pb-2 border-b border-white/10">
                                <span className="text-white/50">EQF Level</span>
                                <span className="text-white font-bold">{mc.level || "6"}</span>
                            </div>
                            <div className="flex justify-between text-[12px]">
                                <span className="text-white/50">Assessment</span>
                                <span className="text-white font-bold">100% AI-Assessed</span>
                            </div>
                        </div>

                        <button onClick={() => router.push('/pricing#plans')} className="w-full bg-gold text-white font-bold text-[13.5px] py-3 rounded-xl shadow-[0_4px_0_#9a7e3a] hover:bg-gold2 hover:translate-y-[1px] hover:shadow-[0_3px_0_#9a7e3a] active:shadow-none active:translate-y-[4px] transition-all mb-3 text-center">
                            Enroll as Practitioner
                        </button>

                        <button className="w-full bg-white/10 text-white/85 font-medium text-[13px] py-2.5 rounded-xl border border-white/20 hover:bg-white/15 hover:text-white transition-all">
                            View Sample Certificate
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/15 rounded-2xl p-6">
                        <div className="text-[10px] font-bold tracking-[1.5px] uppercase font-mono text-white/45 mb-4">
                            Accreditation · EIU-Paris
                        </div>
                        <div className="space-y-3">
                            {['European International University, Paris', 'ACBSP Accredited Programs', 'ASIC Premier Institution', 'QS Stars 5/5 Rated', 'EQF-Aligned Competency Design'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-[12.5px] text-white/80 pb-2 border-b border-white/5 last:border-0 last:pb-0">
                                    <span className="text-[#4ade80]">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
