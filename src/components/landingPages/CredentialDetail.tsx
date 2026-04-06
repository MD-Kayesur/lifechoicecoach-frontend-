"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { MCS, DOMAINS } from "@/lib/data";

export const CredentialDetail = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get("id") || "01-01";
    const mc = MCS.find(item => item.id === id) || MCS[0];
    const category = DOMAINS.find(d => d.id === mc.cat);

    return (
        <div className="pt-[62px] min-h-screen bg-[#0a1628]">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
                <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="text-sm text-white/50 hover:text-white mb-4 cursor-pointer flex items-center gap-2 transition-colors" onClick={() => router.push('/catalog')}>
                        ← Back to Catalog
                    </div>
                    <div className="text-[10px] font-semibold tracking-[1.5px] uppercase font-mono text-gold mb-2">
                        Category {mc.cat} · {category?.longName}
                    </div>
                    <h1 className="font-serif font-bold text-[36px] text-white leading-tight mb-4">{mc.name}</h1>
                    <p className="text-[14.5px] text-white/60 leading-relaxed mb-8">
                        Master the art and science of crafting, optimising, and deploying AI prompts that produce reliable, high-quality outputs at scale. This IKON SKILLS™ Micro-Credential covers structured prompt design, iterative optimisation, bias mitigation, and reusable template architecture for professional AI workflows.
                    </p>

                    <div className="flex flex-wrap gap-8 mb-12">
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">ECTS Credits</div>
                            <div className="text-[15px] font-bold text-white">{mc.ects} ECTS</div>
                        </div>
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">EQF Level</div>
                            <div className="text-[15px] font-bold text-white">EQF {mc.level}</div>
                        </div>
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">Competencies</div>
                            <div className="text-[15px] font-bold text-white">10 Core</div>
                        </div>
                        <div>
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">Assessment</div>
                            <div className="text-[15px] font-bold text-white">100% AI-Assessed</div>
                        </div>
                        <div className="w-full sm:w-auto">
                            <div className="text-[9.5px] font-semibold tracking-[1.2px] uppercase text-white/45 font-mono mb-1">Quality Assured By</div>
                            <div className="text-[12.5px] font-bold text-white">European International University, Paris</div>
                        </div>
                    </div>

                    <div className="text-[11px] font-semibold tracking-[1px] uppercase font-mono text-white pb-2 border-b-2 border-white/10 mb-4">
                        10 Core Competencies
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                        {mc.competencies?.map((comp, i) => (
                            <div key={i} className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-gold/10 transition-all">
                                <div className="text-[10px] font-bold text-gold font-mono min-w-[22px] pt-0.5">C{String(i + 1).padStart(2, '0')}</div>
                                <div className="text-[12px] text-white/85 leading-relaxed">{comp}</div>
                            </div>
                        )) || (
                                <div className="col-span-full py-4 text-white/50 text-sm">Competency details are being finalized.</div>
                            )}
                    </div>

                    <div className="text-[11px] font-semibold tracking-[1px] uppercase font-mono text-white pb-2 border-b-2 border-white/10 mb-4">
                        Stackable Degree Pathways at EIU-Paris
                    </div>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {["Bachelor of Applied AI & Automation", "Bachelor of Digital Intelligence & AI Operations", "MBA in AI Strategy & Governance", "DProf in AI Leadership"].map((degree, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-3 min-w-[200px]">
                                <div className="text-[9px] font-mono text-white/45 uppercase tracking-[0.8px] mb-1">
                                    {degree.includes("Bachelor") ? "Bachelor" : degree.includes("MBA") ? "Master" : "Doctorate"}
                                </div>
                                <div className="text-[12.5px] font-bold text-white">{degree}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="sticky top-[92px] animate-in fade-in slide-in-from-right-4 duration-700">
                    <div className="bg-gradient-to-br from-[#0f2240] to-[#0a1a30] rounded-2xl p-8 border border-gold/30 relative overflow-hidden mb-4 shadow-2xl">
                        <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full bg-radial-gradient from-gold/20 to-transparent pointer-events-none"></div>
                        <div className="text-[32px] mb-3">🏅</div>
                        <div className="font-serif font-bold text-[21px] text-white mb-1">{mc.name}</div>
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
                                <span className="text-white font-bold">{mc.ects} ECTS</span>
                            </div>
                            <div className="flex justify-between text-[12px] pb-2 border-b border-white/10">
                                <span className="text-white/50">EQF Levels</span>
                                <span className="text-white font-bold">{mc.level}</span>
                            </div>
                            <div className="flex justify-between text-[12px]">
                                <span className="text-white/50">Assessment</span>
                                <span className="text-white font-bold">100% AI-Assessed</span>
                            </div>
                        </div>

                        <button className="w-full bg-gold text-white font-bold text-[13.5px] py-3 rounded-xl shadow-[0_5px_0_#8a1e27] hover:bg-gold2 hover:translate-y-[2px] hover:shadow-[0_3px_0_#8a1e27] active:shadow-none active:translate-y-[5px] transition-all mb-3 text-center">
                            Enroll as IKON Practitioner
                        </button>
                        <button className="w-full bg-white/10 text-white/85 font-medium text-[13px] py-2.5 rounded-xl border border-white/20 hover:bg-white/15 hover:text-white transition-all" onClick={() => router.push('/certificate')}>
                            View Sample Certificate
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/15 rounded-2xl p-6">
                        <div className="text-[10px] font-bold tracking-[1.5px] uppercase font-mono text-white/45 mb-4">
                            Quality Assurance · EIU-Paris
                        </div>
                        <div className="space-y-3">
                            {['European International University, Paris', 'ACBSP Accredited Programs', 'ASIC Premier Institution', 'QS Stars 5/5 Rated', 'CEOWORLD Top 50 B-School 2025', 'EQF-Aligned Competency Design'].map((item, i) => (
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
