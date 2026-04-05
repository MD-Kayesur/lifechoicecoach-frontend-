"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { CheckCircle2, Award, Zap, Shield, Microscope, GraduationCap, Trophy, Globe, Star, Medal } from "lucide-react";

export const SampleMC = () => {
    const competencies = [
        { id: "C01", desc: "Write structured prompts with clear roles, context, and output specifications" },
        { id: "C02", desc: "Optimise outputs iteratively using feedback loops and version comparison" },
        { id: "C03", desc: "Control tone, format, and style to match diverse professional contexts" },
        { id: "C04", desc: "Chain prompts logically for multi-step reasoning and complex tasks" },
        { id: "C05", desc: "Handle edge cases and ambiguous inputs with graceful fallback strategies" },
        { id: "C06", desc: "Reduce hallucinations through grounding techniques and verification prompts" },
        { id: "C07", desc: "Apply task decomposition to break complex problems into manageable sequences" },
        { id: "C08", desc: "Validate outputs against accuracy, relevance, and compliance criteria" },
        { id: "C09", desc: "Use system-level instructions to configure AI behaviour for specific deployments" },
        { id: "C10", desc: "Build reusable prompt templates and libraries for organisational AI workflows" }
    ];

    const degreePathways = [
        { type: "BACHELOR", title: "BBA in Applied AI & Automation" },
        { type: "BACHELOR", title: "BBA in Digital Intelligence & AI Operations" },
        { type: "MASTER", title: "MBA in AI Strategy & Governance" },
        { type: "DOCTORATE", title: "DProf in AI Leadership" }
    ];

    return (
        <section className="py-24 bg-[#020617] text-white relative">
            {/* Background container with overflow-hidden */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Background pattern - diagonal lines */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, #1e293b 0, #1e293b 1px, transparent 0, transparent 15px)`,
                    }}
                />
            </div>

            <CommonWrapper className="max-w-[1400px] relative z-10">
                <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">

                    {/* Main Content Area */}
                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {/* Header Section */}
                        <div className="space-y-6">
                            <div className="text-[10px] text-primary font-black uppercase tracking-[4px]">CATEGORY 01 · AI, AUTOMATION & DIGITAL INTELLIGENCE</div>
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white italic font-serif">AI Prompt Engineer</h1>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                Master the art and science of crafting, optimising, and deploying AI prompts that produce reliable, high-quality outputs at scale. This IKON SKILLS™ Micro-Credential covers structured prompt design, iterative optimisation, bias mitigation, and reusable template architecture for professional AI workflows.
                            </p>
                        </div>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap gap-12 border-y border-white/5 py-8">
                            {[
                                { label: "ECTS CREDITS", val: "10 ECTS" },
                                { label: "EQF LEVEL", val: "EQF 6 / 7 / 8" },
                                { label: "COMPETENCIES", val: "10 Core" },
                                { label: "ASSESSMENT", val: "100% AI-Assessed" },
                                { label: "QUALITY ASSURED BY", val: "European International University, Paris", full: true },
                            ].map((stat, i) => (
                                <div key={i} className={`space-y-2 ${stat.full ? 'flex-1' : ''}`}>
                                    <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-60">{stat.label}</div>
                                    <div className={`text-sm md:text-base font-bold text-white uppercase tracking-tight ${stat.full ? 'text-primary' : ''}`}>{stat.val}</div>
                                </div>
                            ))}
                        </div>

                        {/* Competencies Section */}
                        <div className="space-y-8">
                            <h2 className="text-[10px] font-black text-white uppercase tracking-[4px]">10 CORE COMPETENCIES</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {competencies.map((comp) => (
                                    <div key={comp.id} className="group relative bg-white/5 border border-white/5 hover:border-primary/30 p-6 rounded-xl transition-all duration-300 flex gap-6 items-start">
                                        <div className="text-[10px] text-primary font-black uppercase tracking-widest mt-1 opacity-60">{comp.id}</div>
                                        <p className="text-sm font-medium text-white/90 leading-relaxed group-hover:text-white transition-colors">{comp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stackable Section */}
                        <div className="space-y-8 pt-8">
                            <h2 className="text-[10px] font-black text-white uppercase tracking-[4px]">STACKABLE DEGREE PATHWAYS AT EIU-PARIS</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {degreePathways.map((degree, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
                                        <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest mb-2 opacity-60">{degree.type}</div>
                                        <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{degree.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="sticky top-28 h-fit space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000">
                        {/* Main Summary Card */}
                        <div className="relative group overflow-hidden bg-[#0a1122] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl shadow-black/60">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] -mr-16 -mt-16" />

                            <div className="relative space-y-8">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Medal className="text-primary w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-white">AI Prompt Engineer</h3>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">IKON SKILLS™ Verified Micro-Credential</p>
                                    </div>
                                </div>

                                <div className="space-y-4 border-t border-white/5 pt-6">
                                    {[
                                        { label: "Quality Assured By", val: "EIU-Paris" },
                                        { label: "Credential Format", val: "Digital Badge + PDF" },
                                        { label: "ECTS Credits", val: "10 ECTS" },
                                        { label: "EQF Levels", val: "6 / 7 / 8" },
                                        { label: "Assessment", val: "100% AI-Assessed" }
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between items-center text-[11px] font-bold">
                                            <span className="text-muted-foreground opacity-60">{row.label}</span>
                                            <span className="text-white tracking-widest">{row.val}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-4">
                                    <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-[12px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]">
                                        Enroll as IKON Practitioner
                                    </button>
                                    <button className="w-full h-14 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[12px] font-black uppercase tracking-widest rounded-xl transition-all">
                                        View Sample Certificate
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Accreditation Card */}
                        <div className="bg-[#0a1122]/50 border border-white/5 rounded-[2.5rem] p-8 shadow-xl">
                            <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[3px] mb-6 opacity-60">QUALITY ASSURANCE · EIU-PARIS</h4>
                            <div className="space-y-4">
                                {[
                                    "European International University, Paris",
                                    "ACBSP Accredited Programs",
                                    "ASIC Premier Institution",
                                    "QS Stars 5/5 Rated",
                                    "CEOWORLD Top 50 B-School 2025",
                                    "EQF-Aligned Competency Design"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center group">
                                        <CheckCircle2 size={12} className="text-primary group-hover:scale-125 transition-transform" />
                                        <span className="text-[11px] font-bold text-white/80 opacity-80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </CommonWrapper>
        </section>
    );
};
