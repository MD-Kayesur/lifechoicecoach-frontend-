"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { CheckCircle2, User, Award, Globe, Database } from "lucide-react";

export const IkonPassport = () => {
    const listItems = [
        {
            title: "Live credential registry",
            desc: "All earned Micro-Credentials appear instantly with verification status and competency detail.",
        },
        {
            title: "Unique Practitioner ID",
            desc: "Each IKON Practitioner receives a unique, verifiable digital identity across the platform.",
        },
        {
            title: "Shareable public profile",
            desc: "Share a single link showing your full Passport to anyone, anywhere, without login.",
        },
        {
            title: "Degree progress tracker",
            desc: "See exactly how many more Micro-Credentials you need to unlock a full degree from EIU-Paris.",
        }
    ];

    const earnedMCs = [
        { name: "AI Prompt Engineer", credits: "10 ECTS · EQF 6" },
        { name: "Generative AI Practitioner", credits: "10 ECTS · EQF 6" },
        { name: "Responsible AI Practitioner", credits: "10 ECTS · EQF 7" },
        { name: "Data Storytelling Designer", credits: "10 ECTS · EQF 6" },
        { name: "Strategic Thinking Practitioner", credits: "10 ECTS · EQF 7" },
        { name: "AI Decision Support Analyst", credits: "10 ECTS · EQF 7" }
    ];

    return (
        <section id="passport" className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background pattern - diagonal lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, #1e293b 0, #1e293b 1px, transparent 0, transparent 15px)`,
                }}
            />

            {/* Glowing background elements */}
            <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] glow-blue opacity-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] glow-red opacity-10 pointer-events-none" />

            <CommonWrapper className="max-w-[1400px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                        <div className="space-y-4">
                            <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">FEATURED · IKON SKILLS™ PASSPORT</div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                                Your IKON SKILLS™ <br />
                                <span className="italic font-serif">Micro-Credential Passport</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                                Every Micro-Credential you earn is logged in your personal digital Passport —
                                a portable, verifiable record of exactly what you can do. Show employers,
                                clients, and institutions your Proof of Skill in seconds.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {listItems.map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                            <CheckCircle2 size={12} className="stroke-[3px]" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm opacity-80 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Passport Card */}
                    <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000" />

                        <div className="relative bg-[#0a1122] rounded-3xl border border-white/10 shadow-2xl overflow-hidden shadow-black/80">
                            {/* Top Bar */}
                            <div className="bg-primary px-8 py-4 flex justify-between items-center">
                                <span className="text-white font-black text-xs tracking-widest uppercase">IKON SKILLS™</span>
                                <span className="text-white/60 font-bold text-[10px] tracking-[3px] uppercase">MICRO-CREDENTIAL PASSPORT</span>
                            </div>

                            {/* Body */}
                            <div className="p-8 md:p-10 space-y-8">
                                <div className="space-y-1">
                                    <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-60">IKON PRACTITIONER</div>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">Edward Roy Krishnan</h3>
                                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold">
                                        <span className="text-primary italic">ID: IKON-P-2026-08042</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className="text-muted-foreground uppercase opacity-80">Quality Assured by EIU-Paris</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[3px] opacity-60 border-t border-white/5 pt-6">
                                        EARNED MICRO-CREDENTIALS · 6 OF 18 TOWARD BBA AT EIU-PARIS
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {earnedMCs.map((mc, index) => (
                                            <div key={index} className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-1 hover:bg-white/[0.08] transition-all">
                                                <div className="text-[10px] text-white font-bold leading-tight line-clamp-1">{mc.name}</div>
                                                <div className="text-[8px] text-primary font-bold uppercase tracking-widest">{mc.credits}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="text-[9px] text-muted-foreground uppercase font-black tracking-widest opacity-60">
                                        Quality Assured: EIU-Paris · UAI 0756213W
                                    </div>
                                    <div className="text-[10px] text-primary font-black uppercase tracking-widest">
                                        60 ECTS Accumulated
                                    </div>
                                </div>
                            </div>

                            {/* Glass overlay effect */}
                            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
